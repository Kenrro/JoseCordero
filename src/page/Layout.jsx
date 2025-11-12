import { Outlet } from "react-router"
import { Header } from "../layout/Header"
import { Footer } from "../layout/Footer"

export const Layout = () => {

    return(
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}