import { publicRoutes } from "./Routes/Routes";
import { privateRoutes } from "./Routes/Routes";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const auth=useSelector((state)=>state.authentication.isAuth)
  return (
    <BrowserRouter>
    <Routes>
      {
        publicRoutes.map((item)=>{
          return(
            <>
          <Route path={item.path} element={item.element}/>
          </>
          )
        })
      }
      {
        privateRoutes.map((item)=>{
          return(
            <>
            {
              auth &&
          <Route path={item.path} element={item.element}/>
            }
          </>
          )
        })
      }
    </Routes>
    </BrowserRouter>
  );
}

export default App;
