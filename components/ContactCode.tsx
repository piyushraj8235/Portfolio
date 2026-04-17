import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'piyushrajgupta8235@gmail.com',
    href: 'mailto:piyushrajgupta8235@gmail.com',
  },
  {
    social: 'github',
    link: 'piyushraj8235',
    href: 'https://github.com/piyushraj8235',
  },
  {
    social: 'linkedin',
    link: 'piyush-raj',
    href: 'https://www.linkedin.com/in/piyush-raj-a20515287/',
  },

  // Optional — add when resume is ready
  {
    social: 'resume',
    link: 'Download Resume',
    href: '/resume.pdf',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>

      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}

      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;