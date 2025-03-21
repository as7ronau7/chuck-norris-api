const loadingJoke = document.getElementById('loadingJoke');
const loadJokeBtn = document.getElementById('loadJokeBtn');

const getChuckNorrisFact = async () => {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random', {
            headers: {
                Accept: "application/json"
            }
        });
        const json = await response.json();
        loadingJoke.textContent = json.value;
    } catch(error) {
        console.log(error)
    }    
}

loadJokeBtn.addEventListener('click', getChuckNorrisFact)