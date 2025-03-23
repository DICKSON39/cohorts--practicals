// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll("button").forEach(function(button) {
//         button.onclick = function() {
//             document.querySelector('#hello').style.color=button.dataset.color
//         }
//     })
//   });


  document.addEventListener("DOMContentLoaded", ()  =>{
    document.querySelectorAll('button').forEach(button => {
        button.onclick = () => {
            document.querySelector('#hello').style.color=button.dataset.color
        }
    })
  })

  
// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('button').addEventListener('click', count)
// })



// //Script for the colors.html;
// document.addEventListener("DOMContentLoaded", function() {
//     //Change the font color to red
//    document.querySelector("#red").onclick = function () {
//      document.querySelector("#hello").style.color= 'red'
//    }

//    //Change the font color to blue 
//    document.querySelector("#blue").onclick = function() {
//     document.querySelector("#hello").style.color = 'blue'
//    }

//    //Change the font color to green

//    document.querySelector("#green").onclick = function () {
//     document.querySelector('#hello').style.color = 'green'
//    }
// })
