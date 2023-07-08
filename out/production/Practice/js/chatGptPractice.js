import * as keys from './keys.js';
export async function sendOpenAIRequest(message) {
    let openAIResponse = null;
    try {
        const apiUrl = 'https://api.openai.com/v1/completions';
        const requestBody = JSON.stringify({
            prompt: message,
            max_tokens: 30,
            model: 'text-davinci-003'
        });

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorizationHeader': "Bearer " + keys.openApiKey,
            },
            body: requestBody
        });

        openAIResponse = await response.json();
        console.log(openAIResponse);
    } catch (error) {
        console.error(error);
    }
    return openAIResponse;
}

await sendOpenAIRequest("hello robot");
