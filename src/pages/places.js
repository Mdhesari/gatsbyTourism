import React from 'react'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from 'gatsby'
import Places from '../components/Places/Places'

export const query = graphql`
query {
    defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}) {
        childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`;

export default function places({ data }) {
    return (
        <Layout>
            <StyledHero img={data.defaultBcg.childImageSharp.fluid}></StyledHero>
            <Places />
        </Layout>
    )
}
