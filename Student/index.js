console.log("Run")
var stud=[];


const saveData= () =>{
var x1={
Name:document.getElementById('name1').value,
Address:document.getElementById('address1').value,
age:document.getElementById('age1').value,
contact:document.getElementById('contact1').value
}
stud.push(x1);
getUser();
console.log(stud[0].Name);

}
const getUser=()=>{
    let data ="";
    for(let i=0;i<stud.length;i++){
        data +=`<div class="card " style="width: fit-content;">
        <div class="card-body p-2">
          <h5 class="card-title text-bg-dark text-center">Student -${i+1}</h5>
          <br>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name : ${stud[i].name}</label>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Address :${stud[i].Address}</label>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Age :${stud[i].age}</label>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Contact :${stud[i].contact}</label>
          </div>
          <button class="btn btn-danger w-25 " style="border-radius: 50px; "onclick="deleteUser(${i})">X</button>
        </div>
        <br>
      </div>`
    }
    document.getElementById('display').innerHTML=data
}

const deleteUser =(id)=>{
    stud.splice(id,1);
    getUser()
}
