import React, { useState } from "react";

function SearchApp() {

    const users = ["Rahul", "Kavindra", "Kalpesh", "Vansh", "Daksha", "Shrusti", "Purvi", "Jiyansh", "Sanvi"];

    const [search, setSearch] = useState("");

    const filteredUsers = users.filter((user) => user.toLowerCase().includes
        (search.toLowerCase()));

    return (

        <div style={{ textAlign: "center" }}>
            <h1> Search Filter</h1>

            <input type="text" placeholder="Search"
                onChange={(e) => setSearch(e.target.value)} />

            <ul>
                {filteredUsers.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>

        </div>
    );
}

export default SearchApp;