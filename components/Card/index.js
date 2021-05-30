import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import React from "react";
import styles from "../../styles/Card.module.css";
import { getStrapiURL } from "../../lib/api";

function Card({ post }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        {post.image != null ? (
          <div className={styles.cardImage}>
            <img
              src={`${getStrapiURL(post.image.formats.small.url)}`}
              alt={post.image.alternativeText}
            />
          </div>
        ) : (
          ""
        )}
        {post.content != null ? (
          <ReactMarkdown className={styles.cardContent} source={post.content} />
        ) : (
          ""
        )}
        <p className={styles.cardPublication}>
          <Moment format="DD MMM YYYY" locale="fr">
            {post.published_at}
          </Moment>
        </p>
      </div>
    </div>
  );
}

export default Card;
