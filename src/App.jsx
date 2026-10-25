import { useMemo, useState } from 'react';
import MenuCard from './components/MenuCard.jsx';
import Navbar from './components/Navbar.jsx';
import { menuCategories, mockMenu, mockTenants } from './data/mockMenu.js';
import {
  addToCart,
  removeFromCart,
  totalItems,
  totalPrice,
  updateQuantity,
} from './utils/cart.js';

const priceFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
});

export default function App() {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [activeTenant, setActiveTenant] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const visibleMenu = useMemo(
    () =>
      mockMenu.filter((item) => {
        const matchesCategory =
          activeCategory === 'Semua' || item.category === activeCategory;
        const matchesTenant =
          activeTenant === 'Semua' || item.tenantId === activeTenant;
        const normalizedQuery = searchQuery.trim().toLocaleLowerCase('id-ID');
        const matchesSearch =
          normalizedQuery.length === 0 ||
          `${item.name} ${item.tenantName} ${item.category}`
            .toLocaleLowerCase('id-ID')
            .includes(normalizedQuery);
        return matchesCategory && matchesTenant && matchesSearch;
      }),
    [activeCategory, activeTenant, searchQuery],
  );

  function handleAddToCart(menuItem) {
    setCart((current) => addToCart(current, menuItem));
  }

  function handleQuantityChange(itemId, quantity) {
    setCart((current) =>
      quantity < 1
        ? removeFromCart(current, itemId)
        : updateQuantity(current, itemId, quantity),
    );
  }

  function handleRemove(itemId) {
    setCart((current) => removeFromCart(current, itemId));
  }

  return (
    <div className="min-h-screen">
      <Navbar cartCount={totalItems(cart)} />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 py-8 text-white shadow-lg shadow-orange-200/60 sm:px-10 sm:py-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-20 size-72 rounded-full border-[36px] border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-40 size-56 rounded-full bg-white/10 blur-2xl"
          />
          <div className="relative max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-100">
              Kantin kampus · pesan tanpa antre
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Lapar? Cari menu
              <br className="hidden sm:block" /> favoritmu.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-orange-50 sm:text-base">
              Pilih makanan dari tenant kampus, cek ketersediaannya, lalu
              pesan langsung dari sini.
            </p>

            <label className="mt-6 flex max-w-xl items-center gap-3 rounded-2xl bg-white px-4 py-3 text-slate-400 shadow-md focus-within:ring-4 focus-within:ring-white/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="size-5 shrink-0"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="m20 20-4-4" />
              </svg>
              <span className="sr-only">Cari menu atau nama kantin</span>
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Cari menu atau nama kantin..."
                className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />
            </label>
          </div>
        </section>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_19rem]">
          <section aria-labelledby="menu-heading">
            <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
                  Pilihan hari ini
                </p>
                <h2
                  id="menu-heading"
                  className="mt-1 text-2xl font-bold tracking-tight text-slate-900"
                >
                  Daftar menu
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  {visibleMenu.length} menu dari {mockTenants.length} kantin
                </p>
              </div>

              <label className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="whitespace-nowrap">Pilih kantin</span>
                <select
                  value={activeTenant}
                  onChange={(event) => setActiveTenant(event.target.value)}
                  className="max-w-48 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="Semua">Semua kantin</option>
                  {mockTenants.map((tenant) => (
                    <option key={tenant.id} value={tenant.id}>
                      {tenant.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div
              className="mb-6 flex gap-2 overflow-x-auto pb-1"
              aria-label="Filter kategori menu"
            >
              {menuCategories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isActive}
                    className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {visibleMenu.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
                <span className="text-4xl" aria-hidden="true">
                  🔎
                </span>
                <p className="mt-3 font-semibold text-slate-800">
                  Menu tidak ditemukan
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Coba kata kunci atau filter yang berbeda.
                </p>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {visibleMenu.map((menuItem) => (
                  <MenuCard
                    key={menuItem.id}
                    menuItem={menuItem}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            )}
          </section>

          <aside
            id="cart"
            className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                  Pesananmu
                </p>
                <h2 className="mt-1 text-lg font-bold text-slate-900">
                  Keranjang
                </h2>
              </div>
              <span className="flex size-9 items-center justify-center rounded-xl bg-orange-50 text-brand-600">
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
              </span>
            </div>

            {cart.length === 0 ? (
              <div className="rounded-xl bg-slate-50 px-4 py-7 text-center">
                <span className="text-3xl" aria-hidden="true">
                  🛍️
                </span>
                <p className="mt-2 text-sm font-semibold text-slate-700">
                  Belum ada pesanan
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Tambahkan menu favoritmu untuk mulai memesan.
                </p>
              </div>
            ) : (
              <ul className="mb-4 max-h-80 space-y-3 overflow-y-auto">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3 last:border-0"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {priceFormatter.format(item.price)} x {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        aria-label={`Kurangi jumlah ${item.name}`}
                        className="size-6 rounded border border-slate-300 text-sm leading-none text-slate-600 hover:bg-slate-100"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        aria-label={`Tambah jumlah ${item.name}`}
                        className="size-6 rounded border border-slate-300 text-sm leading-none text-slate-600 hover:bg-slate-100"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRemove(item.id)}
                        aria-label={`Hapus ${item.name} dari keranjang`}
                        className="ml-1 text-xs text-red-600 hover:underline"
                      >
                        Hapus
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex items-center justify-between border-t border-slate-200 pt-4">
              <span className="text-sm font-medium text-slate-600">Total</span>
              <span className="text-lg font-bold text-slate-900">
                {priceFormatter.format(totalPrice(cart))}
              </span>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
