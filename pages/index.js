import Head from "next/head";
import Articles from "../Components/Articles";
import Navbar from "../components/Navbar";
import { fetchAPI } from "../lib/api";

export default function Home({ posts, categories }) {
  return (
    <>
      <Head>
        <title>SPHIMX</title>
      </Head>
      <Navbar categories={categories} />
      <Articles posts={posts} />
    </>
  );
}

export async function getServerSideProps() {
  const posts = await fetchAPI("/articles");
  const categories = await fetchAPI("/categories");
  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: { posts, categories },
  };
}
