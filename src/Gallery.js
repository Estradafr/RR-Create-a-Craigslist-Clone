import React from 'react';
import Posting from './Posting';

function Gallery(props) {
	return (
		<div className="gallery">
			{props.postings.map((p, i) => {
				return (
					<Posting
						posting={p}
						key={i}
					/>
				);
			})}
		</div>
	);
}

export default Gallery;
