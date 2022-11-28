import React from 'react';
import useTitle from '../../hooks/useTitle/useTitle';
import AboutUs from './AboutUs/AboutUs';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <Categories></Categories>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;