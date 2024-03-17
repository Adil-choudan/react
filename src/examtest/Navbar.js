import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Ajouter from "./Ajouter";
import Delete from "./Delete";

export default function NavBar(){
    return(
        <div>

            <BrowserRouter>

            <Link to='/'>Home</Link><br/>
            <Link to={'/ajouter'}>Ajouter</Link><br/>
            <Link to={'/delete'}>Delete</Link><br/>


            <Routes>

                <Route  path="/" element={<Home />}/> 
                <Route  path="/ajouter" element={<Ajouter />}/> 
                <Route  path="/delete" element={<Delete />}/> 

            </Routes>


            </BrowserRouter>

        </div>
    )
}