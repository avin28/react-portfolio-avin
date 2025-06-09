import pic from './pic.jpeg'
import {motion} from 'framer-motion'
import picture from './profile.png'

export default function About() {
    return(
        <div className="hero border-b border-neutral-900 pb-4 lg:mb-35">
        <div className='container mx-auto py-5' >
        
          <motion.div
          whileInView={{x:0,opacity:1}}
          initial={{opacity:0}}
          transition={{duration:0.5}}
           className="text-lg font-light text-center " style={{color:"#fff"}}><h2>About <span className='font-thin text-lg'>Me</span></h2></motion.div>
        
        <div className="hero-content flex-col md:flex-row md:w-full justify-center items-center">
        <motion.div
        whileInView={{x:0,opacity:1}}
        initial={{x:-100,opacity:0}}
        transition={{duration:0.5}}
         className='sm:w-full sm:justify-center sm:items-center'>
         <img src={picture} className="max-w-sm rounded-lg shadow-2xl" alt='Avinash' style={{height:"225px"}} />
        </motion.div>
        <motion.div
        whileInView={{x:0,opacity:1}}
        initial={{x:100,opacity:0}}
        transition={{duration:0.5}}
         className='sm:w-full sm:py-4'>     
        <p className="py-3 font-light text-xs md:max-w-sm sm:w-screen leading-5">I am a dedicated and versatile UI/UX & Management Professional
      with a passion for creating efficient and user-friendly designs.With 7 years of professional
      experience , I have worked with variety of tools such a Figma , AdobeXD , Mockflow.
      My journey began with a instrospect of capabilities and thrive to excel in the field of Information Technology.
      My Passion for Creativity led me towards designing. Over the years i have also practiced hard to understand and 
      write code for better viable designing. Outside design i enjoy music , i am a trained singer , songwriter. I love making
      songs.</p>
      
    </motion.div>
  </div>

  
</div>
  </div>

    )
};
