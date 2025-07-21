import { Experiences } from "./index.js";
import{motion} from 'framer-motion'

export default function Exp() {
    return(
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="text-lg font-light text-center py-5 " style={{color:"#fff"}}><h2>Experiences</h2></div>
            <div>
                {Experiences.map ((experience,index) =>
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center" >
                    <motion.div 
                    whileInView={{x:0,opacity:1}}
                    initial={{x:-100,opacity:0}}
                    transition={{duration:0.5}}
                    className="w-full lg:w-1/4">
                        <p className="mb-2 text-xs text-neutral-400">{experience.year}</p>
                    </motion.div>
                    <motion.div 
                     whileInView={{x:0,opacity:1}}
                    initial={{x:100,opacity:0}}
                    transition={{duration:0.5}}
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold text-xs">
                            {experience.role}-<span className="text-natural-200">{experience.company}</span>
                        </h6>
                        <p className="text-xs font-light text-neutral-400">{experience.description}</p>
                        {experience.technologies.map ((tech ,index)=>
                          <span key={index} className="mr-2 mt-6 rounded bg-lime-400 px-2 pt-2 text-xs
                           font-medium text-zinc-900">{tech}</span>
                        )}

                        
                    </motion.div>
                </div>
                )}
            </div>
        </div>
    )
};
