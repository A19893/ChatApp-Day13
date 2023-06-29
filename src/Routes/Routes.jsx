import Signup from '../Components/Signup'
import Home from '../Components/Home'
import Login from '../Components/Login'
export const publicRoutes=[
{
    path:"/",
    element:<Signup/>
},
{
   path:"/login",
   element:<Login/>
},
{
    path:"/*",
    element:<Login/>
}
]
export const privateRoutes=[
    {
        path:"/home",
        element:<Home/>
    }
]