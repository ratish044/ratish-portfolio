import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
//import kvm from "../assets/skills/kvm.svg"
import linux from "../assets/skills/linux.svg"
import python from "../assets/skills/python.svg"
import reactIcon from "../assets/skills/react.svg"
import tailwind from "../assets/skills/tailwind.svg"
//import mikrotik from "../assets/skills/mikrotik.svg"
//import kubernetes from "../assets/skills/kubernetes.svg"
//import ansible from "../assets/skills/ansible.svg"
import windows from "../assets/skills/windows.svg"
import react from "../assets/skills/react.svg"
import cisco from "../assets/skills/cisco.svg"
//import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import gitlab from "../assets/skills/gitlab.svg"

import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">SKILLS</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="linux" course="5 months" img={linux} />
                <SkillCard name="python" course="1 years" img={python} />
                <SkillCard name="javascript" course="1 years" img={javascript} />
                <SkillCard name="react" course="5 month" img={reactIcon} />
                <SkillCard name="tailwind" course="1 month" img={tailwind} />
                <SkillCard name="windows" course="1 years" img={windows} />
                <SkillCard name="react" course="3 month" img={react} />
                <SkillCard name="cisco" course="3 month " img={cisco} />
                <SkillCard name="git" course="3 month" img={git} />
                <SkillCard name="express" course="3 month" img={express} />
                <SkillCard name="gitlab" course="3 month" img={gitlab} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}