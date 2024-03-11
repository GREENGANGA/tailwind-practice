export default function Contact(){
    const config ={
        phno:"9876543210",
        Email:"email@example.com"
    }
    return <section id="contact" className="pg-primary px-10 py-20 font-sri-font text-white">
        <div className="flex flex-col justify-center items-center">
            <h1 className="border-b-2 border-secondary w-[110px]">Contact Info</h1>
            <h3 className="py-5">Email:<a href="/">{config.Email}</a></h3>
            <h3>Contact:<a href="/">{config.phno}</a></h3>
        </div>
    </section>
}