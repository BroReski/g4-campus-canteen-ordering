const priceFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
});

const menuIllustrations = {
  'Nasi Goreng Spesial': '🍳',
  'Mie Ayam Bakso': '🍜',
  'Ayam Penyet': '🍗',
  'Soto Ayam Lamongan': '🍲',
  'Es Teh Manis': '🧋',
  'Kentang Goreng': '🍟',
  'Gado-Gado': '🥗',
  'Jus Alpukat': '🥑',
  'Fruit Bowl': '🍓',
};

export default function MenuCard({ menuItem, onAddToCart }) {
  const { name, price, category, isAvailable, tenantName } = menuItem;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/70">
      <div
        className={`relative flex h-36 items-center justify-center overflow-hidden ${
          category === 'Minuman'
            ? 'bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-100'
            : category === 'Snack'
              ? 'bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100'
              : 'bg-gradient-to-br from-orange-100 via-rose-50 to-amber-100'
        }`}
      >
        <div
          aria-hidden="true"
          className="absolute -right-6 -top-10 size-36 rounded-full border-[18px] border-white/40"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-12 -left-6 size-32 rounded-full bg-white/30 blur-xl"
        />
        <span
          className="relative text-6xl drop-shadow-sm transition duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          {menuIllustrations[name] ?? '🍽️'}
        </span>
        <span
          className={`absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold shadow-sm ${
            isAvailable
              ? 'bg-white text-emerald-700'
              : 'bg-white text-rose-700'
          }`}
          aria-label={`Status menu: ${isAvailable ? 'Tersedia' : 'Habis'}`}
        >
          <span
            className={`size-1.5 rounded-full ${
              isAvailable ? 'bg-emerald-500' : 'bg-rose-500'
            }`}
            aria-hidden="true"
          />
          {isAvailable ? 'Tersedia' : 'Habis'}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span className="mb-2 w-fit rounded-md bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
          {category}
        </span>
        <h3 className="text-base font-bold leading-snug text-slate-900">
          {name}
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="size-3.5 shrink-0"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
            />
            <circle cx="12" cy="10" r="2.25" />
          </svg>
          <span className="truncate">{tenantName}</span>
        </p>

        <div className="mt-auto flex items-end justify-between gap-2 border-t border-slate-100 pt-4">
          <div>
            <p className="text-[10px] font-medium text-slate-400">Harga</p>
            <span className="text-base font-extrabold text-slate-900">
              {priceFormatter.format(price)}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onAddToCart(menuItem)}
            disabled={!isAvailable}
            className="rounded-lg bg-brand-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
          >
            {isAvailable ? 'Tambah +' : 'Stok habis'}
          </button>
        </div>
      </div>
    </article>
  );
}
