import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'
import NavbarSection from '../Components/Navbar'

function Root() {
    return (
        <>
            <NavbarSection />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root