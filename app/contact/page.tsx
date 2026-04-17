import { Metadata } from 'next';

import ContactCode from '@/components/ContactCode';

import styles from '@/styles/ContactPage.module.css';

export const metadata: Metadata = {
  title: 'Contact | Piyush Raj',
};

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Contact Me</h1>

      <p className={styles.pageSubtitle}>
        Feel free to reach out via email or connect with me on social platforms.
        I'm always open to collaboration, internships, and new opportunities.
      </p>

      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;