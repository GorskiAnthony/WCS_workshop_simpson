import Avatar from "./components/Avatar";

function App() {
	const bart = {
		image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
		firstName: "Bart",
		lastName: "Simpson",
	};

	const homer = {
		image: "https://www.stickees.com/files/cartoon/the-simpsons/2246-homer-simpson-donut-2.png",
		firstName: "Homer",
		lastName: "Simpson",
	};
	return (
		<div className="App">
			<Avatar
				image={bart.image}
				firstName={bart.firstName}
				lastName={bart.lastName}
			/>
			<Avatar
				image={homer.image}
				firstName={homer.firstName}
				lastName={homer.lastName}
			/>
		</div>
	);
}

export default App;
