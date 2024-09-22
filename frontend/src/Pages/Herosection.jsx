import React from 'react';
import './Herosection.css' ;
import logo from '../assets/stationsaarthi.svg';
import img1 from '../assets/hero.png';
import bg from '../assets/bg.png';
import bgmobile from '../assets/bgmobile.png';
import navigation from './navigation';
import { TfiAlignLeft } from "react-icons/tfi";
const Herosection = () => {
    return (
        <>
        <TfiAlignLeft className='fill-white h-[10vh] w-[6vh] font-extrabold ml-4'> <navigation/>   </TfiAlignLeft>
        <div className="flex items-center justify-center bg-center bg-cover herosection">
            <div className='grid justify-items-center'><img src={logo} alt="" srcset="" style={{height:"40vh" }}/>
            <h1 className='text-xl font-extrabold text-white'>Station Saarthi : Your Platform Guide</h1>
            </div>
            {/* <img src={bg} alt="whitishbg" style={{ position: "absolute", bottom: 0 }} />
            <img src={bgmobile} alt="" style={{ position: "absolute", bottom: 0, zIndex: "10" }} className="md:hidden" /> */}
        </div> 
        </>
    );
};

export default Herosection;