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

  const visibleMenu = useMemo(
    () =>
      mockMenu.filter((item) => {
        const matchesCategory =
          activeCategory === 'Semua' || item.category === activeCategory;
        const matchesTenant =
          activeTenant === 'Semua' || item.tenantId === activeTenant;
        return matchesCategory && matchesTenant;
      }),
    [activeCategory, activeTenant],
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

      <main className="mx-auto max-w-6xl px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Menu Kantin</h2>
          <p className="mt-1 text-sm text-slate-500">
            Pilih kantin dan temukan menu yang Anda mau, lalu tambahkan ke
            keranjang.
          </p>
        </section>

        <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
          <div>
            <div className="mb-6 flex flex-wrap gap-3">
              <label className="flex flex-col gap-1 text-xs font-medium text-slate-500">
                Kategori
                <select
                  value={activeCategory}
                  onChange={(event) => setActiveCategory(event.target.value)}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700"
                >
                  {menuCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-1 text-xs font-medium text-slate-500">
                Kantin
                <select
                  value={activeTenant}
                  onChange={(event) => setActiveTenant(event.target.value)}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700"
                >
                  <option value="Semua">Semua Kantin</option>
                  {mockTenants.map((tenant) => (
                    <option key={tenant.id} value={tenant.id}>
                      {tenant.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {visibleMenu.length === 0 ? (
              <p className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
                Tidak ada menu yang cocok dengan filter ini.
              </p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {visibleMenu.map((menuItem) => (
                  <MenuCard
                    key={menuItem.id}
                    menuItem={menuItem}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            )}
          </div>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <h2 className="mb-4 text-lg font-bold text-slate-900">Keranjang</h2>

            {cart.length === 0 ? (
              <p className="text-sm text-slate-500">Keranjang masih kosong.</p>
            ) : (
              <ul className="mb-4 space-y-3">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-slate-900">
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
