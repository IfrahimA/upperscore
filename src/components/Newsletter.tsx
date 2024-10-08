import '../css/newsletter.css';
import { useState } from 'react';
import { sendEmail } from '../services/emailService';

const Newsletter = () => {
	const [email, setEmail] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await sendEmail(email);
	};

	return (
		<div className='flex justify-center p-24 gap-8'>
			<div className='left-panel flex items-center'>
				Subscribe to our Newsletter
			</div>
			<form className='flex gap-4' onSubmit={handleSubmit}>
				<input
					type='text'
					className='outline pl-2'
					placeholder='name@mail.com'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button className='outline p-2'>Contact Now</button>
			</form>
		</div>
	);
};

export default Newsletter;
