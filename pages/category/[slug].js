import Head from "next/head";
import React from "react";
import Articles from "../../components/Articles";
import Navbar from "../../components/Navbar";
import { fetchAPI, fetchOne } from "../../lib/api";
import styles from "../../styles/Card.module.css";

function Category({ categories, category }) {
  if (category.articles.length == 0) {
    return (
      <>
        <Head>
          <title>{category.name}</title>
        </Head>
        <Navbar categories={categories} />
        <div className="container">
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <p>Aucun article n'est assigné à cette categorie.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>{category.name}</title>
      </Head>
      <Navbar categories={categories} />
      <Articles posts={category.articles} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const category = await fetchOne(`/categories?slug=${params.slug}`);
  const categories = await fetchAPI("/categories");
  return {
    props: { category, categories },
  };
}

export default Category;
