
import { Signature_Container, Signature_images, Spicy_box, Spicy_image, Spicy_text, Title, Vegan_box, Vegan_image, Vegan_text, Vegitarian_box, Vegitarian_image, Vegitarian_text } from "./styles"

export const SignatureFilter=()=>{
    return(
        <Signature_Container>
            <Title>Signature Dish Of:</Title>
            <Signature_images>
                <Spicy_box>
                    <Spicy_image/>
                    <Spicy_text>Spicy</Spicy_text>
                </Spicy_box>
                <Vegitarian_box>
                    <Vegitarian_image/>
                    <Vegitarian_text>Vegitarian</Vegitarian_text>
                </Vegitarian_box>
                <Vegan_box>
                    <Vegan_image/>
                    <Vegan_text>Vegan</Vegan_text>
                </Vegan_box>
            </Signature_images>
            
        </Signature_Container>


    )
}
