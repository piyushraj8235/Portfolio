import { Metadata } from 'next';
import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import {
  VscRepo,
  VscPerson,
  VscStarEmpty,
  VscRepoForked,
  VscLinkExternal,
  VscGithub,
} from 'react-icons/vsc';

import RepoCard from '@/components/RepoCard';
import { Repo, User } from '@/types';

import styles from '@/styles/GithubPage.module.css';

export const metadata: Metadata = {
  title: 'GitHub | Piyush Raj',
};

export const revalidate = 600;

async function getGithubData() {
  const username =
    process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'piyushraj8235';

  try {
    const userRes = await fetch(
      `https://api.github.com/users/${username}`
    );

    if (!userRes.ok) {
      console.error('GitHub user fetch failed:', userRes.status);

      return {
        user: {
          login: username,
          avatar_url: '/logos/vscode_icon.svg',
          public_repos: 0,
          followers: 0,
        } as User,
        repos: [] as Repo[],
      };
    }

    const user: User = await userRes.json();

    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`
    );

    const repos: Repo[] = repoRes.ok
      ? await repoRes.json()
      : [];

    return { user, repos };
  } catch (error) {
    console.error('GitHub fetch error:', error);

    return {
      user: {
        login: username,
        avatar_url: '/logos/vscode_icon.svg',
        public_repos: 0,
        followers: 0,
      } as User,
      repos: [] as Repo[],
    };
  }
}

export default async function GithubPage() {
  const { user, repos } = await getGithubData();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.profile}>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={80}
              height={80}
              priority
            />
            <div className={styles.profileInfo}>
              <h1 className={styles.name}>{user.login}</h1>
              <span className={styles.handle}>
                @{user.login}
              </span>
            </div>
          </div>

          <a
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.profileLink}
          >
            <VscGithub size={18} />
            <span>View Profile</span>
            <VscLinkExternal size={14} />
          </a>
        </header>

        {/* Stats */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscRepo size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>
                {user.public_repos}
              </span>
              <span className={styles.statLabel}>
                Repositories
              </span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscPerson size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>
                {user.followers}
              </span>
              <span className={styles.statLabel}>
                Followers
              </span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscStarEmpty size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>
                {repos.reduce(
                  (acc, repo) =>
                    acc + repo.stargazers_count,
                  0
                )}
              </span>
              <span className={styles.statLabel}>
                Total Stars
              </span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscRepoForked size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>
                {repos.reduce(
                  (acc, repo) => acc + repo.forks,
                  0
                )}
              </span>
              <span className={styles.statLabel}>
                Total Forks
              </span>
            </div>
          </div>
        </div>

        {/* Contribution Graph */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Contribution Activity
          </h2>

          <div className={styles.contributions}>
            <GitHubCalendar
              username={user.login}
              hideColorLegend
              hideMonthLabels
              colorScheme="dark"
              style={{ width: '100%' }}
            />
          </div>
        </section>

        {/* Repositories */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Popular Repositories
            </h2>

            <a
              href={`https://github.com/${user.login}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewAll}
            >
              View All
              <VscLinkExternal size={14} />
            </a>
          </div>

          <div className={styles.reposGrid}>
            {repos.map((repo) => (
              <RepoCard
                key={repo.id}
                repo={repo}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}