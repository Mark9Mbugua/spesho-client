import React from 'react';
import HomePageItems from '../components/items/home-page-items.component';
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
