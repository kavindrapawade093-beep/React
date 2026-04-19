import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Edit({ users, setUsers }) {
    const { id } = useParams();
    const navigate = useNavigate();

    // find user by id
    const user = users.find((u) => u.id === Number(id));

    // pre-fill form
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        address: user.address,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedUsers = users.map((u) =>
            u.id === Number(id) ? { ...u, ...formData } : u
        );

        setUsers(updatedUsers);   // ✅ REAL UPDATE
        navigate("/");            // back to Home
    };

    return (
        <div className="container mt-4">
            <h2>Edit User {id}</h2>

            <form onSubmit={handleUpdate}>
                <input
                    className="form-control mb-2"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                />

                <input
                    className="form-control mb-2"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />

                <input
                    className="form-control mb-2"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile"
                />

                <input
                    className="form-control mb-2"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                />

                <button className="btn btn-success">Update</button>
            </form>
        </div>
    );
}

export default Edit;
