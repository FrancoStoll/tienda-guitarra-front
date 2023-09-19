import Image from "next/image";
import styles from "../../styles/guitarras.module.css";
import Layout from "@/components/layout";
import { useState } from "react";
import Swal from "sweetalert2";
const Producto = ({ guitarra, agregarCarrito }) => {
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;

  const [cantidad, setCantidad] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      Swal.fire(
        "Cantidad no válida",
        "Seleccione una cantidad correcta",
        "warning"
      );
      return;
    }

    // Construir un objeto
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };

    // Pasando la informácion al context
    agregarCarrito(guitarraSeleccionada);
  };

  return (
    <Layout title={`Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          src={imagen.data.attributes.url}
          alt={`Imagen guitarra ${nombre}`}
          width={600}
          height={400}
        />

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label htmlFor="cantidad">Cantidad:</label>

            <select
              onChange={(e) => setCantidad(parseInt(e.target.value))}
              id="cantidad"
            >
              <option value="0">--Seleccionar Cantidad--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

// export const getServerSideProps = async ({ query: { url } }) => {
//   const respuesta = await fetch(
//     `${process.env.API_URL}/guitarras/?filters[url]=${url}&populate=imagen`
//   );
//   const { data: guitarra } = await respuesta.json();

//   return {
//     props: {
//       guitarra,
//     },
//   };
// };
export const getStaticPaths = async () => {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const { data } = await respuesta.json();

  const paths = data.map((guitarra) => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps = async ({ params: { url } }) => {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras/?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();

  return {
    props: {
      guitarra,
    },
  };
};

export default Producto;
