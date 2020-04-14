import React, { ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// utils
import { getCurrencyFormat } from "../../lib/utils";

interface CartItemProps {
  item: CartItem;
  editable: boolean;
  onChange: HandleChange;
  updateParams: UpdateParams;
  openClass: string;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  editable,
  onChange,
  updateParams,
  openClass
}) => {
  return (
    <>
      <li className={`cart-item list-group-item d-flex px-3 pb-2 ${openClass}`}>
        <div className="mr-3">
          <img
            className="thumbnail"
            src={item.product.imageUrl}
            alt={item.product.name}
          />
        </div>
        <div className="flex-grow-1 d-flex flex-column h5">
          <div>{item.product.name}</div>
          <div className="d-flex align-items-center justify-content-between mt-2">
            <div>
              <div className="d-flex align-items-center justify-content-start">
                {editable && (
                  <div
                    className="update p-2"
                    onClick={e =>
                      onChange(e, {
                        ...updateParams,
                        item,
                        quantity: item.quantity - 1
                      })
                    }
                  >
                    <FontAwesomeIcon icon="minus-circle" />
                  </div>
                )}
                <div className="font-weight-bold">
                  <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      e.target.value &&
                      onChange(e, {
                        ...updateParams,
                        item,
                        quantity: parseInt(e.target.value)
                      })
                    }
                    inputMode="numeric"
                    pattern="[0-9]*"
                    type="text"
                    name="quantity"
                    value={item.quantity}
                    disabled={!editable}
                  />
                </div>
                {editable && (
                  <div
                    className="update p-2"
                    onClick={e =>
                      onChange(e, {
                        ...updateParams,
                        item,
                        quantity: item.quantity + 1
                      })
                    }
                  >
                    <FontAwesomeIcon icon="plus-circle" />
                  </div>
                )}
              </div>
            </div>
            <div className="w-25 text-right">
              {getCurrencyFormat(item.product.price * item.quantity)}
            </div>
            {editable && (
              <div
                className="update w-25 text-right p-2"
                onClick={e =>
                  onChange(e, { ...updateParams, item, quantity: 0 })
                }
              >
                <FontAwesomeIcon icon={["far", "trash-alt"]} />
              </div>
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;