import Avatar from "./components/Avatar";

function App() {
	return (
		<div className="App">
			<Avatar
				image="https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png"
				firstName="Bart"
				lastName="Simpson"
			/>
			<Avatar
				image="https://www.stickees.com/files/cartoon/the-simpsons/2246-homer-simpson-donut-2.png"
				firstName="Homer"
				lastName="Simpson"
			/>
		</div>
	);
}

export default App;
