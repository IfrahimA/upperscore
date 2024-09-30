/* 
	function: creates a  Navbar component
	returns: component a Navbar component
*/

const Navbar = () => {
	return (
		<nav className='sticky top-0 flex justify-around items-center pt-8'>
			<div className='title text-2xl'>
				<strong>A+</strong> Parh
			</div>
			<ul className='flex gap-12'>
				<li>
					<a href='#home'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#services'>Services</a>
				</li>
				<li>
					<a href='#newsletter'>Newsletter</a>
				</li>
			</ul>
			<div className="flex gap-8">
				<button className='outline p-2 rounded-md hover:bg-black hover:text-white transition-all'>
					Log in
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
