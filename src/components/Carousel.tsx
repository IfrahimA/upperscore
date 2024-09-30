/*
    function: generates a carosel component
    returns: carosel component
*/

import '../css/carosel.css';

const Carousel = () => {
	return (
		<>
			<div className='flex justify-center items-center pt-5 gap-8'>
				<div>
					<div className='text-3xl font-bold'>Who are we?</div>
					<div>Lorem ipsum dolor sit amet.</div>
				</div>
				<div className='flex gap-8'>
					<div>Icon 1</div>
					<div>Icon 2</div>
					<div>Icon 3</div>
				</div>
			</div>
		</>
	);
};

export default Carousel;
