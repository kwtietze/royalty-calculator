// spotify calculator

function spotifyCalculate() {
    let rate = 0.0033
    let streams = document.getElementById('spotify-streams').value
    let percentageField = document.getElementById('spotify-percentage')
    let percentage = document.getElementById('spotify-percentage').value
    let total = document.getElementById('spotify-total')

    total.innerText = '$' + (rate*streams*(percentage/100)).toFixed(2)
}


// apple music calculator

function appleCalculate() {
    let rate = 0.01
    let streams = document.getElementById('apple-streams').value
    let percentage = document.getElementById('apple-percentage').value
    let total = document.getElementById('apple-total')

    total.innerText = '$' + (rate*streams*(percentage/100)).toFixed(2)
}


// tidal calculator

function tidalCalculate() {
    let rate = 0.013
    let streams = document.getElementById('tidal-streams').value
    let percentage = document.getElementById('tidal-percentage').value
    let total = document.getElementById('tidal-total')

    total.innerText = '$' + (rate*streams*(percentage/100)).toFixed(2)
}



// nav selected styles

const spotifyLink = document.querySelector('.spotify-link')
const appleLink = document.querySelector('.apple-link')
const tidalLink = document.querySelector('.tidal-link')

function tidalSelected() {
    spotifyLink.classList.remove('nav-selected')
    appleLink.classList.remove('nav-selected')
    tidalLink.classList.add('nav-selected')
}

function appleSelected() {
    spotifyLink.classList.remove('nav-selected')
    appleLink.classList.add('nav-selected')
    tidalLink.classList.remove('nav-selected')
}

function spotifySelected() {
    spotifyLink.classList.add('nav-selected')
    appleLink.classList.remove('nav-selected')
    tidalLink.classList.remove('nav-selected')
}