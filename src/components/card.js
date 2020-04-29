import React from 'react';
import 'tachyons';
const Card = ({ name,email,id}) => {
		return (
		<div className='tc bg-light-green dib br3 grow ma2 bw2 shadow-5'>
		 <img alt='robo' src={`https://robohash.org/${id}?200x200`} />
		  <div>
		   <h2> {name} </h2>
		   <p> {email} </p>
          </div>
		</div>

		);
}

export default Card;