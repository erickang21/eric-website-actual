import React from 'react';
import Header from "../components/Header";

import "../css/pages/Home.css";
import Body from "../components/Body";

const Home = (): React.ReactElement => {
    return (
        <div className="home">
            <Header />
            <Body/>
        </div>
    )
}

export default Home;
