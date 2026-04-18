import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies Used:</strong> {project.technologies}</p>
            {project.github && <p><a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repo</a></p>}
            {project.demo && <p><a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a></p>}
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            name: 'Project One',
            description: 'This is a sample project description for Project One.',
            technologies: 'React, Node.js',
            github: 'https://github.com/Adarsh013/project-one',
            demo: 'https://project-one-demo.com'
        },
        {
            name: 'Project Two',
            description: 'This is a sample project description for Project Two.',
            technologies: 'Angular, Firebase',
            github: 'https://github.com/Adarsh013/project-two',
        },
        {
            name: 'Project Three',
            description: 'This is a sample project description for Project Three.',
            technologies: 'Vue, Express',
            github: 'https://github.com/Adarsh013/project-three',
            demo: 'https://project-three-demo.com'
        }
    ];

    return (
        <div className="projects">
            <h1>Projects</h1>
            {projects.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
    );
};

export default Projects;
