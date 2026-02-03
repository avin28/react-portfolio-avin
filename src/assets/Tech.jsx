import { FaFigma } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { GiZeppelin } from "react-icons/gi";
import { SiProtools } from "react-icons/si";
import ableton from '../assets/abletonlive.svg';
import logic from "../assets/logic_pro_x.svg";
import {animate, motion} from 'framer-motion'


export default function Tech() {
    return(
        <div className="container mx-auto border-b border-neutral-900 pb-4 lg:mb-35" >
         <motion.div 
          whileInView={{x:0,opacity:1}}
          initial={{opacity:0}}
          transition={{duration:0.5}}
         className="text-lg font-light text-center mt-4 " style={{color:"#fff"}}><p>Technology</p></motion.div>
        <div className="flex flex-wrap justify-center space-x-4 mt-8 xs:grid grid-rows-4 gap-2">
        <motion.div
             whileInView={{x:0,opacity:1}}
          initial={{opacity:0 ,x:-100}}
          transition={{duration:0.5}}
         className="rounded-2xl border-2 border-neutral-800 p-4">
            <FaFigma className="text-2xl" />
            </motion.div>
            <motion.div
      whileInView={{x:0,opacity:1}}
          initial={{opacity:0,x:-80}}
          transition={{duration:0.5}}
             className="rounded-2xl border-2 border-neutral-800 p-4">
            <SiAdobexd className="text-2xl text-pink-500"/>
            </motion.div>
            <motion.div
      whileInView={{x:0,opacity:1}}
          initial={{opacity:0}}
          transition={{duration:0.5}}
            className="rounded-2xl border-2 border-neutral-800 p-4">
            <SiAdobe className="text-2xl text-rose-600"/>
            </motion.div>
            <motion.div
      whileInView={{x:0,opacity:1}}
          initial={{opacity:0}}
          transition={{duration:0.5}}
             className="rounded-2xl border-2 border-neutral-800 p-4">
            <GiZeppelin className="text-2xl text-amber-500"/>
            </motion.div>
            <motion.div
      whileInView={{x:0,opacity:1}}
          initial={{opacity:0}}
          transition={{duration:0.5}}
             className="rounded-2xl border-2 border-neutral-800 p-4 ">
            <RiTailwindCssFill className="text-2xl text-cyan-400"/>
            </motion.div>
            <motion.div
      whileInView={{x:0,opacity:1}}
          initial={{opacity:0,x:80}}
          transition={{duration:0.5}}
             className="rounded-2xl border-2 border-neutral-800 p-4 ">
            <FaReact className="text-2xl text-cyan-400"/>
            </motion.div>
            <motion.div 
      whileInView={{x:0,opacity:1}}
          initial={{opacity:0,x:100}}
          transition={{duration:0.5}}
            className="rounded-2xl border-2 border-neutral-800 p-4 ">
            <FaBootstrap className="text-2xl text-purple-500"/>
            </motion.div>
              <motion.div 
      whileInView={{x:0,opacity:1}}
          initial={{opacity:0,x:100}}
          transition={{duration:0.5}}
            className="rounded-2xl border-2 border-neutral-800 p-4 ">
            <SiProtools className="text-2xl text-purple-500"/>
            </motion.div>
            <motion.div 
      whileInView={{x:0,opacity:1}}
          initial={{opacity:0,x:100}}
          transition={{duration:0.5}}
            className="rounded-2xl border-2 border-neutral-800 p-4 ">
            <img src= {ableton} className="text-2xl w-6 h-6 p-1 bg-yellow-500"/>
            </motion.div>
            <motion.div 
      whileInView={{x:0,opacity:1}}
          initial={{opacity:0,x:100}}
          transition={{duration:0.5}}
            className="rounded-2xl border-2 border-neutral-800 p-4 ">
            <img src={logic} className="text-xl w-6 h-6 text-purple-500"/>
            </motion.div>
        </div>
        </div>
    )
};
