// let IuputData = document.getElementById('search')
// // console.log(IuputData);
// let BtnData = document.getElementById('inputBtn')
// let TextBtn = document.getElementById('testbtn')

// BtnData.addEventListener('click', () => {
//     // console.log(IuputData.value);

//     TextBtn.innerHTML +=
//         `        <h1 class="text-[white] pl-[50px] pt-[20px]">${IuputData.value}</h1>`
//     IuputData.value = ""
// })

// let IuputData = document.getElementById('search');
// // let BtnData = document.getElementById('inputBtn');
// // let TextBtn = document.getElementById('testbtn');

// // BtnData.addEventListener('click', () => {
// //     let value = IuputData.value;
// //     if (!isNaN(value) && value !== "") {
// //         TextBtn.innerHTML += `<h1 class="text-[white] pl-[50px] pt-[20px]">${value}</h1>`;
// //         IuputData.value = "";
// //     }
// //     else {
// //         alert("Iltimos, raqam kiriting!");
// //     }
// // });
var InputData = document.getElementById('search');
var BtnData = document.getElementById('inputBtn2');
var TextBtn = document.getElementById('testbtn');
var InputData1 = document.getElementById('search2');
var BtnData1 = document.getElementById('inputBtn2');
BtnData.addEventListener('click', () => {
    var value1 = parseFloat(InputData.value);
    var value2 = parseFloat(InputData1.value);
    var Result = value1 * value2;
    TextBtn.innerHTML = ``;

    if (Result % 2 === 0) {
        TextBtn.innerHTML += `<h1 class="text-[white] pl-[50px] pt-[20px]">Juft</h1>`;

    }
    else {
        TextBtn.innerHTML += `<h1 class="text-[white] pl-[50px] pt-[20px]">Toq</h1>`;

    }
});
