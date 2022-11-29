import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> MOBILE DEVELOPMENT</p>
            <ul className={Style.skills}>
                {info.skills.MobileDev.map((proficiency, index) => <li key={index}>{proficiency}</li>)}

            </ul>
            <p style={{color: info.baseColor}}> WEB FRONT END</p>
            <ul className={Style.skills}>
                {info.skills.WebFrontEnd.map((proficiency, index) => <li key={index}>{proficiency}</li>)}

            </ul>
       
            <p style={{color: info.baseColor}}> WEB BACK-END</p>
            <ul className={Style.skills}>
                {info.skills.WebBackEnd.map((proficiency, index) => <li key={index}>{proficiency}</li>)}

            </ul>
       
            <p style={{color: info.baseColor}}> DATABASE</p>
            <ul className={Style.skills}>
                {info.skills.Database.map((proficiency, index) => <li key={index}>{proficiency}</li>)}

            </ul>
       
            <p style={{color: info.baseColor}}> DEV-OPS</p>
            <ul className={Style.skills}>
                {info.skills.DevOps.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> COLLABORATIVE TOOLS</p>
            <ul className={Style.skills}>
                {info.skills.CollaborativeTools.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}