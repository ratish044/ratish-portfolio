import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import mtcna from "../assets/certs/mtcna.jpg"
import adinusa from "../assets/certs/adinusa.png"
import dicodingAws from "../assets/certs/dicoding-aws.png"
import dicodingJs from "../assets/certs/dicoding-js.png"
import dicodingNetwork from "../assets/certs/dicoding-network.png"
//import progateHtml from "../assets/certs/progate-htmlcss.png"
//import progateJs from "../assets/certs/progate-js.png"
import fccResponsive from "../assets/certs/fcc-responsive.png"

// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">CERTIFICATION</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Data Science " img={adinusa} issued="VERZEO" date="20-12-2022" />
                <CertCard name="Artificial intelligence" img={mtcna} issued="SMARTKNOWER" date="13-06-22" />
                <CertCard name="Cloud Practitioner Essentials" img={dicodingAws} issued="Dicoding Indonesia" date="Feb 2022" />
                <CertCard name="Cyber Security" img={dicodingJs} issued="CISCO Technology" date="15-01-2023" />
                <CertCard name="Aviator program " img={dicodingNetwork} issued="Forge" date="06-08-2022" />
                <CertCard name="Responsive Web Design " img={fccResponsive} issued="Dicodig Indonesia" date="Dec 21" />
                

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
