import { useState, useEffect } from "react";
import { emptyCart, MIN_QTY, MAX_QTY } from "../contexts/OrderContext";

import { APP_INFO } from "../../lib/utils";

export enum CartAction {
  ADD,
  UPDATE,
  DELETE,
  RESET,
  TOGGLE,
  HIDE_MODAL
}
export type CartDispatch = (
  action: CartAction,
  payload?:
    | {
        product: Product;
        quantity: number;
      }
    | undefined
) => void;

type UseCart = (products: Product[]) => [Cart, CartDispatch];

export const useCart: UseCart = (products: Product[]) => {
  const [cart, setCart] = useState<Cart>(emptyCart);

  useEffect(() => {
    if (cart.blink) {
      setTimeout(() => setCart({ ...cart, blink: false }), 500);
    }
    if (cart.items.size) {
      localStorage.setItem(`${APP_INFO.name}.cart`, JSON.stringify(cart));
      const items: number[][] = [];
      cart.items.forEach(
        (quantity, product) => !!product && items.push([product.id, quantity])
      );
      localStorage.setItem(`${APP_INFO.name}.items`, JSON.stringify(items));
    }
  }, [cart]);

  useEffect(() => {
    const initialCart: () => Cart = () => {
      let _cart: Cart = emptyCart;

      const cartString = localStorage.getItem(`${APP_INFO.name}.cart`);
      const itemsString = localStorage.getItem(`${APP_INFO.name}.items`);
      if (
        cartString &&
        cartString.length &&
        itemsString &&
        itemsString.length
      ) {
        const storedCart: Cart = { ..._cart, ...JSON.parse(cartString) };
        const itemsArray: [Product, number][] = JSON.parse(itemsString).map(
          (values: number[]) => {
            const [productId, quantity] = values;
            const product = products.find(p => p.id === productId);
            if (product) return [product, quantity];
            // eslint-disable-next-line array-callback-return
            else return;
          }
        );
        storedCart.items = new Map<Product, number>(
          itemsArray.filter(item => !!item)
        );
        if (storedCart.items.size) _cart = storedCart;
      }
      return _cart;
    };
    if (products && products.length) setCart(initialCart());
  }, [products]);

  const getTotals = (items: Map<Product, number>) => {
    let subTotal = 0;
    let articles = 0;
    for (let [product, quantity] of items.entries()) {
      const price = product.price * quantity;
      subTotal += price;
      articles += quantity;
    }
    return [subTotal, articles];
  };

  const resetCart = () => {
    setCart(emptyCart);
    localStorage.removeItem(`${APP_INFO.name}.cart`);
    localStorage.removeItem(`${APP_INFO.name}.items`);
  };

  const reducer = (
    action: CartAction,
    payload?: { product: Product; quantity: number }
  ) => {
    const newCart = { ...cart };
    const product = payload?.product;
    let quantity = payload?.quantity ? payload?.quantity : 0;
    const currentQuantity = product ? newCart.items.get(product) : 0;

    switch (action) {
      case CartAction.RESET:
        resetCart();
        break;
      case CartAction.TOGGLE:
        if (cart.articles) setCart({ ...cart, open: !cart.open });
        break;
      case CartAction.HIDE_MODAL:
        newCart.modal.show = false;
        setCart({ ...newCart });
        break;
      case CartAction.ADD:
        quantity = currentQuantity ? currentQuantity + quantity : quantity;
      /* falls through */
      default:
        [newCart.blink, newCart.open] =
          action === CartAction.ADD ? [true, false] : [!cart.open, cart.open];
        const newCartItems = new Map(cart.items);
        if (action === CartAction.DELETE) {
          newCart.modal.show = false;
          if (cart.modal.item?.product)
            newCartItems.delete(cart.modal.item.product);
        } else if (product) {
          if (quantity === 0) {
            newCart.modal.item = {
              product,
              quantity: currentQuantity ? currentQuantity : 0
            };
            newCart.modal.show = true;
          } else if (quantity >= MIN_QTY && quantity <= MAX_QTY) {
            newCartItems.set(product, quantity);
          }
        }
        if (!newCartItems.size) {
          resetCart();
        } else {
          [newCart.items, newCart.subTotal, newCart.articles] = [
            newCartItems,
            ...getTotals(newCartItems)
          ];
          setCart({ ...newCart });
        }
    }
  };

  return [cart, reducer];
};
