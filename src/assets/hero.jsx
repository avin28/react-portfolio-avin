import pic from './prof.jpg'
import {motion} from 'framer-motion'

const Cont = (delay)=>({
  hidden : {x:-100 , opacity:0},
  visible:{x : 0 , opacity:1 , transition:{duration:0.5 , delay:delay}},
})

export default function Hero() {
    return(
        <div className="hero border-b border-neutral-900 lg:mb-35 pb-24" >
        <div className='container mx-auto'>
         <div className="hero-content flex-col md:flex-row-reverse md:w-full justify-center items-center md:justify-between">
         <div className='sm:w-full sm:justify-center sm:items-center'>
         <motion.img 
          initial={{x:100,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.5, delay:1}}
          src={pic} className="max-w-sm rounded-lg shadow-2xl" alt='Avinash' style={{height:"250px"}} />
        </div>
        <div className='sm:w-full sm:py-2'>
      <motion.h1
       variants={Cont(0)}
       initial= "hidden"
       animate= "visible"
       className="text-5xl font-light md:text-start sm:text-center">AVINASH</motion.h1>
      <motion.h4 
       variants={Cont(0.5)}
       initial= "hidden"
       animate= "visible"
       className="py-2 bg-gradient-to-r from-lime-400 yellow-200 to-lime-100 
       bg-clip-text text-2xl tracking-tight text-transparent ">UI UX Design & Audio Engineering Professional</motion.h4>
      <motion.p 
        variants={Cont(0.75)}
       initial= "hidden"
       animate= "visible"
      className="py-3 font-light text-xs lg:max-w-[65vw] md:max-w-md sm:w-screen leading-5">Versatile Audio Engineer, Sound Designer & UI/UX Professional with 7+ years in design and specialized audio training. Expert in Logic Pro, Pro Tools, Ableton Live for mixing, mastering, sound design & post-production. Freelance music producer, lyricist, vocalist; original songs streaming publicly. Taught music online to NRI students. Featured vocalist for Tamil composer Kevin (Renowned Music Composer Deva crew affiliate, Dec 2025). Seeking remote/freelance roles in audio production, sound design, music tech, or hybrid audio-UI (e.g., audio tools/software, ed-tech multimedia).</motion.p>
      
    </div>
    
  </div>
  </div>
  </div>
 
    )
};

