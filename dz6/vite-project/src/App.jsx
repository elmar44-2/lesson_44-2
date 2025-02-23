import React, { useState, useMemo, useCallback } from "react";

function ProductOrderForm() {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const handleProductNameChange = useCallback((e) => {
    setProductName(e.target.value);
  }, []);

  const handleQuantityChange = useCallback((e) => {
    setQuantity(Number(e.target.value));
  }, []);

  const handlePriceChange = useCallback((e) => {
    setPrice(Number(e.target.value));
  }, []);

  const handleDiscountChange = useCallback((e) => {
    setDiscount(Number(e.target.value));
  }, []);

  const isValidData = useMemo(() => {
    const isProductNameValid = /^[A-Za-z]+$/.test(productName);
    const isQuantityValid = quantity >= 0;
    const isPriceValid = price >= 0;
    const isDiscountValid = discount >= 0 && discount <= 100;

    return (
      isProductNameValid && isQuantityValid && isPriceValid && isDiscountValid
    );
  }, [productName, quantity, price, discount]);

  const totalCost = useMemo(() => {
    if (!isValidData) return 0;
    const totalPrice = quantity * price;
    const discountAmount = totalPrice * (discount / 100);
    return totalPrice - discountAmount;
  }, [quantity, price, discount, isValidData]);

  return (
    <div>
      <h2>Форма заказа товара</h2>
      <form>
        <div>
          <label>Наименование товара:</label>
          <input
            type="text"
            value={productName}
            onChange={handleProductNameChange}
            placeholder="Введите название товара"
          />
        </div>

        <div>
          <label>Количество:</label>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="0"
            placeholder="Введите количество"
          />
        </div>

        <div>
          <label>Цена за единицу товара:</label>
          <input
            type="number"
            value={price}
            onChange={handlePriceChange}
            min="0"
            placeholder="Введите цену"
          />
        </div>

        <div>
          <label>Процент скидки:</label>
          <input
            type="number"
            value={discount}
            onChange={handleDiscountChange}
            min="0"
            max="100"
            placeholder="Введите скидку"
          />
        </div>

        <div>
          <h3>
            Итоговая стоимость:{" "}
            {isValidData ? totalCost.toFixed(2) : "Неверные данные"}
          </h3>
        </div>
      </form>
    </div>
  );
}

export default ProductOrderForm;

