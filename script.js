const items = {
    vintage: {
      price: 54.99,
      quantity: 0,
      quantityElement: document.getElementById('quantity-vintage'),
      totalElement: document.getElementById('total-price-vintage'),
    },
    levi: {
      price: 44.99,
      quantity: 0,
      quantityElement: document.getElementById('quantity-levi'),
      totalElement: document.getElementById('total-price-levi'),
    },
  };
  
  function changeQuantity(amount, item) {
    const currentItem = items[item];
    currentItem.quantity += amount;
    if (currentItem.quantity < 0) {
      currentItem.quantity = 0;
    }
    currentItem.quantityElement.textContent = currentItem.quantity;
  
    // Calcula el precio total y actualiza el elemento HTML correspondiente
    const totalPrice = currentItem.quantity * currentItem.price;
    currentItem.totalElement.textContent = `$${totalPrice.toFixed(2)}`;
  
    // Actualiza el total general
    updateTotalPrice();
  }
  
  // Calcula el precio total para ambos productos y actualiza el elemento HTML correspondiente
  function updateTotalPrice() {
    let totalPrice = 0;
    
    // Recalcula los totales de cada artículo y suma al total general
    for (const key in items) {
      const currentItem = items[key];
      const totalItemPrice = currentItem.quantity * currentItem.price;
      totalPrice += totalItemPrice;
    }
  
    // Actualiza los totales de cada artículo
    items.vintage.totalElement.textContent = `$${(items.vintage.quantity * items.vintage.price).toFixed(2)}`;
    items.levi.totalElement.textContent = `$${(items.levi.quantity * items.levi.price).toFixed(2)}`;
  
    // Actualiza el total general
    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
  }
  