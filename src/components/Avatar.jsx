function Avatar({ image, firstName, lastName }) {
	return (
		<div className="avatar">
			<img src={image} alt={`${firstName} ${lastName}`} />
			<p>
				{firstName} {lastName}
			</p>
		</div>
	);
}

export default Avatar;
