import NavBar from "./components/navbar/NavBar"
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer"

function App() {


  return (
    <div>
      <NavBar/>
        <ItemListContainer welcome = "¡Bienvenidos a nuestro ecommerce!"/>
    </div>
  )
}

export default App