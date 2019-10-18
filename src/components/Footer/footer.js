import React from "react"
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import footerStyles from "./footer.module.css";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-dark">
            <footer className={footerStyles.footerSt}>
                <div className="container">
                    <div className={"row text-center"}>
                        <div className={"col-md-4"}>
                            <Link to={"/contact/"}>
                                <Button outline color="primary">Nous contacter</Button>
                            </Link>
                        </div>

                        <div className={"col-md-4"}>
                            <div>
                                <Link to={"/legal/"}>Mentions légales</Link>
                            </div>
                            <div>
                                <Link to={"/rgpd/"}>Données personelles</Link>
                            </div>
                        </div>

                        <div className={"col-md-4"}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook color="#007bff" size="40px" style={{ margin: '0 5px' }} />
                            </a>

                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter color="#007bff" size="40px" style={{ margin: '0 5px' }} />
                            </a>

                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram color="#007bff" size="40px" style={{ margin: '0 5px' }}  />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer