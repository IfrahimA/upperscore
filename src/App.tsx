import Carousel from './components/Carousel';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Services from './components/Services';
import Welcome from './components/Welcome';
import Newsletter from './components/Newsletter';

function App() {
	return (
		<>
			<Navbar />
			<Welcome />
			<Carousel />
			<Services />
			<Newsletter />
			<Footer />
		</>
	);
}

export default App;
