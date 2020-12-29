import Head from 'next/head';
import Title from '../components/title';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Aprendamos NextJS con Webtoriales</title>
        <meta name="description" content="En este curso de Webtoriales aprenderas sobre NextJS"/>
      </Head>
      <Title>Home Page</Title>
      <p>Aprendamos NextJS con Webtoriales!</p>
      <style>
        {`
          p {
            color: darkgray;
          }
          p:hover {
            color: darkred;
          }
        `}
      </style>
    </Layout>
  )
}