import 'dotenv/config'

export async function AI(patientName, patientAge, medicalDetails, bloodType, bloodGroup) {
    const apiKey = process.env.SECRET_KEY;
    // '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'; // Replace with your ChatGPT API key
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    // Prepare the request payload
    const payload = {
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system', content: `You are a first aid agent providing assistance to someone in need.${medicalDetails}.write in a paragraph`
            },
            // { role: 'user', content: `${medicalDetails}, write a paragraph giving a first aid recommendation in full details, don't let the user know you are an AI.` },
        ],
        max_tokens: 200,
        temperature: 0.7,
        n: 1,
        stop: '\n',
    };

    // Make the API request to ChatGPT API
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify(payload),
        });

        // Parse the response
        const data = await response.json();
        console.log(data);
        const generatedSentence = data.choices[0].message.content;
        return generatedSentence;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
