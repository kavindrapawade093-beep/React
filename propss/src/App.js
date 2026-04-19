import logo from './logo.svg';
import './App.css';

import Home from './Home';

import Login from './Login';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", padding: "20px", border: "1px solid black" }}>
        <Home name="Marvel" content=" Hollywood Heroes" button="Click Me" img="https://pixalot.co.za/cdn/shop/products/Marvel-Heroes-Pixalot_Wall_Art.jpg?v=1699656696 " />
        <Home name="Bollywood " content="Bollywood Heroes" button="Click Me" img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/0c6a9fb1-f199-4980-aa8c-6a506929b625/deyrtln-f3ea9c45-8504-4601-a9df-41a4e352f3df.png " />
        <Home name="Best-2025" content="  Best Bollywood movies" button="Click Me" img="https://www.anokhilife.com/wp-content/uploads/AL-Blog-Featured-Image-10-3.png" />
        <Home name="Best-2025" content="  Best Hollywood movies" button="Click Me" img=" https://whatkeptmeup.com/wp-content/uploads/2025/05/IMG_8865-998x665.webp" />

      </div>

      <div style={{ display: "flex", border: "10px solid Orange", padding: "20px", backgroundColor: "Orange" }}>
        <Login />
      </div>

      <Test />
    </>
  );
}

export function Test() {
  return (
    <>
      <h5>this is Test</h5>
    </>
  );
}



export default App;