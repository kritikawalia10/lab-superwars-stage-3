const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
  

    // Instead of forloop use Map method
    // Code here

    let detail = [];

    players.map((play, index) =>{
        var player = {
            name : play,
            strength : getRandomStrength(),
            image : getImage(index),
            type : getType(index)
        };
        detail.push(player);
    })
    return detail;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

const getType = (number) =>{
    if(number % 2 === 0){
        return 'hero';
    }else{
        return 'villain';
    }
}

const getImage = (number) =>{
    var imgNum = number + 1;
    return `images/super-${imgNum}.png`;
}

// Build player template
const buildPlayers= (players, type) => {
    let value = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    value = players.filter(player=>player.type == type).map((player)=> player = `<div class="player">
    <img src="${player.image}" alt="">
    <div class="name">${player.name}</div>
    <div class="strength">${player.strength}</div></div>`)

    .join('');
    return value;
}

// Display players in HTML
const show = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    show(initPlayers(PLAYERS));
}