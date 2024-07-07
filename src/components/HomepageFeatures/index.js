import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'About',
    description: (
      <>
        I am a composer, multi-instrumentalist, and teacher, living and working in Scotland. My music draws on many approaches, including score-based composition, installation, sound art, performance, devising and improvising. At one time a jazz trumpet player, I've also been known to perform on the trombone, didgeridu, guitar, gamelan, laptop, and an assortment of home-made instruments. I teach at the Royal Conservatoire of Scotland in Glasgow, where I am Head of Taught Postgraduate Programmes in Music.
      </>
    ),
  },
  {
    title: 'On this site',
    description: (
      <>
      <ul>
          <li><Link to="/catalog/">Catalog</Link> – scores, recordings, video, programme notes </li>
          <li><Link to="/blog/">Blog</Link> – news, ideas, work in progress</li>
          <li>About more about my work as a composer, performer and teacher</li>
      </ul>
      <h3>Elsewhere</h3>
        <ul>
          <li>Link</li>
          <li> <a href="https://post.lurk.org/@tedthetrumpet">Mastodon – post.lurk.org/@tedthetrumpet</a>   </li>
          <li>Link</li>
        </ul>
      </>
    ),
  }
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--6')}> {/* no idea why, but col--6 instead of col--4 */}
      <div className="text--left padding-horiz--md"> {/* aligns text */}
        <Heading as="h3">{title}</Heading>
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

