import {FaLinkedin} from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoDownloadOutline } from "react-icons/io5";
import resume from 'Avinash_R_Audio_UI_Resume.pdf';
import { FaWhatsapp } from "react-icons/fa";

export default function Nav() {
    return(
        <div className="mb-20 flex items-center justify-between py-6 ">
        <nav className="flex flex-shrink-0 items-center">
  <a className="text-xl" style={{color:"#fff"}}>aKr</a>
  </nav>
  <div className='m-8 flex items-center justify-center gap-4 text 2x-l'>
    <a href={resume} target='_blank'><IoDownloadOutline className=' hover:text-lime-400'/></a>
    <a href= "https://wa.me/918072639053" ><FaWhatsapp className='hover:text-lime-400' /></a>
    <a href='https://www.linkedin.com/in/avinash-ranganathan-828337171?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'><FaLinkedin className=' hover:text-lime-400'/></a>
    <a href='https://x.com/Avinr28?t=JXSCUqiBviDvBfQjx7QlvA&s=09' target='_blank'><FaSquareXTwitter className=' hover:text-lime-400'/></a>
  </div>
</div>
    )
};
