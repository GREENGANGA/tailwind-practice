import Aboutimg from '../assets/about.png'
export default function About(){
    const config ={
        link1:'Hi, My name is Ganganathan. I am a fullstack developer. I build beautiful web applications with React.js and Tailwind CSS',
        link2:'I am proficient skills like React.js, Tailwind CSS, CSS, HTML and some more',
        link3:'In backend I know Node js and MongoDB'
    }
    return <section id="about" className="pg-secondary py-32 md:flex">
        <div className='md:w-1/2 px-10'>
            <img src={Aboutimg} alt="about"/>
        </div>
        <div className='md:w-1/2 md:py-20 md:px-20 w-auto px-10'>
                <h1 className='border-b-2 text-4xl font-sri-font border-primary text-white md:mt-0 mt-20 w-[160px]'>About Me</h1>
                <p className=' text-white mt-10 font-sri-font'>{config.link1}</p>
                <p className=' text-white mt-10 font-sri-font'>{config.link2}</p>
                <p className=' text-white mt-10 font-sri-font'>{config.link3}</p>
            </div>
    </section>
}