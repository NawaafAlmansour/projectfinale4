
import React from 'react';

// reactstrap components
import styled from 'styled-components';
import { Jumbotron } from './Jumbotron';

// core components

import  Infopro from './InfoPro/Infopro';
import  Cardexpat from './CardExpat/Cardexpat';
import  Infoican from './Infoican/Infoican';
import  Connect from './Connect/Connect';
//


function Portfolio() {
  // const [activeTab, setActiveTab] = React.useState('1');

  // const toggle = tab => {
  //   if (activeTab !== tab) {
  //     setActiveTab(tab);
  //   }
  // };

  const Home = styled.div`
  .ICan{
    margin: 20px;
    padding: 20px;
    margin-top: 100px;
}
    `;
  return (
    <Home>
      <Jumbotron/>
      <Infopro
        list1="software engineer"
        title="job journey"
      />
      <Infopro title="learning journey" list1="computer science"/>
      <div className="ICan">
        <h1>What I Can Do for You</h1>
        <Cardexpat/>
        <Cardexpat/>
      </div>
      <div className="ICan">
        <h1>What I Can Do for You</h1>
        <Infoican/>
      </div>
      <div className="ICan">
        <h1>keep in touch</h1>
        <Connect/>
      </div>

    </Home>
  )

}

export default Portfolio;
