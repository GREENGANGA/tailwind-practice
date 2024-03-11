import resu from '../assets/res.png'
export default function Resume(){
    const config ={
        resume :"https://google.com"
    }
    return <section className="pg-secondary px-10 py-20 text-white font-sri-font">
        <div className="md:flex justify-center">
            <img className='w-[400px]' src={resu} alt="res" />
            <div className="md:py-20 mt-[50px] md:px-10">
                <h1 className="text-4xl border-b-2 border-primary w-[160px]">Resume</h1>
                <p className="mt-[35px]">Download my resume <a class="btn" href={config.resume}>Download</a></p>
            </div>
        </div>
    </section>
}