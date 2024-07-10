
// import React from "react";
import { Route, Routes } from 'react-router-dom';
import Pages from "../Pages/export";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Pages.Home />} />
                <Route path='/books' element={<Pages.Books />} />
                <Route path='/courses' element={<Pages.Courses />} />
                <Route path='/donate' element={<Pages.Donate />} />
                <Route path='/register' element={<Pages.Register />} />
                <Route path='/finalregister' element={<Pages.Register />} />
            </Routes>
        </>
    );
}
export default Router;
