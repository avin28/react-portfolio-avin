import { Projects } from "./assets";
import{motion} from 'framer-motion'

export default function Pro() {
    return(
        <div className=" border-b border-neutral-900 pb-4 lg:mb-35">
           <motion.div
            whileInView={{x:0,opacity:1}}
                    initial={{opacity:0}}
                    transition={{duration:0.5}} 
            className="text-lg font-light text-center py-5 " style={{color:"#fff"}}><h2>Projects</h2></motion.div>
            <div>
                {Projects.map((pro,index)=>
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div
                     whileInView={{x:0,opacity:1}}
                    initial={{x:-100,opacity:0}}
                    transition={{duration:0.5}}
                     className="w-full lg:w-1/4">
                    <img src={pro.image} alt={pro.title} className="mb-6 rounded-2xl"
                    style={{width:"150px"}}
                    ></img>
                    </motion.div>
                    <motion.div
                     whileInView={{x:0,opacity:1}}
                    initial={{x:100,opacity:0}}
                    transition={{duration:0.5}}
                     className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold text-xs">
                        {pro.title}                      
                    </h6>
                    <p className="text-neutral-400 text-xs">{pro.role}</p>
                    <p className="text-xs font-light text-neutral-400 py-2">{pro.description}</p>
                    {pro.technologies.map ((tec,index)=>
                    <span key={index} className="mr-2 mt-6 rounded bg-lime-400 px-2 py-1 text-xs
                        font-medium text-zinc-900">{tec}</span>
                    )}
                    </motion.div>
                    </div>
                )}
            </div>
        </div>
    )
};
