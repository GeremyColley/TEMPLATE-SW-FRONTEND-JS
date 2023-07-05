import React from "react";
import '../assets/css/Home.css'

const Home = ({data, isLoading}) => {

    return isLoading ? ( 
            <div>
                <p>Loading...</p>
            </div>
        ) : (
            <div className="home-container">

                <div className="home-titre">
                    <h1>CROWDFUNDING CAMPAIGNS</h1>
                    <p>Nos offres</p>
                </div>

                <div className="line-container">
                    {data}
                </div>
                
            </div>
    );

}

export default Home;