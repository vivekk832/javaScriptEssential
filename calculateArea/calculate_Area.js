let length;
let width;

function calculateArea(){
    length=parseFloat(document.getElementById('length').value);
    width=parseFloat(document.getElementById('width').value);

    let area = length * width;
    // console.log("Area:", area); 

    document.getElementById('result').innerText = `The area of rectange is ${area}`;

}

