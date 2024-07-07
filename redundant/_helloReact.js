import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          /* display: 'flex', */
          justifyContent: 'center',
          alignItems: 'center',
          /* height: '50vh', */
          /* fontSize: '20px', */
        }}>
        {<img src="/img/jsimonvanderwaltrcs.PNG" alt="Simon"></img>}

        <div style={{
          color: 'red',
          justifyContent: 'left',
          alignItems: 'left',
        }}>
          <h1>Inner div</h1>
        </div>
      </div>
    </Layout>
  );
}