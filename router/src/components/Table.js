import React from "react";
import { Link } from "react-router-dom";

function Table({ users }) {
    return (
        <table className="table table-bordered mt-3">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td>{user.address}</td>
                        <td>
                            <Link to={`/edit/${user.id}`}>Edit</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
