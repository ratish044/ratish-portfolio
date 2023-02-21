import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">HONORS & AWARDS</h1>
            <p className="font-light text-gray-400">I consider These are my honors & awards</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Zonal level volleyball player " issued="YEAR:2019-2020" />
                <HonorCard name="Inter School karate champion " issued="YEAR:2015-2016" desc=" Under 15 category " />
                <HonorCard name="1st Place Winner in drawing Competion " issued="YEAR:2018-2019" desc="Free hand inter school category" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
