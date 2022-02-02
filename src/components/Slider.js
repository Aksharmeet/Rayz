import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import arrow from "../assets/arrow.svg";
import circle from "../assets/Circle.svg"
function Slider() {
  const [count,setCount] = useState(0);
  let value;
  const matchCount = () =>{
    if(count === 0){
      value = "0";
    } 
    else if(count === 1){
      value = "100";
    }
    else if(count === 2){
      value = "200";
    }
    }
    matchCount()
  console.log(`translate(-${value}vw)`);
  const increment =() =>{
    setCount(count + 1);
  }
  const decrement =() =>{
    setCount(count - 1);
  }
  
return (
  <StaticQuery
    query={graphql`
      {
        allContentfulHome {
          edges {
            node {
              description {
                description
              }
              title
              image {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => 
      <Section>
        <InnerSection value={value}>
          {data.allContentfulHome.edges.map(({node}) =>
            <Container className={`${node.title.toLowerCase()}_container`} key={node.title}>
              <div className={`${node.title.toLowerCase()}_text`}>
              <h1>{node.title}</h1>
              <p>{node.description.description}</p>
              </div>
              <img className={`${node.title.toLowerCase()}_img`} src={node.image.file.url}></img>
            </Container>
          )}
        </InnerSection>
        <ArrowExplore>
          <Explore>
            <img src={circle} alt="explore button"/>
          </Explore>
          <Arrows>
            <img alt="left arrow" className="l_arrow"src={arrow} onClick={increment}/>
            <img alt="right arrow"  className="r_arrow"src={arrow} onClick={decrement}/>
          </Arrows>
        </ArrowExplore>
     </Section>
  }
  ></StaticQuery>
)
}
const Section = styled.section`

`
const InnerSection = styled.div`
  text-align:center;
  position:relative;
  width:300vw;
  transform:translate(-100vw)
  // transform:${({value}) => value & `translate(-${value}vw)`};
  overflow:hidden;
  display:flex;
  h1{
    font-family:copper_light;
    font-size:5vmin;
  }
  p{
    font-family:lucida;
    font-size:16px;
    text-align:center;
    line-height:24px;
    color:#d5a03dcb;
    margin:4vh auto 6vh auto;
    width:80%;
    max-width:500px;
  }
  .chandelier_container{
    margin-bottom:-150px;
    
  }
  @media (min-width:900px){
    text-align:left;
   
    h1{
      font-size:4.5vmin;
    }
    p{
      font-size:2vmin;
      text-align:left;
      line-height:3vmin;
      margin:4vh auto 6vh auto;
      width:100%;
      
    }
    .chandelier_container{
      margin-bottom:-190px;
      
    }
    @media (min-width:1400px){
      h1{
        font-size:6vmin;
      }
      p{
        font-size:2.5vmin;
       
        line-height:4vmin;
        margin:4vh auto 6vh auto;
        width:100%;
        
      }
      .chandelier_container{
        margin-bottom:-190px;
        
      }
    }
  }
`
const Container = styled.div`
 width:100%;

  img{
  width:80%;
  }
  .chandelier_img{
      position:relative;
      top:-80px;
  }
  @media (min-width:900px){
  
     display:flex;
     align-items:center;
    
     img{
       width:60%;
       display:block;
       flex-grow:1;
     }
     .chandelier_img{
       position:relative;
        top:-120px;
    }
    div{
      padding-left:50px;
    }
    .chandelier_text{
      position:relative;
      top:-120px;

    }
  }
  
`
const ArrowExplore = styled.div`


`
const Explore = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  margin-bottom:100px;
  img{
    width:20vw;
    opacity:.6;
    transition:opacity .3s;
    max-width:150px;
  }
  img:hover{
    opacity:.8;
  }
  @media(min-width:700px){
    position:relative;
    top:-60px;
  }
  @media(min-width:900px){
    display:block;
    margin-left:60px;
    position:relative;
    top:-100px;
    margin-bottom:50px;
  }
  @media(min-width:1100px){
    top:-175px;
  }
`
const Arrows = styled.div`
  display:flex;
  flex-direction:column;
  gap:5vw;
  margin-bottom:32px;
  position:absolute;
  top:25vw;
  right:20px;
  @media(max-width:900px){
    top:400px;
   
  }
  .l_arrow{
    transform:rotate(180deg);
  }
  .l_arrow, .r_arrow{
    width:3vw;
    opacity:.4;
    transition:opacity .3s;
  }
  .l_arrow:hover, .r_arrow:hover{
    opacity:.7;
  }
  @media(min-width:900px){
    width:5vw;
    .l_arrow, .r_arrow{
      width:2vw;
    }
  }
 
`


export default Slider