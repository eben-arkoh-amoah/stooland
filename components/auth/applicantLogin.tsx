"use client"

import Image from "next/image";
import king from "../../public/assets/stoolKing1.png";
import Logo from "@/components/utils/logo";
import Link from "next/link";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import AllocationText from "../utils/alocationCert";
import { useState } from "react";
import { PrimaryButtonContainer } from "../utils/primaryButton";  
import { useApplicationLoginForm } from "@/hooks/auth/applicantLogin";
import { Controller } from 'react-hook-form';

export default function ApplicantLoginComponent() {
  const [shouldShowPassword, setShouldShowPassword] = useState<boolean>(true);
  const { handleSubmit, control, formState: { errors } } = useApplicationLoginForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <main style={{ height: "100%", width: "68%", justifyContent: "center", alignItems: "center", flexDirection: "row", display: "flex" }}>
      <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
        <Image src={king} width={460} alt="King" style={{ margin: "auto" }} />
      </div>
      <div style={{ alignItems: "center", width: "56%", height: "97%", background: "#FFFFFF" }}>
        <Logo />
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", width: "80%", alignSelf: "center", justifyContent: "center", margin: "auto", height: "90%", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <legend>
              <text style={{ fontFamily: "Inter", fontSize: 18, fontWeight: "600", textAlign: "center" }}>
                Log in
              </text>
            </legend>
          </div>
          <div style={{ display: "flex", justifyContent: "center", width: "100%", gap: 15, flexDirection: "column" }}>
            <fieldset style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: 5, width: "75%", margin: "auto" }}>
              <label htmlFor="loginPhone" style={{ fontSize: 13, color: errors.phone ? "red" : "#344054", fontWeight: "500" }}>Phone</label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => <input {...field} type="text" id="loginPhone" placeholder="Enter your phone number" style={{ borderWidth: 1, borderColor: "#D0D5DD", boxShadow: "2px 2px 0px #1018280D", borderRadius: 8, padding: 4, paddingLeft: 12, fontSize: 14, fontWeight: "400", color: "#667085", width: "100%", outline: "none" }} />}
              />
            </fieldset>
            <fieldset style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: 5, width: "75%", margin: "auto", position: "relative" }}>
              <div style={{ position: "absolute", bottom: 5, right: 15 }} onClick={() => setShouldShowPassword(!shouldShowPassword)}>
                {shouldShowPassword ? <BsEye color="#667085" size={20} /> : <BsEyeSlash color="#667085" size={20} />}
              </div>
              <label htmlFor="loginPassword" style={{ fontSize: 13, color: errors.password ? "red" : "#344054", fontWeight: "500", }}>Password</label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => <input {...field} type={shouldShowPassword ? "text" : "password"} id="loginPassword" placeholder="Enter your password" style={{ borderWidth: 1, borderColor: "#D0D5DD", boxShadow: "2px 2px 0px #1018280D", borderRadius: 8, padding: 4, paddingLeft: 12, fontSize: 14, fontWeight: "400", color: "#667085", width: "100%", outline: "none" }} />}
              />
            </fieldset>
          </div>
          <PrimaryButtonContainer>
            <button style={{ width: "100%", padding: 5, justifyContent: "center", fontWeight: "600", fontSize: 14, textAlign: "center" }} type="submit">
              Send code
            </button>
          </PrimaryButtonContainer>
          <div style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "77.5%" }}>
              <p style={{ margin: "auto", display: "flex", justifyContent: "center" }}><span style={{ fontSize: 13, fontWeight: "500", color: "#667085" }}>Don’t have an account?</span><Link href={"/"} style={{ fontSize: 13, fontWeight: "500", color: "#039855", paddingLeft: 10 }}>Sign up</Link ></p>
            </div>
            <div style={{ width: "77.5%", paddingTop: 20 }}>
              <p style={{ color: "#667085", fontWeight: "500", fontSize: 13, textAlign: "center" }}>NB: An OTP will be sent to your phone number for verification</p>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 20, right: 343 }}>
            <p style={{ fontWeight: "500", fontSize: 10, color: "#98A2B3" }}>© 2024 Allocation Certification. All rights reserved.</p>
          </div>
        </form>
        <AllocationText />
      </div>
    </main>
  );
}
