import React from 'react';
import Footer from "../components/footer";
import Navbar from '../components/navbar';
import Intro from '../components/Intro';
import styled from 'styled-components';

function Floorlamps({path}) {

  return (
  <Body>
    <Navbar/>
    <Intro path={path}/>
    <Footer/>
  </Body>
  )
}
const Body = styled.body`
`


export default Floorlamps;
