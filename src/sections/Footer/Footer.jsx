import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <h1 className="sectionTitle">Footer</h1>
      <p>
        &copy; {new Date().getFullYear()} Harris Johnsen.
        <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
