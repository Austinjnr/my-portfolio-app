import Socials from './Contact'

function About() {
    return ( 
        <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVFUJkIccsHlJLhJL7o1zWNAGmhh6NYIXHLw&usqp=CAU" alt="my profile picture"/>
            <h2>Austin Obonyo</h2>
            <h3>Fullstack Developer</h3>
            <p>Hi, I am a software engineer proficient in the MERN stack.</p>
            <Socials />
        </div>
     );
}

export default About;