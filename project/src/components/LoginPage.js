import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function LoginPage() {
    return (

        <>
            <div className="container w-50 p-4 border bg-white">
                <form action="/action_page.php"  >


                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname" defaultvalue="John" /><br />


                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname" defaultValue="Doe" /><br /> <br />


                    <input type="submit" value="Submit" />

                </form>

            </div >
        </>

    );
}
export default LoginPage;

