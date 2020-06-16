import React from 'react';
import './style.scss';
import img from './img.jpg';

export const Info = ({ info: { name, mail, phone, linkedin } }) => {
	return (
		<section className="info">
			<img src={img} alt={name}/>
			<ul>
				<li><a href={'mailto:' + mail}>{mail}</a></li>
				<li><a href={'tel:' + phone}>{phone}</a></li>
				<li><a href={linkedin}>{linkedin}</a></li>
			</ul>
		</section>
	);
};