
import Image from "next/image";
import logo from "../../public/assets/stoolLogo.png"

export default function Logo() {
    
    return (
       <div style={{ width: "15%", height: "10%", display: "flex", flexDirection: "column", alignItems: "center", alignSelf: "flex-end", justifySelf: "flex-start", paddingTop: 15, gap: 4 }}>
          
          <Image src={logo} alt="logo" width={40} />
          <p style={{ width: "100%", color: "#1D2939", fontSize: 6, fontWeight: "600", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <span style={{margin: "auto"}}>ALLOCATION</span>
            <span style={{margin: "auto"}}> CERTIFICATION</span>
          </p>
      </div>
    )
}
