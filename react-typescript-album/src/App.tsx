import { RouteList } from "./routes/Routes"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <RouteList />
    </BrowserRouter> 
  )
}

export default App