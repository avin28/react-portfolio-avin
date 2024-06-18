import pic from './pic.jpg'
import {motion} from 'framer-motion'

const Cont = (delay)=>({
  hidden : {x:-100 , opacity:0},
  visible:{x : 0 , opacity:1 , transition:{duration:0.5 , delay:delay}},
})

export default function Hero() {
    return(
        <div className="hero border-b border-neutral-900 pb-4 lg:mb-35" >
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
       className="text-5xl font-light">AVINASH</motion.h1>
      <motion.h4 
       variants={Cont(0.5)}
       initial= "hidden"
       animate= "visible"
       className="py-2 bg-gradient-to-r from-lime-400 yellow-200 to-lime-100 
       bg-clip-text text-2xl tracking-tight text-transparent ">UI UX Designer</motion.h4>
      <motion.p 
        variants={Cont(0.75)}
       initial= "hidden"
       animate= "visible"
      className="py-3 font-light text-xs md:max-w-md sm:w-screen leading-5">A Passionate UI/UX Designer with 6 years of experience 
      having worked from Web Applications to Saas Products.Well-versed with entire
      design process and efficient with tools like Figma , AdobeXD , Zeplin , UX-Pin . I 
      have also continuously honed my skills in understanding Front-end technologies like Html , CSS ,
      Javascript , and Frame-works like Tailwind Css , Bootstrap , React , Native to ensure top User-experience and design standards.</motion.p>
      
    </div>
    
  </div>
  </div>
  </div>
 
    )
};

