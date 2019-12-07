import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { Link } from "gatsby"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Tips from "../components/Home/Tips"
import { graphql } from 'gatsby'

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

export default ({ data }) => (
    <Layout>
        <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
            <Banner
                title="Awesome Hampi"
                info="Come and Explore Hampi, the city of ruins, which is a UNESCO World Heritage Site."
            >
                <Link to="/places" className="btn-white">explore places</Link>
            </Banner>
        </StyledHero>
        <About />
        <Tips />
    </Layout>
)
