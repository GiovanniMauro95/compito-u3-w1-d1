import ImgComponent from "./components/ImgComponent.jsx"
import ButtonComponent from "./components/ButtonComponent.jsx"
import "./App.css"

function App() {
  return (
    <div className="App">
      <ButtonComponent label="Pippo Baudo" />
      <ImgComponent src="https:/placecats.com/200/200" />
    </div>
  )
}

export default App
