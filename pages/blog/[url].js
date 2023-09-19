import Layout from "@/components/layout";
import Image from "next/image";
import React from "react";
import styles from "../../styles/blog.module.css";
import { formatearFecha } from "@/utils/helpers";


const Post = ({ post }) => {
  const { Titulo, contenido, imagen, publishedAt } = post[0].attributes;

  return (
    <Layout
    title={Titulo}
    >
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image
          src={imagen.data.attributes.url}
          alt={`imagen blog ${Titulo}`}
          width={1000}
          height={400}
        />

        <div className={styles.contenido}>
          <h3>{Titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          <p className={styles.texto}>{contenido}</p>
        </div>
      </article>
    </Layout>
  );
};

export const getServerSideProps = async ({ query: { url } }) => {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  );
  const { data: post } = await respuesta.json();

  return {
    props: {
      post,
    },
  };
};

export default Post;
