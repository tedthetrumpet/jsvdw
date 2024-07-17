import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Hello() {
  return (
    <Layout title="J Simon van der Walt" description="Composer, Performer, Teacher">
      <div
        style={{
          position: 'relative',
          margin: 'auto',
          display: 'flex', /* probably redundant */
          justifyContent: 'center',
          alignItems: 'center',
          /* height: '60vh', */
          /* fontSize: '20px', */
          width: '90%'
        }}>
        <img src="/img/jsimonvanderwalt.png" alt="Simon"></img>
        <div
          style={{
/*             margin: 'auto',
            width: '90%', */
            color: 'white',
            position: 'absolute',
            left: '2vw',
            top: 0,
          }}>
          <h1 style={{ fontSize: '4.3vw'}}>J Simon van der Walt</h1>
          <h2 style={{ fontSize: '2.9vw', lineHeight: 0.05 }}>composer | performer | teacher</h2>
        </div>

      </div>
      <div>
        <HomepageFeatures />
      </div>
    </Layout>
  );
}

