import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import { useRouter } from "next/router";

export default function DynamicProduct() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Next Test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>Product Number {router.query.productId}</p>
      </main>
    </>
  );
}
