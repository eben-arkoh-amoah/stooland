"use client"

import Image from "next/image";
import king from "../../public/assets/stoolKing.png";
import logo from "../../public/assets/stoolLogo.png";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
 
export default function SignUp() {
    const [shouldShowPassword, setShouldShowPassword] = useState<boolean>(false);
const [shouldShowConfirmPassword, setShouldShowConfirmPassword] = useState<boolean>(true)

  return (
    <main style={{ height: "97%", width: "68%", margin: "auto", flexDirection: "row", display: "flex" }}>
      <div>
        <Image src={king} alt="" width={452}/>
      </div>
       <div
     style={{height: "100%", background: "#FFFFFF", width: "55.3%"}} >
        <div style={{ width: "15%", height: "10%", display: "flex", flexDirection: "column", alignItems: "center", alignSelf: "flex-end", justifySelf: "flex-start", paddingTop: 15, gap: 4 }}>
          
          <Image src={logo} alt="logo" width={40} />
          <p style={{ width: "100%", color: "#1D2939", fontSize: 6, fontWeight: "600", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <span style={{margin: "auto"}}>ALLOCATION</span>
            <span style={{margin: "auto"}}> CERTIFICATION</span>
          </p>
      </div>
        <form style={{ display: "flex", width: "80%", alignSelf: "center", justifyContent: "center", margin: "auto", height: "90%", flexDirection: "column", gap: 10}}>
          <div style={{display: "flex", justifyContent: "center"}}>
            <legend >
            <text style={{ fontFamily: "Inter", fontSize: 18, fontWeight: "600", textAlign: "center"}}>
              Sign up
            </text>
            </legend>
          </div>
          <div style={{display: "flex", justifyContent: "center", width: "100%", gap: 10, flexDirection: "column"}}>
            <fieldset style={{display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: 5, width: "75%", margin: "auto"}}>
            <label htmlFor="signUpName" style={{fontSize: 13, color: "#344054", fontWeight: "500"}}>Name</label>
            <input type="text" id="signUpName" placeholder="Enter your name" style={{ borderWidth: 1, borderColor: "#D0D5DD", boxShadow: "2px 2px 0px #1018280D", borderRadius: 8, padding: 4, paddingLeft: 12, fontSize: 14, fontWeight: "400", color:"#667085", width: "100%", outline: "none"}} />
            </fieldset>
             <fieldset style={{display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: 5, width: "75%", margin: "auto"}}>
            <label htmlFor="signUpEmail" style={{fontSize: 13, color: "#344054", fontWeight: "500"}}>Email</label>
            <input type="text" id="signUpEmail" placeholder="Enter your email" style={{ borderWidth: 1, borderColor: "#D0D5DD", boxShadow: "2px 2px 0px #1018280D", borderRadius: 8, padding: 4, paddingLeft: 12, fontSize: 14, fontWeight: "400", color:"#667085", width: "100%", outline: "none"}} />
          </fieldset>
             <fieldset style={{display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: 5, width: "75%", margin: "auto"}}>
            <label htmlFor="signUpPhone" style={{fontSize: 13, color: "#344054", fontWeight: "500"}}>Phone</label>
            <input type="text" id="signUpPhone" placeholder="Enter your phone number" style={{ borderWidth: 1, borderColor: "#D0D5DD", boxShadow: "2px 2px 0px #1018280D", borderRadius: 8, padding: 4, paddingLeft: 12, fontSize: 14, fontWeight: "400", color:"#667085", width: "100%", outline: "none"}} />
          </fieldset>
            <fieldset style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: 5, width: "75%", margin: "auto", position: "relative" }}>
              <div style={{position: "absolute", bottom: 5  , right: 15 }} onClick={()=>setShouldShowPassword(!shouldShowPassword)}>
              {shouldShowPassword ?   <BsEye color="#667085
" size={20} /> :  <BsEyeSlash color="#667085
" size={20}/>}
             </div>
            <label htmlFor="signUpPassword" style={{fontSize: 13, color: "#344054", fontWeight: "500"}}>Password</label>
            <input type={shouldShowPassword ? "text": "password"} id="signUpPassword" placeholder="Enter your password" style={{ borderWidth: 1, borderColor: "#D0D5DD", boxShadow: "2px 2px 0px #1018280D", borderRadius: 8, padding: 4, paddingLeft: 12, fontSize: 14, fontWeight: "400", color:"#667085", width: "100%", outline: "none"}} />
          </fieldset>
                      <fieldset style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: 5, width: "75%", margin: "auto", position: "relative" }}>
              <div style={{position: "absolute", bottom: 5  , right: 15 }} onClick={()=>setShouldShowConfirmPassword(!shouldShowConfirmPassword)}>
              {shouldShowConfirmPassword ?   <BsEye color="#667085
" size={20} /> :  <BsEyeSlash color="#667085
" size={20}/>}
             </div>              
            <label htmlFor="signUpPasswordConfirm" style={{fontSize: 13, color: "#344054", fontWeight: "500"}}>Confirm Password</label>
                          <input type={shouldShowConfirmPassword ? "text" : "password"} id="signUpPasswordConfirm" placeholder="Confirm your password" style={{ borderWidth: 1, borderColor: "#D0D5DD", boxShadow: "2px 2px 0px #1018280D", borderRadius: 8, padding: 4, paddingLeft: 12, fontSize: 14, fontWeight: "400", color:"#667085", width: "100%", outline: "none"}} />
          </fieldset>
          </div>
          <div style={{width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            <button style={{background: "#039855", borderRadius: 5, width: "75%", padding: 5}}>
               <text style={{color: "#fff", margin: "auto", fontWeight: "600", fontSize: 14}}>Register</text>
            </button>
            <div style={{width: "77.5%", paddingTop: 5}}>
               <p style={{margin: "auto", display: "flex", justifyContent: "center"}}><span style={{fontSize: 13, fontWeight: "500"}}>Already have an account?</span><span style={{fontSize: 13, fontWeight: "500", color: "#039855", paddingLeft: 10}}> Log in</span></p>
            </div>
          </div>
           <div style={{position: "absolute", bottom: 20, right: 343}}>
          <p style={{fontWeight: "500", fontSize: 10, color: "#98A2B3", }}>© 2024 Allocation Certification. All rights reserved.</p>
        </div>
        </form>
          </div>
          <div style={{position: "absolute", width: "5%", height: "80%",  right: 216, display: "flex", justifyContent: "center", alignItems: "flex-end", bottom: 90}}>
              <p style={{fontSize: 15, color: "rgba(208, 213, 221, 0.3)", writingMode: "vertical-rl",
        textOrientation: "upright", fontWeight: "700"}}>ALLOCATIONCERTIFICATION</p>
          </div>
      <div>
        
      </div> 
         
   </main>
  );
}


