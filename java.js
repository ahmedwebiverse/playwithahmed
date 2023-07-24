let music=new Audio("music.mp3")
let turn_sound = new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let turn = "X"
let gameover2=false
const changeturn=()=>{
    if (turn==="X"){
        return "O"
    }
    else if (turn==="O")
    {
        return "X"
        
    }
}

const checkwin = () => {
    let boxtext=document.getElementsByClassName("box_text")
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
win.forEach(e=>{
    if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&   (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "" )){
document.querySelector('.info').innerText="Player '"+boxtext[e[0]].innerText+ "' Won";
gameover2=true;
gameover.play();
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px" }
});
}


let boxes = document.getElementsByClassName("box");
music.play();
Array.from(boxes).forEach(element =>{

    let boxtext=element.querySelector(".box_text ");
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText=turn;
            turn=changeturn();
            element.classList.add(turn === 'X' ? 'x-class' : 'o-class');
            turn_sound.play();
            checkwin();
            if(!gameover2)
            {
document.getElementsByClassName("info")[0].innerText= "Turn For " + turn; }      }
    })
})

reset.addEventListener('click',()=>{
     let boxtext=document.querySelectorAll(".box_text");
     Array.from(boxtext).forEach(element=>{
        element.innerText=""
     });
     turn="X";
    gameover2=false
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
    document.getElementsByClassName("info")[0].innerText= "Turn For " + turn;
    })