import Image from "next/image";
import styles from "../src/styles/Home.module.scss";
import Text from "../src/components/layout/Text";
import Title from "../src/components/layout/Title";

export default async function Page() {
  return (
    <main className={styles.main}>
      <Title>NEW MERN PROJECT!</Title>
    </main>
  );
}
