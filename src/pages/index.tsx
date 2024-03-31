import {Routes, Route } from "react-router-dom"
import { Home } from "./home";
import { Post } from "./post";

export const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/:id' element={<Post/>}></Route>
        </Routes>
)
}