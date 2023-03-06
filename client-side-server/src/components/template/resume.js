import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

const Resume = () => {
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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2021}
              endYear={2022}
              jobName="Academic tutor"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2022}
                endYear={'Upto date'}
                jobName="Freelancer"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <p>I am well conversant with;</p>
              <Skills
                skill="javascript"
                   />
                <Skills
                  skill="HTML/CSS"
                   />
                <Skills
                    skill="NodeJS"
                    />
                <Skills
                      skill="React"
                    />


          </Cell>
        </Grid>
      </div>
    )
  
}

export default Resume;
