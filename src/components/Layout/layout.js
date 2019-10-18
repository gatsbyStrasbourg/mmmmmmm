import React from "react"
import Footer from "../Footer/footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactNavbar from '../ReactNavBar/reactnavbar'
import layoutStyles from "./layout.module.css"

const Layout = (props) => {
    return (
        <div className={layoutStyles.content}>
            <ReactNavbar />
            <div className={layoutStyles.flexContent}>
                <div className={"container"}>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout