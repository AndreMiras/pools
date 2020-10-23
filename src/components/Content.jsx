import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import Container from './Container';
import Nav from './Nav';

const Content = () => {
  const [address, setAddress] = useState(null);
  const history = useHistory();
  /*
   * Forces the components to be re-rendered even though the route didn't change.
   * https://stackoverflow.com/q/47602091/185510
   */
  const forceReload = () => {
    history.push('/temp');
    history.goBack();
  };
  const onAddress = (newAddress) => {
    (address === newAddress) && forceReload();
    setAddress(newAddress);
  };
  const redirect = address ? <Redirect to={`/portfolio/${address}`} /> : null;
  return (
    <div id="content">
      {redirect}
      <Nav onAddress={onAddress} />
      <Container />
    </div>
  );
};

export default Content;
