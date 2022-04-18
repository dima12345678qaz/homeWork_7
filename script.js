

//task1
// let testWindow=window.open('  ','  ','width=300, height=300')
// setTimeout(function(){
//   testWindow.resizeBy(width=500, height=500)
//   setTimeout(function(){
//     testWindow.moveTo(200,200)
//     setTimeout(function(){
//       testWindow.close()
//     },2000);
//   },2000);
  
// },2000);

//tsk2

// function btn() {
//   const text=document.getElementById('text')
//   text.style.color='red';
//   text.style.fontWeight='bold';
//   text.style.fontFamily='Comic Sans MS'
//   text.style.fontSize='20px'
  
// }

// document.querySelector('button').addEventListener('click',function() {
//   btn()
// })


//task3

// document.getElementById('btn1').addEventListener('click',function(){
//   document.body.style.backgroundColor='blue';
// })

// document.getElementById('btn2').addEventListener('dblclick',function(){
//   document.body.style.backgroundColor='orange';
// })


// document.getElementById('btn3').addEventListener('mousedown',function(){
//   document.body.style.backgroundColor='brown';
// })



// document.getElementById('btn3').addEventListener('mouseup',function(){
//   document.body.style.backgroundColor='white';
// })



// document.getElementById('link').addEventListener('mouseenter',function(){
//   document.body.style.backgroundColor='yellow';
// })

// document.getElementById('link').addEventListener('mouseleave',function(){
//   document.body.style.backgroundColor='white';
// })

// task4
// document.getElementById('delete').addEventListener('click',function() {
// 	const select=document.getElementById('select');
// 	let option=select.querySelector('option:checked');
// 	if (!option) {
// 		option=select.querySelector('option');
// 		option.setAttribute('selected','selected');
// 		option.setAttribute('checked','checked');
// 	}
// 	document.querySelector('#select option:checked').remove()
// });






//task5
// let buttonelement=document.getElementById('live');
// buttonelement.addEventListener('click',function() {
// 	buttonelement.innerHTML='I was pressed';
// });

// buttonelement.addEventListener('mouseover',function() {
// 	buttonelement.innerHTML='Mouse on me';
// })

// buttonelement.addEventListener('mouseout', function() {
// 	buttonelement.innerHTML='Mouse is not on me';
// });






//task6
// const heightOutput = document.getElementById('height');
// const widthOutput = document.getElementById('width');

// function reportWindowSize() {
//   heightOutput.textContent = window.innerHeight;
//   widthOutput.textContent = window.innerWidth;
// }
// window.addEventListener('resize', reportWindowSize);



//task7
// let p = document.getElementsByTagName('p')[0];

// function setValues() {
// p.innerHTML = "";
// const value = document.getElementById('country').value;
// p.innerHTML += value;
//   switch (value) {
//     case "ger": {
//      addOptions(["Berlin", "Hamburg", "Munich"])
//       break;
//     }
//     case "usa": {
//      addOptions(["Washington", "New-York", "Miami"])
//       break;
//     }
//     case "ukr": {
//      addOptions(["Kiyiv", "Uman", "Dnipro"])
//       break;
//     }
//   }
// }
// setValues();

// function addOptions(options) {
//  const citiesSelect = document.getElementById('cities');
//   citiesSelect.innerHTML = "";
//   for (let i = 0; i < options.length; i++) {
  
//     let opt = document.createElement('option');
//     opt.value = options[i];
//     opt.innerHTML = options[i];
    
//     citiesSelect.appendChild(opt);
//  }
// }