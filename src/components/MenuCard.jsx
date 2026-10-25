const priceFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
});

export default function MenuCard({ menuItem, onAddToCart }) {
  const { name, price, category, isAvailable, tenantName } = menuItem;

  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-slate-900">{name}</h3>
          <p className="text-sm text-slate-500">{category}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
            isAvailable
              ? 'bg-emerald-100 text-emerald-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {isAvailable ? 'Tersedia' : 'Habis'}
        </span>
      </div>

      <p className="mb-1 text-sm text-slate-500">{tenantName}</p>

      <div className="mt-auto flex items-center justify-between gap-3 pt-3">
        <span className="text-lg font-bold text-slate-900">
          {priceFormatter.format(price)}
        </span>

        <button
          type="button"
          onClick={() => onAddToCart(menuItem)}
          disabled={!isAvailable}
          className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        >
          Tambah ke Keranjang
        </button>
      </div>
    </article>
  );
}
