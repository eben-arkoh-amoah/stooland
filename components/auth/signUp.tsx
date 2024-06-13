"use client"

import Image from "next/image";
import king from "../../public/assets/stoolKing.png";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import Logo from "../utils/logo";
import AllocationText from "../utils/alocationCert";
import { PrimaryButtonContainer } from "../utils/primaryButton";
import { useSignUpForm } from "@/hooks/auth/signUp";
import { useForm, Controller } from 'react-hook-form';

export default function SignUp() {
    const [shouldShowPassword, setShouldShowPassword] = useState<boolean>(false);
    const [shouldShowConfirmPassword, setShouldShowConfirmPassword] = useState<boolean>(true);
    const { handleSubmit, control, formState: { errors } } = useSignUpForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <main style={{ height: "97%", width: "68%", margin: "auto", flexDirection: "row", display: "flex" }}>
            <div>
                <Image src={king} alt="" width={452} />
            </div>
            <div style={{ height: "100%", background: "#FFFFFF", width: "55.3%" }}>
                <Logo />
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", width: "80%", alignSelf: "center", justifyContent: "center", margin: "auto", height: "90%", flexDirection: "column", gap: 10 }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <legend>
                            <text style={{ fontFamily: "Inter", fontSize: 18, fontWeight: "600", textAlign: "center" }}>
                                Sign up
                            </text>
                        </legend>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", width: "100%", gap: 10, flexDirection: "column" }}>
                        <fieldset style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: 5, width: "75%", margin: "auto" }}>
                            <label htmlFor="signUpName" style={{ fontSize: 13, color: errors.name ? "red" : "#344054", fontWeight: "500" }}>Name {errors.name &&<span>*</span>}</label>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => <input {...field} type="text" id="signUpName" placeholder="Enter your name" style={{ borderWidth: 1, borderColor: "#D0D5DD", boxShadow: "2px 2px 0px #1018280D", borderRadius: 8, padding: 4, paddingLeft: 12, fontSize: 14, fontWeight: "400", color: "#667085", width: "100%", outline: "none" }} />}
                            />
                        </fieldset>
                        <fieldset style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: 5, width: "75%", margin: "auto" }}>
                            <label htmlFor="signUpEmail" style={{ fontSize: 13, color: errors.email ? "red" : "#344054", fontWeight: "500" }}>Email {errors.email &&<span>*</span>}</label>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => <input {...field} type="text" id="signUpEmail" placeholder="Enter your email" style={{ borderWidth: 1, borderColor: "#D0D5DD", boxShadow: "2px 2px 0px #1018280D", borderRadius: 8, padding: 4, paddingLeft: 12, fontSize: 14, fontWeight: "400", color: "#667085", width: "100%", outline: "none" }} />}
                            />
                        </fieldset>
                        <fieldset style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: 5, width: "75%", margin: "auto" }}>
                <label htmlFor="signUpPhone" style={{ fontSize: 13, color: errors.phone ? "red" : "#344054", fontWeight: "500" }}>Phone
                  {errors.phone && <span>*</span>}
                </label>
                            <Controller
                                name="phone"
                                control={control}
                                render={({ field }) => <input {...field} type="text" id="signUpPhone" placeholder="Enter your phone number" style={{ borderWidth: 1, borderColor: "#D0D5DD", boxShadow: "2px 2px 0px #1018280D", borderRadius: 8, padding: 4, paddingLeft: 12, fontSize: 14, fontWeight: "400", color: "#667085", width: "100%", outline: "none" }} />}
                            />
                        </fieldset>
                        <fieldset style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: 5, width: "75%", margin: "auto", position: "relative" }}>
                            <div style={{ position: "absolute", bottom: 5, right: 15 }} onClick={() => setShouldShowPassword(!shouldShowPassword)}>
                                {shouldShowPassword ? <BsEye color="#667085" size={20} /> : <BsEyeSlash color="#667085" size={20} />}
                            </div>
                <label htmlFor="signUpPassword" style={{ fontSize: 13, color: errors.password ? "red" : "#344054", fontWeight: "500" }}>Password
                  {errors.password && <span>*</span>}
                </label>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => <input {...field} type={shouldShowPassword ? "text" : "password"} id="signUpPassword" placeholder="Enter your password" style={{ borderWidth: 1, borderColor: "#D0D5DD", boxShadow: "2px 2px 0px #1018280D", borderRadius: 8, padding: 4, paddingLeft: 12, fontSize: 14, fontWeight: "400", color: "#667085", width: "100%", outline: "none" }} />}
                            />
                        </fieldset>
                        <fieldset style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: 5, width: "75%", margin: "auto", position: "relative" }}>
                            <div style={{ position: "absolute", bottom: 5, right: 15 }} onClick={() => setShouldShowConfirmPassword(!shouldShowConfirmPassword)}>
                                {shouldShowConfirmPassword ? <BsEye color="#667085" size={20} /> : <BsEyeSlash color="#667085" size={20} />}
                            </div>
                <label htmlFor="signUpPasswordConfirm" style={{ fontSize: 13, color: errors.confirmPassword ? "red" : "#344054", fontWeight: "500" }}>Confirm Password
                 {errors.confirmPassword &&<span>*</span>}
                </label>
                            <Controller
                                name="confirmPassword"
                                control={control}
                                render={({ field }) => <input {...field} type={shouldShowConfirmPassword ? "text" : "password"} id="signUpPasswordConfirm" placeholder="Confirm your password" style={{ borderWidth: 1, borderColor: "#D0D5DD", boxShadow: "2px 2px 0px #1018280D", borderRadius: 8, padding: 4, paddingLeft: 12, fontSize: 14, fontWeight: "400", color: "#667085", width: "100%", outline: "none" }} />}
                            />
                        </fieldset>
                    </div>
                    <PrimaryButtonContainer>
                        <button type="submit" style={{ width: "100%", padding: 5, justifyContent: "center", fontWeight: "600", fontSize: 14, textAlign: "center" }}>
                            Register
                        </button>
                    </PrimaryButtonContainer>
                    <div style={{ width: "100%", paddingTop: 5 }}>
                        <p style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
                            <span style={{ fontSize: 13, fontWeight: "500", color: "#667085" }}>Already have an account?</span>
                            <Link href={"/login/user"} style={{ fontSize: 13, fontWeight: "500", color: "#039855", paddingLeft: 10 }}>Log in</Link>
                        </p>
                    </div>
                    <div style={{ position: "absolute", bottom: 20, right: 343 }}>
                        <p style={{ fontWeight: "500", fontSize: 10, color: "#98A2B3" }}>© 2024 Allocation Certification. All rights reserved.</p>
                    </div>
                </form>
            </div>
            <AllocationText />
        </main>
    );
}
