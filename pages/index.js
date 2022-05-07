import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}
