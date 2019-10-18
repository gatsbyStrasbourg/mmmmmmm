import React from "react";
import Layout from "../components/Layout/layout";
import Head from "../components/Head/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, useStaticQuery, Link } from "gatsby";

import logo from "../../static/favicon.ico"

export default ({ data }) => {
    const data1 = useStaticQuery(graphql`
      query {
        site {
            siteMetadata {
                title
                description
            }
        }
      }
    `);

    return (
        <Layout>
            <Head title="Acceuil"/>
            <div className={"text-center"}>
                <img className={"topTitle"} src={logo} alt="article" />
                <h1 className={"topTitle"}>{data1.site.siteMetadata.title}</h1>
                <p>{data1.site.siteMetadata.description}</p>
            </div>


            <h2>Debug</h2>
            <div className="snipcart-summary">
                <div>
                    <Link to={"/"} className="snipcart-user-email snipcart-user-profile">
                        Customer dashboard
                    </Link>
                </div>

                <div>
                    Total price: <span className="snipcart-total-price"></span>
                </div>
            </div>

        </Layout>
    )
}