"use client"

import Image from "next/image";
import land from "../../public/assets/stoolLand.png";
import Logo from "@/components/utils/logo";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import AllocationText from "../utils/alocationCert";
 

export default function ForgotPasswordComponent() {
   
    return (
        <main style={{ height: "100%", width: "68%",   justifyContent: "center", alignItems: "center", flexDirection: "row", display: "flex" }}>
            <div style={{ height: "100%", display: "flex", alignItems: "center"}}>
                <Image src={land} width={460} alt="King" style={{margin: "auto"}}/>
            </div>
            <div style={{ alignItems: "center", width: "56%", height: "97%", background: "#FFFFFF", }}>
                <Logo />
                 <form style={{ display: "flex", width: "80%", alignSelf: "center", justifyContent: "center", margin: "auto", height: "90%", flexDirection: "column", gap: 10}}>
          <div style={{display: "flex", justifyContent: "center"}}>
            <legend >
            <text style={{ fontFamily: "Inter", fontSize: 18, fontWeight: "600", textAlign: "center"}}>
              Forgot password
            </text>
            </legend>
          </div>
          <div style={{display: "flex", justifyContent: "center", width: "100%", gap: 15, flexDirection: "column"}}>
             <fieldset style={{display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: 5, width: "75%", margin: "auto"}}>
            <label htmlFor="forgotPasswordEmail" style={{fontSize: 13, color: "#344054", fontWeight: "500"}}>Email</label>
            <input type="text" id="forgotPasswordEmail" placeholder="Enter your email here" style={{ borderWidth: 1, borderColor: "#D0D5DD", boxShadow: "2px 2px 0px #1018280D", borderRadius: 8, padding: 4, paddingLeft: 12, fontSize: 14, fontWeight: "400", color:"#667085", width: "100%", outline: "none"}} />
          </fieldset>
            </div>
          <div style={{width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", paddingTop: 10}}>
            <button style={{background: "#039855", borderRadius: 5, width: "75%", padding: 5, justifyContent: "center", color: "#fff", fontWeight: "600", fontSize: 14, textAlign: "center"}} disabled>
               Submit
                        </button>              
                    </div>
                    <Link style={{display: "flex", alignItems: "center", justifyContent: "center", gap: 5, alignSelf: "center", justifySelf: "center"}} href={""}>
                        <IoIosArrowRoundBack size={22} color={"#039855"} />
                        <p style={{fontWeight: "600", fontSize: 11, color: "#039855"}}>Back to log in</p>
                    </Link>
           <div style={{position: "absolute", bottom: 20, right: 343}}>
          <p style={{fontWeight: "500", fontSize: 10, color: "#98A2B3", }}>© 2024 Allocation Certification. All rights reserved.</p>
        </div>
        </form>
             <AllocationText />
            </div>
     </main>
 )   
}