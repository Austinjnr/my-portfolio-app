import React, { useState, useEffect } from 'react';
import { classNames } from 'classnames';

const AddProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState('');
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch('https://my-portfolio-app-api.onrender.com/projects')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProjects(data.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (event, id) => {
    event.preventDefault();
    fetch(`https://my-portfolio-app-api.onrender.com/projects/destroy/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const updatedProjects = projects.filter(project => project.id !== id);
        setProjects(updatedProjects);
      })
      .catch(error => console.error(error));
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    fetch(`https://my-portfolio-app-api.onrender.com/projects/update/${selectedProject.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description,
        skills
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const updatedProjects = projects.map(project => {
          if (project.id === selectedProject.id) {
            return {
              ...project,
              name: name,
              description: description,
              skills: skills
            };
          }
          return project;
        });
        setProjects(updatedProjects);
        setSelectedProject(null);
        setName('');
        setDescription('');
        setSkills([]);
        setSkill('');
      })
      .catch(error => console.error(error));

  };

  const projectList = projects.map(project => {
    return (
      <div key={project.id} className="project-list-item">

        <div className="card-body">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <ul className="skills-list">
            {project.skills && project.skills.map(skill =>(
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <div>
            <button className={classNames('button', 'delete-button')} onClick={(event) => handleDelete(event, project.id)}>Delete</button>
            <button className={classNames('button', 'update-button')} onClick={() => setSelectedProject(project)}>Update</button>
          </div>
        </div>
      </div>
    );
  });

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSkillChange = (event) => {
    setSkill(event.target.value);
  };

  const handleAddSkill = (event) => {
    event.preventDefault();
    if (skill.trim() === '') {
      return;
    }
    if (skills.length >= 10) {
      alert('You cannot add more than 10 skills.');
      return;
    }
    setSkills([...skills, skill.trim()]);
    setSkill('');
  };

  const handleSubmit =(event) => {
    event.preventDefault();
    fetch('https://my-portfolio-app-api.onrender.com/projects/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description,
        skills
      })
    })
    .then(response => response.json())
    .then(data => {
    console.log(data);
    const newProject = {
    id: data.id,
    name: name,
    description: description,
    skills: skills
    };
    setProjects([...projects, newProject]);
    setName('');
    setDescription('');
    setSkills([]);
    setSkill('');
    })
    .catch(error => console.error(error));
    };
    return (
      <div>
        <div className="add-project">
          <h2>Add a Project</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='namr'>Project Title:</label>
              <input type="text" id="name" value={name} onChange={handleNameChange} />
            </div>
            <div>
              <label htmlFor='description'>Project Description</label>
              <textarea id="description" value={description} onChange={handleDescriptionChange}></textarea>
            </div>
            <div>
            <label htmlFor="skill">Skills:</label>
            <input type="text" id="skill" value={skill} onChange={handleSkillChange} />
            <button onClick={handleAddSkill}>Add Skill</button>
            </div>
            <ul className="skills-list">
            {skills.map((skill, index) => (
                 <li key={index}>
                     {skill} <button onClick={() => setSkills(skills.filter((_, i) => i !== index))}>x</button>
              </li>
             ))}
            </ul>

            <button type='submit'>Add Project</button>
          </form>
          <h2>Projects</h2>
          {projectList} 
          {selectedProject &&(<form onSubmit={handleUpdate}>
            <h2>Update Project</h2>
            <div>
            <label htmlFor="update-name">Project Name:</label>
            <input type="text" id="update-name" value={name} onChange={handleNameChange} />
            </div>
            <div>
            <label htmlFor="update-skill">Skills:</label>
            <input type="text" id="update-skill" value={skill} onChange={handleSkillChange} />
            <button onClick={handleAddSkill}>Add Skill</button>
            </div>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index}>
                  {skill} 
            <button onClick={() => setSkills(skills.filter((_, i) => i !== index))}>
              X
              </button>
        </li>
        ))}
        </ul>
            <button type="submit">Update Project</button>
            <button onClick={() => setSelectedProject(null)}>Cancel</button>
          </form>
          )}
        </div>
      </div>
    )
}

export default AddProject;