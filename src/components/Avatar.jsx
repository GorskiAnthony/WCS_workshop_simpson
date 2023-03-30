// Etape 1, j'importe le useState
import { useState } from "react";

function Avatar({ image, firstName, lastName }) {
	// Etape 2, j'utilise le useState
	const [donut, setDonut] = useState(0);

	// Etape 3, je créer une fonction qui ajoute un donut.
	const handleClick = () => {
		setDonut(donut + 1);
	};

	return (
		<div className="avatar">
			<img src={image} alt={`${firstName} ${lastName}`} />
			<p>
				{firstName} {lastName}
			</p>
			{/**
			 * À chaque fois, que mon utilisateur clique sur le bouton
			 * j'éxécute la fonction `handleClick`
			 */}
			<button onClick={handleClick}>🍩 {donut}</button>
		</div>
	);
}

export default Avatar;
