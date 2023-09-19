import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";
import React from "react";

const Nosotros = () => {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, GuitarLA, Tienda de música"}
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            alt="Imagen Nosotros"
            width={1000}
            height={800}
          />

          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem labore eligendi temporibus non maiores dicta harum
              hic ullam sint voluptatum sunt magnam consequuntur, error
              perspiciatis et perferendis commodi quos impedit modi aperiam? A
              veritatis debitis, asperiores, ipsa dolorem nobis excepturi quo
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              illum temporibus enim sunt repudiandae, corrupti veritatis nihil
              similique deleniti magnam consequuntur. Qui sint quasi iusto hic,
              esse blanditiis dolorem, magni dolores nulla vel voluptatibus
              expedita optio iure vitae asperiores, labore voluptate reiciendis.
              Consequatur, atque. Repellendus assumenda expedita quidem dolores
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
