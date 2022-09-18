import { Container } from "@chakra-ui/react"
import SimpleSidebar from "../components/sidenav/SideNav"

type DefaultLayoutProps = {

    children: JSX.Element

}


export default function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <>

                <SimpleSidebar>
                    {children}
                </SimpleSidebar>
 
        </>
    )
}