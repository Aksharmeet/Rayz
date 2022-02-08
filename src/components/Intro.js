import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import styled from 'styled-components';
function Intro({path}) {
  const location = path;
  const pathname =JSON.stringify(location).slice(2, location.length).toLowerCase();
  return <div>
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
      render={data => <Section>
        {(data.allContentfulHome.edges.map(({node}) => (node.title.replace(/\s/g, "").toLowerCase() ==  pathname ) ? (
        <InnerSection>
          <img src={node.image.file.url} alt={node.title}/>
          <h1>{node.title}</h1>
          <p>{node.description.description}</p>
        </InnerSection>)
        :
         "" ))}
       </Section>
     } 

    ></StaticQuery>
      </div>
}

const Section  = styled.section`

  
`
const InnerSection = styled.article`
`
export default Intro;
