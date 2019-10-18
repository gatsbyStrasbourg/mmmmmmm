import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import { Button } from 'reactstrap';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
library.add(faCartPlus);

export default ({ data }) => {
    const articles = data.markdownRemark
    return (
        <Layout>
            <div>
                <div className={"row topProduct"}>
                    <div className={"col-md-8"}>
                        <img src={articles.frontmatter.image} alt={"article"} />
                    </div>

                    <div className={"col-md-4"}>
                        <h3>{articles.frontmatter.title}</h3>
                        <p className={"text-muted"}>
                            {articles.frontmatter.price}
                            {articles.frontmatter.currency}
                        </p>
                        <Button color="secondary" className="snipcart-add-item buyBtn"
                            data-item-id={articles.frontmatter.id}
                            data-item-price={articles.frontmatter.price}
                            data-item-name={articles.frontmatter.title}
                            data-item-description={articles.frontmatter.description}
                            data-item-url={"https://gatsbytestjamstack.netlify.com" + articles.fields.slug}
                        >
                            <FontAwesomeIcon icon="cart-plus" />
                            Add to cart
                        </Button>
                    </div>
                </div>

                <hr/>

                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <h3>About this product</h3>
                        <p><div dangerouslySetInnerHTML={{ __html: articles.html }} /></p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        id
        price
        currency
        description
        slug
        image
      }
      fields {
        slug
      }
    }
  }
`