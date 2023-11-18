import { BASE_URL } from "../config";

export const fetchLetter = async (checkboxNumber: number): Promise<string | null> => {
    try {
        const response = await fetch(`${BASE_URL}/${checkboxNumber}`);
        if (!response.ok) {
            throw new Error('Error Occurred');
        }
        const data = await response.json();
        return data.letter;
    } catch (error) {
        console.error('Error fetching letter:', error);
        return null;
    }
};
