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
