import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  const lohinInfo = [
    { id: 1, name: "sumit", age: 22, address: "pune" },
    { id: 2, name: "Amit", age: 24, address: "pune" },
    { id: 3, name: "Meet", age: 26, address: "Mumbai" }

  ]
  return (
    <div className="table-container table-responsive">
      <table className="table table-striped table-hover text-center table-bordered border-black  p-4 ">
        <thead>
          <tr className="table-warning">
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {
            lohinInfo.map((user) => (
              <tr key={user.id} className="table-info">
                <td >{user.id}</td>
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

export default App;
