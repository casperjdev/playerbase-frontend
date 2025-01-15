import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const fetchPlayerCounts = async () => {
	try {
		const response = await axios.get(`${API_URL}/player-counts`);
		return response.data;
	} catch (error) {
		console.error('Error fetching player counts:', error.message);
		return [];
	}
};
