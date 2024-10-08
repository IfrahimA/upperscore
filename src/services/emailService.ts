import axios from 'axios';

const API_URL = 'http://localhost:3001/newsletter';

export const sendEmail = async (email: string) => {
	try {
		const response = await axios.post(API_URL, { email });
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
