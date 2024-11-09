import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Layout from "./Layout";

const App=()=>{
  return(
    <>
    <h1></h1>  
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="insert" element={<Insert/>}/>
        <Route path="display" element={<Display/>}/>



        </Route>
      </Routes>
      </BrowserRouter>
    
    </>
  )
}
export default App;
