
import Header from './Components/Header'
import './App.css'
import vetements from "./Datas/productsData.js"
import Product_List from './Components/Products_List'

function App() {
 

  return (
    <div className="App">
     <Header/>
     <Product_List vetements={vetements} />
    </div>
  )
}


export default App
