import React from 'react';
import './style.scss';
import img from './img.jpg';

export const Info = ({ info: { name, subText, mail, phone, linkedin, github } }) => {
	return (
		<section className="info">
			<img src={img} alt={name} />
			<ul>
				<li className="name">{name}</li>
				<li className="sub-text">{subText}</li>
				<li><i class="far fa-envelope"></i><a href={'mailto:' + mail}>{mail}</a></li>
				<li><i class="fas fa-phone"></i><a href={'tel:' + phone}>{phone}</a></li>
				<li><i class="fab fa-linkedin"></i><a href={'https://linkedin.com/in/' + linkedin}>{linkedin}</a></li>
				<li><i class="fab fa-github"></i><a href={'https://github.com/' + github}>{github}</a></li>
			</ul>
		</section>
	);
};