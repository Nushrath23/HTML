console.log("run")
function sameName(){
    const first=document.getElementById('Name-1').value 
    const last=document.getElementById('Name-2').value 

    if(first==last)
    {
        document.getElementById('display-1').innerText="Success!! :)"
    }
    else{
        document.getElementById('display-1').innerText="Fail.... :("        
    }
};
function compNum(){
    const n1=document.getElementById('num-1').value 
    const n2=document.getElementById('num-2').value 

    if(n1>n2){
        document.getElementById('display-2').innerText="First Number"
    }
    else if(n2>n1){
        document.getElementById('display-2').innerText="Second Number"
    }
    else{
        document.getElementById('display-2').innerText="Same Number"
    }
}

function kup(){
    const num = document.getElementById('n1').value 
    console.log(num);
    let sum = 0
    for(let i=0;i<num.length;i++)
    {
        sum= sum +parseInt(num[i])
    }
    document.getElementById('display-3').innerText=sum
    
}

function grade(){
    const m=document.getElementById('mrkstd').value;
   let g=""
    if(m>=75){
        g="A"
    }
    else if(m>=65){
        g="B"
    }
    else if(m>=45){
        g="C"
    }
    else if(m>=35){
        g="S"
    }
    else
    {
        g="Failed"
        document.getElementById('display-g').style.color="Red"
    }
    document.getElementById('display-g').innerHTML="Grade: "+g;
}


function position(){
    const sname=document.getElementById('shrtname').value
    let pos=""
    switch(sname){
        case "intern":
            pos="Intern Software Engineer"
            break;
        case "ase":
            pos="Associate Software Engineer"
            break;
        case "se":
            pos="Software Engineer"
            break;
        case "sse":
            pos="Senior Software Engineer"
            break;
        case "atl":
            pos="Assistant Tech Lead"
            break;
        case "tl":
            pos="Tech Lead"
            break;
        default:
            pos="Error key word"
            break;
    }
    document.getElementById('display-p').innerHTML=pos;
}
const arr1=[];
function addarr(){
    const arrip=document.getElementById('arrayin').value
    arr1.push(arrip)
    document.getElementById('arrayin').value=""
    
}
function printarr(){
    document.getElementById('display-arr').innerHTML=arr1;
}

function Authen(){
    const un="Nush";
    const pw1="123";
    const unui=(document.getElementById('txt').value).toUpperCase();
    const pwui=(document.getElementById('pw').value).toUpperCase();
    if ((un.toUpperCase()) == unui)
    {
        if((pw1.toUpperCase())== pwui)
        {
            document.getElementById('display-pw').style.color="gREEN"
            document.getElementById('display-pw').innerHTML="Login Success";

        }
        else
        {
            document.getElementById('display-pw').style.color="RED"
            document.getElementById('display-pw').innerHTML="Wrong password!";
        }
    }
    else
    {
        document.getElementById('display-pw').style.color="RED"
        document.getElementById('display-pw').innerHTML="Wrong Username!";
    }
    
}
const Arraynew=[]
function genArray(){
    for(let i=0;i<50;i++){
        Arraynew[i]=Math.floor(Math.random()*100);
    }
    console.log(Arraynew.length)
}
function disArray(){
    
    document.getElementById('display-arrd').innerHTML= Arraynew
}
function disDiv(){
    const newARR=[]
    const d=parseInt(document.getElementById('divident').value)
    for(let i=0;i<50;i++){
        const j=Arraynew[i];
        if(j %d==0)
        { 
            newARR.push(Arraynew[i]);
        }
    }
    document.getElementById('display-aardiv').innerHTML= newARR
    console.log(newARR.length)
    
}