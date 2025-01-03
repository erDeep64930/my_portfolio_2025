import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import LeftSocialLinks from '@/app/shared/LeftSocialLink';

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <LeftSocialLinks />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
