import "bootstrap/dist/css/bootstrap.min.css";

function TablePage() {
    const loginInfo = [
        { id: 1, name: "Sumit", age: 22, address: "Pune" },
        { id: 2, name: "Amit", age: 24, address: "Pune" },
        { id: 3, name: "Meet", age: 26, address: "Mumbai" },
    ];

    return (
        <div className="container mt-5">
            <table className="table table-striped table-hover text-center table-bordered">
                <thead className="table-warning">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>

                <tbody>
                    {loginInfo.map((user) => (
                        <tr key={user.id} className="table-info">
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TablePage;
