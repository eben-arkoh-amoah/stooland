"use client"

import Image from "next/image";
import land from "../../public/assets/land2.png";
import Logo from "@/components/utils/logo";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import AllocationText from "../utils/alocationCert";
import { PrimaryButtonContainer } from "../utils/primaryButton";  
import { useState } from "react";  
import { useResetPasswordForm } from "@/hooks/auth/resetPassword";
import { Controller } from 'react-hook-form';

export default function Resetpassword() {
  const [shouldShowPassword, setShouldShowPassword] = useState(true);
  const [shouldShowConfirmPassword, setShouldShowConfirmPassword] = useState<boolean>(false);
  const { handleSubmit, control, formState: { errors } } = useResetPasswordForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <main style={{ height: "100%", width: "68%", justifyContent: "center", alignItems: "center", flexDirection: "row", display: "flex" }}>
      <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
        <Image src={land} width={460} alt="King" style={{ margin: "auto" }} />
      </div>
      <div style={{ alignItems: "center", width: "56%", height: "97%", background: "#FFFFFF" }}>
        <Logo />
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", width: "80%", alignSelf: "center", justifyContent: "center", margin: "auto", height: "90%", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <legend>
              <text style={{ fontFamily: "Inter", fontSize: 18, fontWeight: "600", textAlign: "center" }}>
                Reset password
              </text>
            </legend>
          </div>
          <div style={{ display: "flex", justifyContent: "center", width: "100%", gap: 15, flexDirection: "column" }}>
            <fieldset style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: 5, width: "75%", margin: "auto", position: "relative" }}>
              <div style={{ position: "absolute", bottom: 5, right: 15 }} onClick={() => setShouldShowPassword(!shouldShowPassword)}>
                {shouldShowPassword ? <BsEye color="#667085" size={20} /> : <BsEyeSlash color="#667085" size={20} />}
              </div>
              <label htmlFor="forgotPasswordPassword" style={{ fontSize: 13, color: errors.password ? "red" : "#344054", fontWeight: "500" }}>New Password</label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => <input {...field} type={shouldShowPassword ? "text" : "password"} id="forgotPasswordPassword" placeholder="Enter your new password" style={{ borderWidth: 1, borderColor: "#D0D5DD", boxShadow: "2px 2px 0px #1018280D", borderRadius: 8, padding: 4, paddingLeft: 12, fontSize: 14, fontWeight: "400", color: "#667085", width: "100%", outline: "none" }} />}
              />

            </fieldset>
            <fieldset style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: 5, width: "75%", margin: "auto", position: "relative" }}>
              <div style={{ position: "absolute", bottom: 5, right: 15 }} onClick={() => setShouldShowConfirmPassword(!shouldShowConfirmPassword)}>
                {shouldShowConfirmPassword ? <BsEye color="#667085" size={20} /> : <BsEyeSlash color="#667085" size={20} />}
              </div>
              <label htmlFor="resetPasswordConfirm" style={{ fontSize: 13, color: errors.password ? "red" : "#344054", fontWeight: "500" }}>Confirm Password</label>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => <input {...field} type={shouldShowConfirmPassword ? "text" : "password"} id="resetPasswordConfirm" placeholder="Confirm your password" style={{ borderWidth: 1, borderColor: "#D0D5DD", boxShadow: "2px 2px 0px #1018280D", borderRadius: 8, padding: 4, paddingLeft: 12, fontSize: 14, fontWeight: "400", color: "#667085", width: "100%", outline: "none" }} />}
              />
            </fieldset>
          </div>
          <PrimaryButtonContainer>
            <button style={{ width: "100%", padding: 5, justifyContent: "center", fontWeight: "600", fontSize: 14, textAlign: "center" }} type="submit">
              Change password
            </button>
          </PrimaryButtonContainer>
          <Link style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, alignSelf: "center", justifySelf: "center" }} href={"/login/user"}>
            <IoIosArrowRoundBack size={22} color={"#039855"} />
            <p style={{ fontWeight: "600", fontSize: 11, color: "#039855" }}>Back to log in</p>
          </Link>
          <div style={{ position: "absolute", bottom: 20, right: 343 }}>
            <p style={{ fontWeight: "500", fontSize: 10, color: "#98A2B3" }}>© 2024 Allocation Certification. All rights reserved.</p>
          </div>
        </form>
        <AllocationText />
      </div>
    </main>
  );
}
