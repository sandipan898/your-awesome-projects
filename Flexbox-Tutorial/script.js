const spaceEvenly = document.getElementById('space-evenly');
const spaceCenter = document.getElementById('center');
const spaceBetween = document.getElementById('space-between');
const spaceAround = document.getElementById('space-around');
const alignCenter = document.getElementById('align-center');
const Resize = document.getElementById('resize');
const box1 = document.getElementsByClassName('box1')[0];
const box2 = document.getElementsByClassName('box2')[0];
const box3 = document.getElementsByClassName('box3')[0];
const flexGrow = document.getElementById('flex-grow');
const flexCol = document.getElementById('flex-col');
const main = document.getElementsByClassName('main')[0];
spaceAround.addEventListener('click',()=>{
    main.style.justifyContent='space-around';
    
});
spaceBetween.addEventListener('click',()=>{
    main.style.justifyContent='space-between';
});
flexCol.addEventListener('click',()=>{
    main.style.flexDirection='column';
});
spaceCenter.addEventListener('click',()=>{
    main.style.justifyContent='center';
});
spaceEvenly.addEventListener('click',()=>{
    main.style.justifyContent='space-evenly';
});
alignCenter.addEventListener('click',()=>{
    box1.style.alignSelf='center';
    box3.style.alignSelf='center';
    box2.style.alignSelf='center';
});

flexGrow.addEventListener('click',()=>{
    box1.style.flexGrow = "1";
    box2.style.flexGrow = "1";
    box3.style.flexGrow = "1";
});
Resize.addEventListener('click',()=>{
    box1.style.flexGrow = "0";
    box2.style.flexGrow = "0";

    main.style.flexDirection='row';
    box3.style.flexGrow = "0";
});
