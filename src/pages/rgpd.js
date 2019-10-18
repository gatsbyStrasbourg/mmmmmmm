import React from "react";
import Layout from "../components/Layout/layout";
import {graphql, useStaticQuery} from "gatsby";

const RGPD = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
            siteMetadata {
                title
                email
            }
        }
      }
    `);

    return (
        <Layout>
            <div className="container">
                <h1 className={"topTitle"}>Politique de confidentialité</h1>

                <h3 className={"topTitle subtitle"}>Traitement des données personnelles</h3>
                <p>Une donnée personnelle est une donnée qui permet, seule ou par association, d’identifier une personne (nom, adresse email, adresse IP, …).</p>
                <p><b>{data.site.siteMetadata.title}</b> s’engage à ce que le traitement des données personnelles collectées sur sarrebourg.fr soit conforme au RGPD (Règlement Général sur la Protection des Données).</p>
                <p>Lors de la collecte de données personnelles sur ce site, une information vous est fournie sur la finalité de leur traitement et leur destinataire. Vous devez donner votre consentement à ce traitement pour pouvoir nous envoyer vos données.</p>
                <p>Les données vous concernant collectées dans le cadre des téléprocédures et des formulaires sont confidentielles et ne sont en aucun cas communiquées à des tiers.</p>

                <h3 className={"topTitle subtitle"}>Exercez vos droits</h3>
                <p>Pour exercer un ou plusieurs de vos droits Informatique et Libertés dont certains sont listés ci-dessous, vous pouvez nous contacter :</p>
                <p><a href="mailto:">{data.site.siteMetadata.email}</a></p>
                <p>Dans tous les cas, une réponse vous sera adressée dans les meilleurs délais (1 mois maximum à compter de la réception de votre demande).</p>
                <p>Par souci de confidentialité et de protection des données, merci de joindre une copie d’une pièce d’identité (carte d’identité, passeport, permis de conduire) à vos demandes d’accès, de rectification ou de suppression.</p>

                <h3 className={"topTitle subtitle"}>Droit d'accès</h3>
                <p>Vous pouvez accéder à vos données.</p>
                <p>Pour vous aider :
                    <a href="https://www.cnil.fr/fr/modele/courrier/exercer-son-droit-dacces" target="_blank" rel="noopener noreferrer">
                         Modèle de demande d’accès aux données personnelles de la CNIL
                    </a>
                </p>

                <h3 className={"topTitle subtitle"}>Droit de rectification des données</h3>
                <p>Vous avez le droit de rectifier, compléter et/ou mettre à jour vos données personnelles.</p>
                <p>Pour vous aider :
                    <a href="https://www.cnil.fr/fr/modele/courrier/rectifier-des-donnees-incompletes" target="_blank" rel="noopener noreferrer">
                        Modèle de demande de rectification de données personnelles de la CNIL
                    </a>
                </p>

                <h3 className={"topTitle subtitle"}>Droit d'opposition</h3>
                <p>Vous pouvez vous opposer à la conservation de vos données personnelles ou à leur traitement sous condition de motif légitime.</p>
                <p>Pour vous aider :
                    <a href="https://www.cnil.fr/fr/modele/courrier/supprimer-des-informations-vous-concernant-dun-site-internet" target="_blank" rel="noopener noreferrer">
                        Modèle de demande d’opposition à la conservation de données personnelles de la CNIL
                    </a>
                </p>
            </div>
        </Layout>
    )
}

export default RGPD