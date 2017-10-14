import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const styles = {
  notFound: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  h1: {
    fontSize: '5em'
  },
  h3: {
    marginBottom: '1em'
  },
  btn: {
    height: '2.5em'
  }
}

export const NoMatch = ({ location }) => (
  <div style={styles.notFound}>
    <h1 style={styles.h1}>404</h1>
    <h3 style={styles.h3}>Uh oh, there is nothing here..</h3>
    <Link to="/">
      <Button type="primary" style={styles.btn}>Back to Home</Button>
    </Link>
  </div>
);
