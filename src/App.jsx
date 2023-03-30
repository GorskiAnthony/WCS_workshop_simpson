import Avatar from "./components/Avatar";
import "./App.css";

function App() {
	const familySimpson = [
		{
			id: 1,
			image: "https://www.stickees.com/files/cartoon/the-simpsons/2246-homer-simpson-donut-2.png",
			firstName: "Homer",
			lastName: "Simpson",
		},
		{
			id: 2,
			image: "https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
			firstName: "Marge",
			lastName: "Simpson",
		},
		{
			id: 3,
			image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
			firstName: "Bart",
			lastName: "Simpson",
		},
		{
			id: 4,
			image: "https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png",
			firstName: "Lisa",
			lastName: "Simpson",
		},
		{
			id: 5,
			image: "https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
			firstName: "Maggie",
			lastName: "Simpson",
		},
	];

	return (
		<div className="App">
			{/* {familySimpson.map((member) => (
				<Avatar
					key={member.id}
					image={member.image}
					firstName={member.firstName}
					lastName={member.lastName}
				/>
			))} */}
			{familySimpson.map((member) => (
				<Avatar key={member.id} {...member} />
			))}
		</div>
	);
}

export default App;
