images = [".//images//dice1.png", 
            ".//images//dice2.png", 
            ".//images//dice3.png", 
            ".//images//dice4.png",
            ".//images//dice5.png",
            ".//images//dice6.png"];

player1 = images[Math.floor(Math.random()*images.length)];
player2 = images[Math.floor(Math.random()*images.length)]

document.querySelector("img.img1").setAttribute("src", player1);
document.querySelector("img.img2").setAttribute("src", player2);

if(player1 < player2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(player1 > player2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}

