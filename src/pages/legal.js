import React from "react";
import Layout from "../components/Layout/layout";
import {graphql, useStaticQuery} from "gatsby";

const LegalMention = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
            siteMetadata {
                title
            }
        }
      }
    `);

    return (
        <Layout>
            <div className="container">
                <h1 className={"topTitle"}>Politique de confidentialité</h1>

                <h3 className={"topTitle subtitle"}>Prestataire d'hébergement</h3>
                <p><b>Netlify</b></p>

                <h3 className={"topTitle subtitle"}>Propriété intellectuelle et droits de reproduction</h3>
                <p>Conformément au code de la propriété intellectuelle, toute reproduction partielle ou totale des contenus
                    de ce site à usage collectif est strictement interdite sans l’autorisation de <b>{data.site.siteMetadata.title}</b> (article L.122-4).
                </p>
                <p> Toute utilisation des contenus à des fins commerciales ou publicitaires est exclue.</p>
            </div>
        </Layout>
    )
}

export default LegalMention