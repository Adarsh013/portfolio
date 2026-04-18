import React from 'react';
import './Skills.css';

const skillsData = {
    "Programming Languages": ["JavaScript", "Python", "Java", "C++"],
    "Web Technologies": ["React", "Node.js", "HTML", "CSS"],
    "Tools & Databases": ["Git", "MongoDB", "MySQL", "Docker"],
    "Soft Skills": ["Communication", "Problem Solving", "Teamwork", "Adaptability"]
};

const Skills = () => {
    return (
        <div className="skills-container">
            <h1>My Skills</h1>
            {Object.keys(skillsData).map(category => (
                <div key={category} className="skill-category">
                    <h2>{category}</h2>
                    <div className="skill-cards">
                        {skillsData[category].map(skill => (
                            <div key={skill} className="skill-card">
                                <h3>{skill}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;