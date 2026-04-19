import React from 'react';

import LoginPage from '../components/LoginPage';


function Home(props) {
    return (
        <>
            <div className=" container card border-danger m-1 " style={{ width: "400px" }} >
                <img
                    className="card-img-top pt-2" src={props.img || "https://cdn.twocontinents.com/hfpqy_V7_B_IMG_Dubai_UAE_1200x800_e1936b3330.jpg"} alt="Card image" style={{ width: "100%" }} />
                <div className="card-body">
                    <h4 className="card-title">{props.name || "John Doe"} </h4>
                    <p className="card-text">{props.content || "Some example text some example text John Doe is an architect and engineer"} </p>
                    <a href="#" className="btn btn-danger ">{props.button || "See Profile"}</a>
                </div>
            </div>
            <LoginPage />
        </>
    );
}

export default Home;


