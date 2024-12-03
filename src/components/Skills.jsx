import React from 'react';
import html from './images/html.png';
import css from './images/css.png';
import bootstrap from './images/bootstrap.png';
import github from './images/github.png';
import javascript from './images/js.png';
import reacticon from './images/react.png';
import npm from './images/npm.png';
import tailwind from './images/Tailwind CSS.png';
import git from './images/git.png';
import typescript from './images/typescript.png';


function Skills() {
  const skills = [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JavaScript', icon: javascript },
    { name: 'Bootstrap', icon: bootstrap },
    { name: 'Tailwind', icon: tailwind },
    { name: 'ReactJS', icon: reacticon },
    { name: 'TypeScript', icon: typescript }, // Replace with a TypeScript icon if available
    { name: 'Git', icon: git },
    { name: 'NPM', icon: npm },
    { name: 'GitHub', icon: github },
  ];

  return (
    <div className="text-end">
      <ul className="flex flex-col gap-3 ">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-3 justify-end ">
            <span>{skill.name}</span>
            <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;