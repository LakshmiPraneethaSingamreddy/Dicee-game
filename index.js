var ran1=Math.random()*6;
ran1=Math.floor(ran1)+1;

var rndimg="dice"+ran1+".png";
var rndimgsrc="images/"+rndimg;
document.querySelector(".img1").setAttribute("src",rndimgsrc);
var ran2=Math.random()*6;
ran2=Math.floor(ran2)+1;

var rndimg2="dice"+ran2+".png";
var rndimgsrc2="images/"+rndimg2;
document.querySelector(".img2").setAttribute("src",rndimgsrc2);

if(ran1>ran2)
{
    document.querySelector("h1").textContent="🚩Player 1 Wins";
}
else if(ran1<ran2)
{
    document.querySelector("h1").textContent="Player 2 Wins🚩";
}
else {
    document.querySelector("h1").textContent="Draw!";
}