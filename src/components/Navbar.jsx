export default function Navbar({ cartCount }) {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="flex size-10 items-center justify-center rounded-xl bg-brand-600 text-lg font-extrabold text-white shadow-sm shadow-orange-200">
            K
          </span>
          <div>
            <h1 className="text-lg font-extrabold leading-tight tracking-tight text-slate-900">
              Kantinku
            </h1>
            <p className="text-[10px] font-medium text-slate-400">
              KANTIN KAMPUS
            </p>
          </div>
        </div>

        <a
          href="#cart"
          className="relative inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          aria-label={`Lihat keranjang belanja, ${cartCount} item`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="size-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 0 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 0 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>

          {cartCount > 0 && (
            <span className="flex min-w-5 items-center justify-center rounded-full bg-brand-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
              {cartCount}
            </span>
          )}
          <span>Keranjang</span>
        </a>
      </div>
    </header>
  );
}
