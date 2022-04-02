

function createTable(fname,lname,address,pincode,gender,food,state,country){
    let tbody = document.getElementById("tbody")
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    td1.innerHTML = fname;
    td2.innerHTML = lname;
    td3.innerHTML = address;
    td4.innerHTML = pincode;
    td5.innerHTML = gender;
    td6.innerHTML = food;
    td7.innerHTML = state;
    td8.innerHTML = country;
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)
    tr.append(td5)
    tr.append(td6)
    tr.append(td7)
    tr.append(td8)
    tbody.append(tr)
}


var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var address = document.getElementById("address");
var pinCode = document.getElementById("pincode");
var gender = document.getElementsByName("gender");
var food = document.getElementsByName('food');
var state = document.getElementById("state");
var country = document.getElementById("country"); 




document.querySelector('button').addEventListener('click',(e) => {
    e.preventDefault();
    let genderSel = "";
    for(let i=0; i<gender.length;i++){
        if(gender[i].checked) genderSel = gender[i].value
    }


    let favFood = []
    
    for(let i=0;i<food.length;i++){
        if(food[i].checked){
            favFood.push(food[i].value)
        }
    }
    // if(favFood.length < 2) alert("Please select atleast two food")


    console.log(fName.value)
    console.log(lName.value)
    console.log(address.value)
    console.log(pinCode.value)
    console.log(genderSel)
    console.log(favFood.join(",")),
    console.log(state.value),
    console.log(country.value);
})