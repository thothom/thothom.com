import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate>
        The ThothOM syntax is heavily inspired by TypeORM, one of the most popular OMs in the TypeScript community. To migrate from TypeORM is easy, and most of the things and how to use are very familiar.
      </Translate>
    ),
  },
  {
    title: 'Fast To Learn',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate>
        ThothOM is designed to decrease the learning curve of databases to the ground, so one time that you learn to use ThothOM, you will be able to use any database with almost any changes.
      </Translate>
    ),
  },
  {
    title: 'Plugable',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate>
        You don't need to await us to add support to any database. The community can do it! You can do it! We provide full support to who wants to create a plugin, and we keep a complete documentation about how to create one.
      </Translate>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
