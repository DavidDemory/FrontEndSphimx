import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import { FaShoppingCart } from "react-icons/fa";
import { fetchAPI } from "../lib/api";
import styles from "../styles/Card.module.css";
import stylesB from "../styles/Boutique.module.css";

function Boutique({ categories, products }) {
  if (products.length == 0) {
    return (
      <>
        <Head>
          <title>Boutique</title>
        </Head>
        <Navbar categories={categories} />
        <div className="container">
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <p>Aucun produit n'est disponible.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Boutique</title>
      </Head>
      <Navbar categories={categories} />
      <div className={stylesB.containerBoutique}>
        <div className={stylesB.cartInfo}>
          <span className="snipcart-items-count">0</span>
          <span>|</span>
          <span className="snipcart-total-price">0,00 €</span>
          <button className={`snipcart-checkout ${stylesB.cartButton}`}>
            <FaShoppingCart />
          </button>
        </div>
        <div className={`${stylesB.productContainer}`}>
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const categories = await fetchAPI("/categories");
  const products = await fetchAPI("/products");
  return {
    props: { categories, products },
  };
}

export default Boutique;
