import React from "react";
import Layout from "../components/Layout/layout";
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, useStaticQuery } from "gatsby";
import "../../static/styles/global.css";

const ContactPage = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
            siteMetadata {
                email
                phoneNumber
            }
        }
      }
    `);

    return (
        <Layout>
            <h1 className={"topTitle"}>Nous contacter</h1>
            <Form action="https://formstatic.dev" method="post" className={"topPadForm"}>
                <input type="hidden" name="$processor" value="email" />
                <input type="hidden" name="$to" value="jules.bozouklian@epitech.eu" />
                <div className={"row"}>
                    <div className={"col-md-9"}>
                        <div className={"row"}>
                            <div className={"col-md-6"}>
                                <FormGroup>
                                    <Label for="name">Nom</Label>
                                    <Input type="input" name="name" id="name" placeholder="John" required />
                                </FormGroup>
                            </div>
                            <div className={"col-md-6"}>
                                <FormGroup>
                                    <Label for="firstname">Prénom</Label>
                                    <Input type="input" name="firstname" id="firstname" placeholder="Doe" required />
                                </FormGroup>
                            </div>
                        </div>

                        <div className={"row"}>
                            <div className={"col-md-12"}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="johndoe@epitech.eu" required />
                                </FormGroup>
                            </div>
                        </div>

                        <div className={"row"}>
                            <div className={"col-md-12"}>
                                <FormGroup>
                                    <Label for="subject">Sujet</Label>
                                    <Input type="input" name="subject" id="subject" placeholder="Sujet" required />
                                </FormGroup>
                            </div>
                        </div>

                        <div className={"row"}>
                            <div className={"col-md-12"}>
                                <FormGroup>
                                    <Label for="message">Message</Label>
                                    <Input type="textarea" name="message" id="message" placeholder="Message" required />
                                </FormGroup>
                            </div>
                        </div>
                    </div>

                    <div className={"col-md-3 text-center"}>
                        <ul className="list-unstyled mb-0">
                            <FontAwesomeIcon icon="envelope" size="2x"/>
                            <li className={"listContact"}>
                                <a href="mailto:">{data.site.siteMetadata.email}</a>
                            </li>

                            <FontAwesomeIcon icon="phone" size="2x"/>
                            <li className={"listContact"}>
                                <a href="tel:">{data.site.siteMetadata.phoneNumber}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <input type="hidden" name="$redirect_to" value="https://gatsbytestjamstack.netlify.com" />
                <Button color="secondary">Envoyer</Button>
            </Form>
        </Layout>
    )
}

export default ContactPage