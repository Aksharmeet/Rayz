import * as React from "react"
import Footer from "../components/footer";
import Navbar from '../components/navbar';
import styled from "styled-components";
import '../components/layout.css'
import Slider from "../components/Slider"


// markup
const IndexPage = () => {

  return (
    <div>
      <Navbar/>
      <Main>
       
            <Slider/>
   
      </Main>
      <Footer/>
    </div>
  )
}
const Main = styled.section`
  background-image: url('./assets/main_bg.svg');
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center;
  overflow-x:hidden;
  padding:100px 20px 0 20px;
  
`




export default IndexPage
