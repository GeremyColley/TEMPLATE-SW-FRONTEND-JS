import React from "react";



const Home = ({data, isLoading}) => {

    
    return isLoading ? ( 
        <div>
            <p>Loading...</p>
        </div>
        ) : (
        <div>
            <h1>CROWDFUNDING CAMPAIGNS</h1>
            <p>Les offres</p>
            {data}


        </div>
    );

}

export default Home;