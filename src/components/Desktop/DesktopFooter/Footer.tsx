import { Container, Footer_links, Footer_box, Footer_Container } from "./styles"

const DesktopFooter=()=>{
    return(
        <Container>
            <Footer_Container>
                <Footer_box>
                    <Footer_links href="#">Contact Us</Footer_links>
                </Footer_box>
                <Footer_box>
                    <Footer_links href="#">Terms of Use</Footer_links>
                </Footer_box>
                <Footer_box>
                    <Footer_links href="#">Privacy Policy</Footer_links>
                </Footer_box>
            </Footer_Container>


            
        </Container>

    )
}
export default DesktopFooter;