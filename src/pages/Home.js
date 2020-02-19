import React from 'react';
import Items from '../components/items/Items';
import Footer from '../components/common/Footer';
import CustomTitle from "../components/common/CustomTitle";

export default function Home() {
    return (
        <div>
            <CustomTitle>Featured Deals</CustomTitle>
            <Items />
            <Footer />
        </div>
    )
}
