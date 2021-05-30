import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { getStrapiURL } from "../../lib/api";
import Button from "./Button";
import styles from "../../styles/Product.module.css";

function Product({ product }) {
  const [numImg, setNumImg] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (`${numImg}` == product.image.length - 1) {
        setNumImg(0);
      } else {
        setNumImg((numImg) => numImg + 1);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [numImg]);

  return (
    <>
      <div className={`${styles.product}`}>
        <div className={`${styles.productBody}`}>
          <h1 className={`${styles.productName}`}>{product.name}</h1>
          {product.image != null ? (
            <div
              className={`${styles.productImage}`}
              style={{
                backgroundImage: `url(
                  ${getStrapiURL(product.image[numImg].formats.small.url)}
                )`,
              }}
            ></div>
          ) : (
            ""
          )}
          <ReactMarkdown
            source={product.description}
            className={`${styles.productDescription}`}
          />
          <Button product={product} />
        </div>
      </div>
    </>
  );
}

export default Product;
