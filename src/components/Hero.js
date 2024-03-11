import heroi from "../assets/loki.png";
import { FaTwitter,FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Hero(){
    const config ={
        link1:'Im a  full stack developer',
        socialmedia:{
            Twitter:"https://twitter.com/",
            Github:"https://github.com/",
            Linkedin:"https://linkedin.com/",
            Instagram:"https://instagram.com/",
        }
    }

    return <section  className="font-sri-font justify-center md:flex py-32 text-white pg-primary">
        <div className="md:w-1/2 py-10 px-10">
            <h1 className="font-bold md:py-20 text-4xl">Hi,<br/>I'm 
            <span className="text-green-500"> Ganganathan</span>,
                <p className="text-2xl">{config.link1}</p>
            </h1>
            <div className="flex py-10 md:py-0">
                <a className="pr-3 hover:text-black" target="_blank" href={config.socialmedia.Twitter}><FaTwitter size={25}/></a>
                <a className="pr-3 hover:text-black" target="_blank" href={config.socialmedia.Github}><FaGithub size={25}/></a>
                <a className="pr-3 hover:text-black" target="_blank" href={config.socialmedia.Linkedin}><FaLinkedin size={25}/></a>
                <a className="pr-3 hover:text-black" target="_blank" href={config.socialmedia.Instagram}><FaInstagram size={25}/></a>

            </div>
        </div>
        <img className="md:w-1/5 h-1/2 md:py-0 py-10" src={heroi} alt=""/>
    </section>
}