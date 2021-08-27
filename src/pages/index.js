import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Translate, { translate } from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          <Translate>The Ultimate OM For All Databases</Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction">
              <Translate>Getting Started</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      description={
        translate({
          message: 'The ultimate OM for all databases',
          description: 'The site description head tag content',
        })
      }>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
