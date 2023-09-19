import Layout from "@/components/layout";
import Link from "next/link";

const Pagina404 = () => {
  return (
    <Layout
    title="Página no encontrada"
    >
      <p className="error">Página no encontrada</p>

      <Link
      href='/'
      className="error-enlace"
      >Ir al inicio</Link>
    </Layout>
  );
};

export default Pagina404;
