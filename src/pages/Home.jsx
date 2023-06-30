import React from "react";
import '../assets/css/Home.css'

const Home = ({data, isLoading}) => {

    return isLoading ? ( 
        <div>
            <p>Loading...</p>
        </div>
        ) : (
        <div className="home-container">
            <div>
                <h1>CROWDFUNDING CAMPAIGNS</h1>
                <p>Nos offres</p>
            </div>
            
            {data}


        </div>
    );

}

export default Home;