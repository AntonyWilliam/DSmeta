import Header from "./components/Header";
import NotificationButton from "./components/NotificationButton";
import SalesCard from "./components/SalesCard/SalesCard";

function App() {
	return (
		<>
			<Header />
			<main id="main">
				<section id="sales">
					<div className="dsmeta-container">

          <SalesCard/>

          </div>
				</section>
			</main>
		</>
	);
}

export default App;
