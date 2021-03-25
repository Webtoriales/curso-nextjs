import Head from 'next/head';
import Title from '../components/title';

export default function Home() {
  return (
    <>
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
    </>
  )
}