console.log("It works!"); 

//One button to increment
const increase = document.getElementById('btn-increment'); 
//One button to decrease
const decrease = document.getElementById('btn-decrease'); 
const counter = document.getElementById('counter');

let counterValue = 0; 

const changeCounter = (counterChange) => {
    counterValue += counterChange;
    console.log('Changing', counterValue);
    let movie;  

    fetch('https://www.izettle.com/starwars/films/' + counterValue)
        .then((response) => {
            console.log("Response: ", response); 
            return response.json()
        })
        .then((json) => {
            movie = json
            console.log("Movie: ", movie);
            if (!movie.fields) {
                counter.textContent = 'This movie does not exist'; 
            } else {
                counter.textContent = movie.fields.title; 
            }
        })
        .catch(function(err) {
            console.log('API error: ', err);
    })
}

increase.addEventListener('click', () => { changeCounter(1) }); 
decrease.addEventListener('click', () => { changeCounter(-1) }); 

//Display different movies based on counter value (show title and id)
//Incase no movie, show "there is no movie"
