import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVFUJkIccsHlJLhJL7o1zWNAGmhh6NYIXHLw&usqp=CAU"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Austin Obonyo</h2>
            <h4 style={{color: 'grey'}}>Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p> I am a MERN full stack developer with a passion for building
            innovative and user-friendly applications. My name is Austin Obonyo.
            As a full-stack developer, I have experience in building end-to-end
            web applications, from front-end development to back-end
            development. My skills include HTML, CSS, JavaScript, React, Redux,
            Node.js, Express, MongoDB, and SQL.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            
            <h5>Phone</h5>
            <p>0705939351</p>
            <h5>Email</h5>
            <p>austinobonyo@gmail.com</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
            startYear={2020}
            endYear={2021}
            schoolName="Technical University of Nairobi"
            schoolDescription="The Technical University of Nairobi (TUK) is a public university in Nairobi, Kenya that offers undergraduate and postgraduate degree programs in various fields including engineering, sciences, arts and humanities, social sciences, and business-related fields. TUK has a focus on science, technology, engineering and mathematics (STEM) education and provides students with hands-on experience through practical training and research opportunities."
               />

               <Education
                startYear={2022}
                endYear={2023}
                schoolName="Moringa School"
                schoolDescription="I'm glad to hear that you had the opportunity to attend a moringa school where learn valuable skills in HTML, CSS, React, Ruby, and Ruby on Rails! 
                     During the bootcamp, I were introduced to the basics of HTML and CSS, learning how to create web pages and style them with CSS. I also delved into the world of front-end development with React, a popular JavaScript library for building user interfaces.
                     
                     Moving on to the back-end, I learned the Ruby programming language, which is often used for web development due to its flexibility and readability and also gained knowledge of Ruby on Rails, a powerful web application framework that helps developers build scalable, database-driven web applications quickly and efficiently.
                     
                     Throughout the bootcamp, i worked on various projects and exercises to solidify my understanding of these concepts and technologies.I also had the opportunity to collaborate with other students and instructors to build more complex applications."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2021}
              endYear={2022}
              jobName="Academic tutor"
              jobDescription="As an academic tutor in the medical and business sector, I have gained a wealth of experience helping students excel in their coursework, understand complex concepts, and achieve their academic goals. My role as a tutor involve working with individual students or small groups, and was responsible for creating and delivering lesson plans, providing feedback and support, and helping students develop study skills and strategies.
            
                In the medical sector, I have have tutored students in a variety of areas, such as anatomy, physiology, pharmacology, and clinical skills. I have worked with students at various levels of education, from undergraduate to graduate and professional programs, and helped them prepare for exams, complete assignments, and develop a deep understanding of the subject matter.
                
                In the business sector, I tutored students in areas such as accounting, finance, marketing, and management. You may have helped students develop critical thinking and problem-solving skills, analyze case studies, and prepare for exams and assignments.
              
                Overall, my experience as an academic tutor in the medical and business sector has been rewarding and challenging, and has allowed me to make a significant impact on the academic and professional success of your students."
              />

              <Experience
               startYear={2022}
               endYear={'Upto date'}
               jobName="Freelancer"
               jobDescription="As a MERN stack software developer, I have specialized in building web applications using the MERN stack, which includes MongoDB, ExpressJS, ReactJS, and NodeJS. This technology stack is widely used in the industry for developing scalable and efficient web applications."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <p>I am well conversant with:</p>
              <Skills
                skill="javascript"
                progress={100}
                />
              <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
              <Skills
                    skill="NodeJS"
                    progress={50}
                    />
              <Skills
                      skill="React"
                      progress={25}
                      />
              <Skills 
              skill="Ruby"
              progress={30}
                     />
              <Skills 
              skill="Ruby on Rails" 
              progress={25}
                  />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
