import React from 'react';
import './style.scss';

export const Experience = ({ list, heading }) => {
	return (
		<section className="experience">
			<h2>{heading}</h2>
			{list.map(({ date, title, description }, i) => 
			<article>
				<div className="description-side">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				<div className="date">
					<p>{date}</p>
				</div>
			</article>)}
		</section>
	);
};