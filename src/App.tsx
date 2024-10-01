import Carousel from './components/Carousel';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Services from './components/Services';
import Welcome from './components/Welcome';
import Goals from './components/Goals';

function App() {
	return (
		<>
			<Navbar />
			<Welcome />
			<Carousel />
			<Services />
			<Goals />
			<Footer />
		</>
	);
}

export default App;
