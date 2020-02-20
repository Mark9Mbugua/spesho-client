import React from 'react';
import HomePageItems from '../components/items/HomePageItems';
import Footer from '../components/common/Footer';
import CustomTitle from "../components/common/CustomTitle";

export default function Home() {
    return (
        <div>
            <CustomTitle>Featured Deals</CustomTitle>
            <HomePageItems />
            <Footer />
        </div>
    )
}
