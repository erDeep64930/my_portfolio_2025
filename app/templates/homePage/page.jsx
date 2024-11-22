import Layout from '@/app/components/layout/Layout';
import React from 'react';
import MyIntro from './myIntro/MyIntro';
import MySkills from './mySkill/MySkills';
import MyServices from './myServices/MyServices';
import ContactMe from './contactMe/ContactMe';
import ShowCase from './showCase/ShowCase';


const HomePage = () => {
  return (
    
      <Layout>
        <MyIntro />
        <MySkills />
        <MyServices />
        <ContactMe />
        <ShowCase />


      </Layout>

  );
}

export default HomePage;
