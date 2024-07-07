import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Hello() {
  return (
    <Layout title="J Simon van der Walt" description="Composer, Performer, Teacher">
      <div
        style={{
          display: 'flex', /* probably redundant */
          justifyContent: 'center',
          alignItems: 'center',
          /* height: '60vh', */
          /* fontSize: '20px', */
        }}>
        <img src="/img/jsimonvanderwalt.PNG" alt="Simon"></img>
        <div
          style={{
            color: 'white',
            position: 'absolute',
            left: 25,
            top: 50,
          }}>
          <p style={{ fontSize: '5.1vw'}}>J Simon van der Walt</p>
          <p style={{ fontSize: '3.4vw', lineHeight: 0.05 }}>composer | performer | teacher</p>
        </div>

      </div>
      <div>
        <HomepageFeatures />
      </div>
    </Layout>
  );
}

