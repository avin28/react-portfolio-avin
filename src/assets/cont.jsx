import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import{motion} from 'framer-motion'

export default function Cont() {
    return(
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
             <motion.div
              whileInView={{x:0,opacity:1}}
                    initial={{opacity:0}}
                    transition={{duration:0.5}} 
              className="text-lg font-light text-center py-5 " style={{color:"#fff"}}><h2>Get In Touch</h2></motion.div>
        
            <motion.div whileInView={{x:0,opacity:1}}
                    initial={{opacity:0}}
                    transition={{duration:0.5}} 
                    className="text-center tracking-tighter">
               <span className="flex justify-center"><CiMail /> <span className="ps-2 text-xs text-neutral-400 border-b-neutral-300"><p>avinr28@gmail.com</p></span></span>
               <span className="flex mt-3 justify-center"><CiPhone /> <span className="ps-2 text-xs text-neutral-400 "><p>+918072639053</p></span></span>
               <span className="flex mt-3 justify-center"><FaWhatsapp /> <span className="ps-2 text-xs text-neutral-400 border-b-neutral-400 "><a href=" https://wa.me/918072639053"><p>Let's Connect On Whatsapp</p></a></span></span>
            </motion.div>
        </div>
    )
};
