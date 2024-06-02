import React from 'react';
import PropTypes from 'prop-types'
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired
  }
    return (
    <div>
      {children}
      <WhatsAppButton 
      link={"tel:6789733935"}
      />
    </div>
  );
};

export default Layout;
