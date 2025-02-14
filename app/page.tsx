import "@fortawesome/fontawesome-free/css/all.min.css";
import { Layout } from "@/src/components/layout/layout";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Vendas APP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout titulo="Página Inicial">
        <h1>Bem-vindo ao Vendas APP!</h1>
      </Layout>
    </div>
       
  );
}
export default Home;
