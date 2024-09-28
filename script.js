const keywords = ['cloud', 'AWS', 'Azure', 'GCP', 'Google', 'AI', 'ML', 'data', 'server', 'DevOps', 'network', 'storage'];

fetch('https://v2.jokeapi.dev/joke/Programming')
    .then(response => response.json())
    .then(data => {
        let jokeText = "";

        if (data.type === 'single') {
            jokeText = data.joke;
        } else if (data.type === 'twopart') {
            jokeText = `${data.setup} - ${data.delivery}`;
        }

        if (keywords.some(keyword => jokeText.toLowerCase().includes(keyword.toLowerCase()))) {
            document.getElementById('joke').innerText = jokeText;
        } else {
            document.getElementById('joke').innerText = "No tech related joke found. Here's a random programming joke instead:";
            document.getElementById('joke').innerText += `\n${jokeText}`;
        }
    })
    .catch(err => console.error('Error fetching joke:', err));