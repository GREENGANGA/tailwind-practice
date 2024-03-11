import p_1 from '../assets/p-1.png'
import p_2 from '../assets/p-2.png'
import p_3 from '../assets/p-3.png'

export default function Project(){
    const config ={
        projects:[
            {
                image:p_1,
                Description:'This project is used in Reat.js, Tailwind CSS',
                link:'https://github.com'
            },
            {
                image:p_2,
                Description:'This project is used in HTML, CSS and JavaScript',
                link:'https://github.com'
            },
            {
                image:p_3,
                Description:'This project is used in Django, Python and JavaScript',
                link:'https://github.com'
            }
        ]

    }
    return <section id="project" className="pg-primary text-white py-20 px-10">
        <div>
            <h1 className="font-sri-font border-secondary border-b-2 w-[150px] text-4xl">Projects</h1>
            <p className="font-sri-font py-10">There are some of my best projects.</p>
        </div>
        <div className="flex md:flex-row flex-col gap-5">
             {config.projects.map((project)=>(
                <a target='_blank' href={project.link}><div className="relative">
                    <img className="w-[350px] h-[200px]" src={project.image} alt="p-1" />
                    <div  className="px-5 p-dec">
                        <p className="text-center">{project.Description}</p>
                        {/* <div className="flex justify-center py-5">
                            <a className="btn " target="_blank" href={project.link}>Go to Github</a>
                        </div> */}
                    </div>
                </div></a>
             ))}
        </div>
    </section>
}