import Layout from '@/app/components/layout/Layout';
import React from 'react';
import MyIntro from './myIntro/MyIntro';
import MySkills from './mySkill/MySkills';
import MyServices from './myServices/MyServices';
import ContactMe from './contactMe/ContactMe';


const HomePage = () => {
  return (
    
      <Layout>
        <MyIntro />
        <MySkills />
        <MyServices />
        <ContactMe />


      </Layout>

  );
}

export default HomePage;
