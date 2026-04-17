'use client';

import { VscGithub, VscMail } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Piyush Raj</h1>

              <p className={styles.role}>
                Full Stack Developer (MERN) | Student
              </p>

              <div className={styles.location}>
                <span className={styles.dot} />
                India
              </div>
            </div>
          </div>

          <div className={styles.headerActions}>
            <a
              href="https://github.com/piyushraj8235"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>

            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* About Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I'm a passionate full-stack developer and computer science student
                focused on building modern web applications. I enjoy working with
                React, Node.js, MongoDB, and Firebase to create real-world
                solutions and user-friendly interfaces.
              </p>

              <p className={styles.paragraph}>
                I have experience developing projects such as authentication
                systems, AI-powered applications, payment integrations, and
                responsive portfolio websites. I'm constantly learning new
                technologies and improving my development skills.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>
                    July 2025 – August 2025
                  </span>
                </div>

                <h3 className={styles.expRole}>
                  AI & Cloud Technologies Intern
                </h3>

                <p className={styles.expCompany}>
                  Edunet Foundation (IBM SkillsBuild) — Remote
                </p>

                <ul className={styles.expList}>
                  <li>
                    Completed a 4-week virtual internship focused on Artificial
                    Intelligence and Cloud Computing.
                  </li>

                  <li>
                    Developed a data analysis project to track maternal health
                    progress toward SDG 3.1.
                  </li>

                  <li>
                    Performed data cleaning, visualization, and statistical
                    analysis using Python and data analytics tools.
                  </li>

                  <li>
                    Worked with real-world healthcare datasets and generated
                    insights using data visualization techniques.
                  </li>

                  <li>
                    Presented final project findings and results to mentors as
                    part of internship evaluation.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Languages</h4>

                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>JavaScript</span>
                    <span className={styles.skillTag}>HTML</span>
                    <span className={styles.skillTag}>CSS</span>
                    <span className={styles.skillTag}>C++</span>
                    <span className={styles.skillTag}>Python</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Frontend</h4>

                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>React</span>
                    <span className={styles.skillTag}>Next.js</span>
                    <span className={styles.skillTag}>Tailwind CSS</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Backend</h4>

                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Node.js</span>
                    <span className={styles.skillTag}>Express</span>
                    <span className={styles.skillTag}>MongoDB</span>
                    <span className={styles.skillTag}>Firebase</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Tools</h4>

                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Git</span>
                    <span className={styles.skillTag}>VS Code</span>
                    <span className={styles.skillTag}>Postman</span>
                    <span className={styles.skillTag}>Render</span>
                    <span className={styles.skillTag}>Vercel</span>
                    <span className={styles.skillTag}>Jupyter Notebook</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Beyond Code Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Beyond Code</h2>
            </div>

            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Outside of programming, I enjoy exploring new technologies,
                learning about AI tools, improving my development skills,
                and working on personal projects.
              </p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
