import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Helmet htmlAttributes={{ lang: 'fr' }}>
            <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
            <meta charSet="utf-8" />
            <meta name="description" content="Nested component" />
        </Helmet>
    )
}

export default Head