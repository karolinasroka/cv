import React from 'react';
import './style.scss';

export const Skills = ({ skills, heading }) => {
	return (
		<section className="skills">
			<h2>{heading}</h2>
			<ul>
				{skills.map((skill, i) => <li key={i}>{skill}</li>)}
			</ul>
		</section>
	);
};