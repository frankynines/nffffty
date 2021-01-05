import Link from "next/link";
import Head from 'next/head'
import styled from 'styled-components';
import Home from './home';

const Main = styled.div`
  background-color: white;
  padding: 20px;
`;

export default function Index() {
  return (
    <div>

    <Head>
        <title>Frankynines.crypto</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>

      <Main>
        <Home />
      </Main>
    </div>
  );
}