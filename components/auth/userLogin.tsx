"use client"

import Image from "next/image";
import king from "../../public/assets/stoolKing1.png";
import Logo from "@/components/utils/logo";
import Link from "next/link";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import AllocationText from "../utils/alocationCert";
import { useState } from "react"; 
import { PrimaryButtonContainer } from "../utils/primaryButton"; 

export default function UserLoginComponent() {
    const [shouldShowPassword, setShouldShowPassword] = useState(true);
    const [rememberMe, setRememberMe] =  useState(false)
    
    return (
        <main style={{ height: "100%", width: "68%",   justifyContent: "center", alignItems: "center", flexDirection: "row", display: "flex" }}>
            <div style={{ height: "100%", display: "flex", alignItems: "center"}}>
                <Image src={king} width={460} alt="King" style={{margin: "auto"}}/>
            </div>
            <div style={{ alignItems: "center", width: "56%", height: "97%", background: "#FFFFFF", }}>
                <Logo />
                 <form style={{ display: "flex", width: "80%", alignSelf: "center", justifyContent: "center", margin: "auto", height: "90%", flexDirection: "column", gap: 10}}>
          <div style={{display: "flex", justifyContent: "center"}}>
            <legend >
            <text style={{ fontFamily: "Inter", fontSize: 18, fontWeight: "600", textAlign: "center"}}>
              Log in
            </text>
            </legend>
          </div>
          <div style={{display: "flex", justifyContent: "center", width: "100%", gap: 15, flexDirection: "column"}}>
             <fieldset style={{display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: 5, width: "75%", margin: "auto"}}>
            <label htmlFor="userLoginEmail" style={{fontSize: 13, color: "#344054", fontWeight: "500"}}>Email</label>
            <input type="text" id="userLoginEmail" placeholder="Enter your email" style={{ borderWidth: 1, borderColor: "#D0D5DD", boxShadow: "2px 2px 0px #1018280D", borderRadius: 8, padding: 4, paddingLeft: 12, fontSize: 14, fontWeight: "400", color:"#667085", width: "100%", outline: "none"}} />
          </fieldset>
            <fieldset style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: 5, width: "75%", margin: "auto", position: "relative" }}>
              <div style={{position: "absolute", bottom: 5  , right: 15 }} onClick={()=>setShouldShowPassword(!shouldShowPassword)}>
              {shouldShowPassword ?   <BsEye color="#667085
" size={20} /> :  <BsEyeSlash color="#667085
" size={20}/>}
             </div>
            <label htmlFor="userLoginPassword" style={{fontSize: 13, color: "#344054", fontWeight: "500"}}>Password</label>
            <input type={shouldShowPassword ? "text": "password"} id="userLoginPassword" placeholder="Enter your password" style={{ borderWidth: 1, borderColor: "#D0D5DD", boxShadow: "2px 2px 0px #1018280D", borderRadius: 8, padding: 4, paddingLeft: 12, fontSize: 14, fontWeight: "400", color:"#667085", width: "100%", outline: "none"}} />
          </fieldset>
            </div>
            <div style={{width: "76%",display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignSelf: "center"}}>
                        <div id="toggleButton" style={{position: "relative", width: 50, borderRadius: 10, background: "#EAECF0", height: 20, display: "flex", alignItems: "center"}}>
                            <button style={{ width: 19, height: 19, borderRadius: "100%", background: rememberMe ? "#039855" : "#fff", position: "absolute", zIndex: 3, left: !rememberMe ? 2 : 29}} onClick={(e) => {
                                e.preventDefault();
                                setRememberMe(!rememberMe)
                            }} />
                        </div>      
                        <div>
                            <Link style={{color: "#039855", fontSize: 13, fontWeight: "500"}}href={"/login/forgotPassword"}>Forgot password</Link>
                        </div>
            </div>
          <PrimaryButtonContainer>
            <button style={{ width: "100%", padding: 5, justifyContent: "center",  fontWeight: "600", fontSize: 14, textAlign: "center"}} onClick={(e)=>e.preventDefault()}>
              Send code
            </button>         
           </PrimaryButtonContainer>
           <div style={{position: "absolute", bottom: 20, right: 343}}>
          <p style={{fontWeight: "500", fontSize: 10, color: "#98A2B3", }}>© 2024 Allocation Certification. All rights reserved.</p>
        </div>
        </form>
             <AllocationText />
            </div>
     </main>
 )   
}