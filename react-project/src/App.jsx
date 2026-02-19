import { useEffect, useState , useReducer, use} from "react";
import "./App.css";
//import chef from "./next-react-project/public/hotels/01.jpeg";

function Header({ name }) {
  //props is an object that contains all the properties passed to the component

  return (
    <header>
      <h1> Welcome {name}to React Essential Training</h1>
    </header>
  );
}
const items =[
  "Macaroni and Cheese",
  "Salmon with Lemon Butter",
  "Chicken Alfredo",
  "Beef Stir Fry"
]
 const dishObjects = items.map((dish ,i) => ({
  id: i,
  title : dish
 }));

console.log(dishObjects);

function Main({dishes}) {
  return (
    <>
    <main>
      <div>
       <h2>Welcome to this amazing restaurant</h2>
      </div>
      
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id} style={{ listStyle: "none" }}>
            {dish.title}
          </li>
        ))}
      </ul>
    </main>
    </>

  );
}
function App() {
  //const [status , setStatus]=useState("true");
  const [status, toggle] = useReducer(
  (status) => ! status,
  true
  );

  useEffect(() => {
    console.log(`Restaurant status changed: ${status ? "Open" : "Closed"}`);
  })
  return (
    <div>
      <h1>Restaurant Status: {status ? "Open" : "Closed"}</h1>
      <button onClick={toggle}>{status ? "Close" : "Open"} Restaurant</button>
     
      <Header name="Alex " />
      <Main dishes={dishObjects}
      openStatus={status}
      onStatus={toggle} />
    </div>
  );
}

export default App;
