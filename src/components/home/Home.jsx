import React from 'react';
import HeroSlider from './HeroSlider';
import Servies from './services/Services';
import WorkBar from './WorkBar';
import RecentWork from './recentwork/RecentWork';
const Home = () =>{
    return(
        <>
        <HeroSlider />
        <Servies />
        <WorkBar />
        <RecentWork />
        </>
    );
}

export default Home;

