import React, { useState } from "react";
import Table from "../components/Table";

function Home({ users }) {
    return (
        <>




            <div className="container mt-4">
                <Table users={users} />
            </div>





        </>
    );
}


export default Home;
