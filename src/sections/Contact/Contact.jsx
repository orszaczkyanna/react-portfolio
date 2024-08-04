import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className={"sectionTitle"}>Contact</h1>
      <form action="https://formspree.io/f/xyxyxyxyxyxy123456789" method="post">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="Name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="Email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="Message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input type="submit" value="Submit" className="hover btn" />
      </form>
    </section>
  );
}

export default Contact;
