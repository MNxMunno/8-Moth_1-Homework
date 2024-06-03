import axios from "../../api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addToCart, toggleWishlist } from "../../lib/action/action";
import { useDispatch, useSelector } from "react-redux";

const SingleRoute = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  let wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((res) => console.log(res));
  }, [id]);

  if (!product) {
    return <h2 className="container">Loading...</h2>;
  }

  return (
    <section className="single">
      <div className="container">
        <div className="content">
          <div className="cardd">
            <img src={product?.images[0]} alt="img" />
          </div>
          <div className="cardd">
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <b>{(product?.price * 12730).brm()} UZS</b>
            <div className="btns">
              <button
                className="addCart"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
              <button onClick={() => dispatch(toggleWishlist(product))}>
                {wishlist?.some((item) => item.id === product.id) ? (
                  <FaHeart style={{ color: "red" }} />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleRoute;
