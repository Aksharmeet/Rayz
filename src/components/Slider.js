import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Slider = () => (
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
        {data.allContentfulHome.edges.map(({node}) =>
          <Container className={`${node.title.toLowerCase()}_container`} key={node.title}>
            <div className={`${node.title.toLowerCase()}_text`}>
            <h1>{node.title}</h1>
            <p>{node.description.description}</p>
            </div>
            <img className={`${node.title.toLowerCase()}_img`} src={node.image.file.url}></img>
          </Container>
         )}
     
      </Section>
  }
  ></StaticQuery>
)

const Section = styled.section`
  width:100%;
  text-align:center;
  position:relative;
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


export default Slider