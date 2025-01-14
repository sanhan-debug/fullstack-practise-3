import AddForm from "../Pages/AddForm";
import Detail from "../Pages/Detail";
import Home from "../Pages/Home";
import Root from "../Pages/root";



const ROUTES = [
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/detail/:id",
                element:<Detail/>
            },
            {
                path:"/addform",
                element:<AddForm/>
            }
        ]
    }
]

export default ROUTES