import React from "react";
import Layout from "../components/Layout/layout";
import CardArticles from "../components/Cards/card";
import DropdownFilter from "../components/DropdownFilter/DropdownFilter";


const Shop = () => {
    return (
        <Layout>
            <DropdownFilter />
            
            <CardArticles/>
        </Layout>
    )
}

export default Shop;



