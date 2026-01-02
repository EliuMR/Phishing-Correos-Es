import { URL_DETECCION_PHISHING_CORREO_ES } from "../constants/urls";

async function postData(data = {}) {
    // Default options for the request
    const options = {
        method: 'POST', // Specify the method as POST
        headers: {
        'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data) // Convert the data object to a JSON string
    };

    try {
        const response = await fetch(URL_DETECCION_PHISHING_CORREO_ES, options); // Make the fetch call

        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); 
        return result;

    } catch (error) {
        console.error('Error during fetch POST request:', error);
        throw error; 
    }
};

export default postData;