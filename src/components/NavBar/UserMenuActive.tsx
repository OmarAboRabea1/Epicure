
import { User_active, Sign_in_box, User_text, User_text2, Sign_in_box1, Email_box, InputMail_text, Mail_input, Password_box,
      InputPass_text, Pass_input, Log_in_box, Log_in_button, Login_text, Or_line, Sign_up_box } from "./styles";
interface props{
    menu : boolean
}
export const UserMenuActive =(funcProops: props)=>{
    return(

        <User_active active = {funcProops.menu}>
        <Sign_in_box>
            <Sign_in_box1>
                <User_text>SIGN IN</User_text>
                <User_text2>To continue the order, please sign in</User_text2>
            </Sign_in_box1>
            <Email_box>
                <InputMail_text>Email address</InputMail_text>
                <Mail_input />
            </Email_box>
            <Password_box>
                <InputPass_text>Password</InputPass_text>
                <Pass_input type={"password"}/>
            </Password_box>
            <Log_in_box>
            <Log_in_button>LOGIN</Log_in_button>
            <a href="#">
                <Login_text>Forget password?</Login_text>
            </a>
            </Log_in_box>
            <Or_line/>
            <Sign_up_box>SIGN UP</Sign_up_box>
        </Sign_in_box>

    </User_active>
    )

}