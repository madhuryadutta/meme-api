// export async function fetchRandomMeme() {
//     const response = await fetch('http://127.0.0.1:8000/api/random');
//     if (!response.ok) {
//         throw new Error('Failed to fetch meme');
//     }
//     return response.json();
// }

// memeService.js

export async function fetchRandomMeme() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/random');

        if (!response.ok) {
            throw new Error('Failed to fetch meme');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching meme:', error);
        throw error;  // Rethrow the error so it can be caught elsewhere
    }
}
