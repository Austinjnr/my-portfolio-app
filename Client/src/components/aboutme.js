import React, { Component } from 'react';


class About extends Component {
  render() {
    return(
      <div>
         <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__340.jpg" className="img-fluid rounded-start" alt="avatar" />
         <h5>Welcome to my portfolio!</h5>
         <p className="card-text">Hello! I am a MERN full stack developer with a passion for building innovative and user-friendly applications. My name is Austin Obonyo, and I am excited to share my experience and skills with you.
        My journey as a developer started with learning basic programming languages like C and Java in college. However, my passion for development grew when I discovered the powerful combination of Node.js, Express, React, and MongoDB (MERN stack).
        As a full-stack developer, I have experience in building end-to-end web applications, from front-end development to back-end development. My skills include HTML, CSS, JavaScript, React, Redux, Node.js, Express, MongoDB, and SQL.</p>
        <p1 className="card-text"> I am also familiar with Agile methodologies and DevOps practices, including Git, Docker, and AWS. These tools enable me to create, test, and deploy applications quickly and efficiently.
        In addition to technical skills, I am a team player with excellent communication and collaboration abilities. I enjoy working with people from different backgrounds, sharing knowledge and ideas to achieve common goals.
        Throughout my career, I have worked on several projects that have honed my skills and allowed me to create meaningful and functional applications. Whether it's a web application, a mobile app, or a RESTful API, I am passionate about delivering high-quality software that meets user needs and business objectives.
        Thank you for taking the time to read my about page. I look forward to hearing from you and discussing how we can work together to bring your ideas to life.</p1>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    )
  }
}

export default About;
