import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decCartQunat,
  incCartQuant,
  removeFromCart,
} from "../../lib/action/action";

const Shop = () => {
  let cart = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  console.log(cart);

  return (
    <section className="shop">
      <div className=" container">
        {cart.length === 0 ? (
          <h1 style={{ marginTop: "10%", textAlign: "center" }}>404</h1>
        ) : (
          <div className="content">
            {cart?.map((el) => (
              <div key={el.id} className="cards">
                <div className="card">
                  <img
                    src={el.images[0]}
                    alt={el.title}
                    className="cart-item-image"
                  />
                </div>

                <div className="card cont">
                  <h1>{el.title}</h1>
                  <p>{(el.price * 12730 * el.quantity).brm()} UZS</p>
                  <div className="counter">
                    <button
                      className="dec"
                      onClick={() => dispatch(decCartQunat(el))}
                      disabled={el.quantity === 1}
                    >
                      -
                    </button>
                    <span>{el.quantity}</span>
                    <button
                      className="inc"
                      disabled={el.quantity === 10}
                      onClick={() => dispatch(incCartQuant(el))}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(el))}
                    className="delete"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
