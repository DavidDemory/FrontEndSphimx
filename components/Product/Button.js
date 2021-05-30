import React from "react";
import { getStrapiURL } from "../../lib/api";
import styles from "../../styles/Product.module.css";

function Button({ product }) {
  return (
    <button
      className={`snipcart-add-item ${styles.productBtn}`}
      data-item-id={product.slug}
      data-item-price={product.price}
      data-item-url={`${getStrapiURL("/products/")}${product.id}`}
      data-item-image={`${getStrapiURL(product.image[0].formats.small.url)}`}
      data-item-name={product.name}
      data-item-custom1-name={product.sizes && "Taille"}
      data-item-custom1-options={product.sizes}
      data-item-custom2-name={product.option}
    >
      Ajouter au panier - {product.price}€
    </button>
  );
}

export default Button;
