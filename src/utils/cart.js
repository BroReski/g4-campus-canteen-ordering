export function addToCart(cart, menuItem) {
  const existing = cart.find((item) => item.id === menuItem.id);

  if (existing) {
    return cart.map((item) =>
      item.id === menuItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    );
  }

  return [...cart, { ...menuItem, quantity: 1 }];
}

export function updateQuantity(cart, itemId, quantity) {
  if (!Number.isFinite(quantity) || quantity <= 0) return cart;

  return cart.map((item) =>
    item.id === itemId ? { ...item, quantity } : item,
  );
}

export function removeFromCart(cart, itemId) {
  return cart.filter((item) => item.id !== itemId);
}

export function totalItems(cart) {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

export function totalPrice(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
