import Footer from "../src/components/Footer";
import Headbar from "../src/components/Headbar";
import styles from "../src/styles/Home.module.scss";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <Headbar />
      {children}
      <Footer />
    </main>
  );
}
