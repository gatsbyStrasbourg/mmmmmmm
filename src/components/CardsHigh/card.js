import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg, Badge } from "reactstrap";
import {graphql, Link, useStaticQuery} from "gatsby";
import cardStyles from "../Cards/card.module.css"

const CardArticlesHigh = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: { fields: [frontmatter___price], order: DESC }) {
                totalCount
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            price
                            currency
                            image
                            category
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    return (
        <div className={"row"}>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id} className={"col-md-6"}>
                    <div className={cardStyles.cardMargin}>
                        <Link to={node.fields.slug} className={cardStyles.cardText}>
                            <Card>
                                <CardImg src={node.frontmatter.image} alt="article" />
                                <CardBody>
                                    <CardTitle>
                                        <h3>{node.frontmatter.title}</h3>
                                    </CardTitle>
                                    <CardText>
                                        <p className={"text-muted"}>{node.frontmatter.price} {node.frontmatter.currency}</p>
                                        <p><Badge color="secondary">{node.frontmatter.category}</Badge></p>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default CardArticlesHigh;