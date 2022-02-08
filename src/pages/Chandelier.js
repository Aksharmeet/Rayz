import React from 'react';
import Footer from "../components/footer";
import Navbar from '../components/navbar';
import styled from 'styled-components';

import Intro from '../components/Intro';
function Chandelier({path} ) {

  
  return (
  <Body>
    <Navbar/>
    <Intro path={path}/>
    <Footer/>
  </Body>)
}
const Body = styled.body`
`


export default Chandelier;
