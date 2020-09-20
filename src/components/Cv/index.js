import React from 'react';
import { Experience } from '../Experience';
import { Skills } from '../Skills';
import { Info } from '../Info';
import './style.scss';


export const Cv = ({ data: { experience, work, education, skills, info, languages } }) => {
	return (
		<main>
			<div className="side-content">
				<Info info={info} />
				<Skills heading='Skills' skills={skills} />
				<Skills heading='Languages' skills={languages} />
			</div>
			<div className="main-content">
				<h1 className='name'>{info.name}</h1>
				<p className='sub-text'>{info.subText}</p>
				<Experience heading='Work Experience' list={work} />
				<Experience heading='Experience' list={experience} />
				<Experience heading='Formal Education' list={education} />
			</div>
		</main>
	);
};