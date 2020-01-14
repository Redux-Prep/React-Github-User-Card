import React from 'react';
import './card.css'

const Card = (props) => {
    console.log(props.user)
	return (
		<div className='card'>
			<h3>Github User Card: {props.user.login}</h3>
            <p>ID:{props.user.id}</p>
            <p>Public Repos: {props.user.public_repos}</p>
            <img className='avatar'src={props.user.avatar_url} alt='Avatar' />
            <p>Following: {props.user.following}</p>
            <p>Followers: {props.user.followers}</p>
            <p>Location: {props.user.location}</p>
            <p>Company: {props.user.company}</p>
    <a href={props.user.html_url}>{props.user.html_url}</a>
		</div>
	);
};
export default Card;
