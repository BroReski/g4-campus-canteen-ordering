import { describe, expect, it } from 'vitest';
import {
  addToCart,
  removeFromCart,
  totalItems,
  totalPrice,
  updateQuantity,
} from './cart.js';

const nasiGoreng = {
  id: 'MENU-001',
  name: 'Nasi Goreng',
  price: 18000,
  category: 'Makanan',
};

const esTeh = {
  id: 'MENU-002',
  name: 'Es Teh Manis',
  price: 5000,
  category: 'Minuman',
};

describe('addToCart', () => {
  it('menambahkan item baru ke keranjang kosong', () => {
    const cart = addToCart([], nasiGoreng);

    expect(cart).toHaveLength(1);
    expect(cart[0]).toMatchObject({
      id: 'MENU-001',
      name: 'Nasi Goreng',
      price: 18000,
      quantity: 1,
    });
  });

  it('menambah kuantitas bila item yang sama sudah ada', () => {
    const cart = addToCart(addToCart([], nasiGoreng), nasiGoreng);

    expect(cart).toHaveLength(1);
    expect(cart[0].quantity).toBe(2);
  });

  it('tidak mengubah keranjang asli (immutable)', () => {
    const original = [];

    addToCart(original, nasiGoreng);

    expect(original).toHaveLength(0);
  });
});

describe('updateQuantity', () => {
  it('mengubah kuantitas item yang ada', () => {
    const cart = addToCart([], nasiGoreng);

    const updated = updateQuantity(cart, 'MENU-001', 3);

    expect(updated[0].quantity).toBe(3);
  });

  it('mengabaikan kuantitas nol atau negatif', () => {
    const cart = addToCart([], nasiGoreng);

    expect(updateQuantity(cart, 'MENU-001', 0)).toEqual(cart);
    expect(updateQuantity(cart, 'MENU-001', -2)).toEqual(cart);
  });

  it('mengabaikan id yang tidak ada di keranjang', () => {
    const cart = addToCart([], nasiGoreng);

    expect(updateQuantity(cart, 'MENU-999', 5)).toEqual(cart);
  });
});

describe('removeFromCart', () => {
  it('menghapus item dari keranjang', () => {
    const cart = addToCart(addToCart([], nasiGoreng), esTeh);

    const updated = removeFromCart(cart, 'MENU-001');

    expect(updated).toHaveLength(1);
    expect(updated[0].id).toBe('MENU-002');
  });

  it('mengembalikan keranjang apa adanya bila id tidak ditemukan', () => {
    const cart = addToCart([], nasiGoreng);

    expect(removeFromCart(cart, 'MENU-999')).toEqual(cart);
  });
});

describe('totalItems', () => {
  it('mengembalikan jumlah kuantitas seluruh item', () => {
    const cart = addToCart(addToCart(addToCart([], nasiGoreng), esTeh), nasiGoreng);

    expect(totalItems(cart)).toBe(3);
  });

  it('mengembalikan nol untuk keranjang kosong', () => {
    expect(totalItems([])).toBe(0);
  });
});

describe('totalPrice', () => {
  it('menghitung jumlah harga dikali kuantitas', () => {
    const cart = addToCart(addToCart([], nasiGoreng), nasiGoreng);

    expect(totalPrice(cart)).toBe(36000);
  });

  it('menghitung total dari beberapa item berbeda', () => {
    const cart = addToCart(addToCart([], nasiGoreng), esTeh);

    expect(totalPrice(cart)).toBe(23000);
  });

  it('mengembalikan nol untuk keranjang kosong', () => {
    expect(totalPrice([])).toBe(0);
  });
});
