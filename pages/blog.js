import Layout from '@/components/layout'
import Post from '@/components/post'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/grid.module.css'
const Blog = ({posts}) => {

  
  return (
    <Layout
    title={'Blog'}
    description='Blog de música, venta de guitarras, consejos, GuitarLA'
    >
        <main className="conenedor">
          <h1 className="heading">Blog</h1>

          <div className={styles.grid}>
            {posts?.map(post => (
              <Post post={post.attributes} key={post.id}/>
            ))}
          </div>
        </main>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?populate=imagen`
  );
  const {data: posts} = await respuesta.json();

 return {
  props: {
    posts
  }
 }
};

export default Blog