import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/blog.module.css'
import { formatearFecha } from '@/utils/helpers'



const Post = ({post}) => {

    
    const {contenido, imagen, Titulo, url, publishedAt} = post

    
  return (
    <article>
        <Image src={imagen.data.attributes.formats.medium.url} alt={`imagen blog ${Titulo}`}  width={600} height={400}/>

        <div className={styles.contenido}>
            <h3>{Titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido}</p>
            <Link className={styles.enlace} href={`/blog/${url}`}>
                Leer Post
            </Link>
        </div>
    </article>
  )
}

export default Post