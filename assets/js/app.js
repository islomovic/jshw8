
// let username = "admin"
// let a = prompt("login");
// if (a === username){
//   console.log(a);
// }
// else {
//   alert("bomadi");
// }

// let password = "12345"
// let b = prompt("password")
// if (b === password){
//   console.log(b);
//   alert(" salom ");
// }



// for (aim = 0; aim <= 100; aim++){
//   if (aim % 2 == 0){
//     console.log(aim);;
//   }
// }


// for( aim = 0; aim <= 100; aim++)
//         if(aim%3 == 0)
//         console.log(aim);


  // for( aim = 0; aim <= 100; aim++)
  //       if(aim%5 == 0)
  //       console.log(aim);

  
// let negr;

// do {
//   negr = prompt("enter a number greater than 100?", 100);
// }
// while (negr < 100 && negr);




// let a = +prompt("1 dan 4 gacha tanla");
// switch (a) {
//   case 1:
//     let result = ex1(+prompt("a ni kiriting:"), +prompt("b ni kiriting:"));
//     function ex1(a, b) {
//      if(a > b) {
//        console.log("Kichik son: " + b);
//      } 
//      else if (a < b){
//        console.log("Kichik son: " + a);
//      }
//     }
//     break;
//     case 2:
//       let natija = ex2(+prompt("x ni kiriting: "), +prompt("n ni kiriting: "));
//     function ex2(x, n) {
//       console.log(x**n);
//     }
//       break;
//       case 3:
//         let g = 1000;
//     function ex3() {
//       for(m =1; m <= g; m++){
//         if (m%2 != 0) {
//           console.log(m);
//         }
//       }
//     }
//     ex3();
//     break;
//     case 4:
    
//     break;
//   default:
//     break;
// }

// let a = "-",b ="*";

// for(let i = 0; i<10; i++){
//   a= a+b;
//    console.log(a);
// }


 

// let input = +prompt("nmadur yoz: ");

// for(let i=1; i<=input; i++){
//   output.innerHTML +=i;
// }


//  let input = +prompt("chislo strok")
// for(let i=0; i<input; i++){
//   for(let j =0; j < i; j++){
//     output.innerHTML += "*"

//   }
// output.innerHTML+= "<br>";
// }

// let a = +prompt("1-2-3:?");

// switch (a) {
//   case 1: {
//     let input = document.getElementById("input");
//     let lake= +prompt("сколько строк хочеш:(limited:189)");

//     for (let i = 0; i < lake; i++) {
//       for (let j = 0; j < i; j++) {
//         input.innerHTML += "*";
//       }
//       input.innerHTML += "<br>";
//     }
//     break;
//   }
//   case 2:
//     let output = document.getElementById("output");
//     let input = +prompt("сколько строк хочеш:(limited:189)");

//     for (let i = 0; i < input; i++) {
//       for (let j = 0; j < input; j++) {
//         output.innerHTML += " * ";
//       }
//       output.innerHTML += "<br>";
//     }
//     break;
//     case 3:
//       let fast = document.getElementById("fastfood");
//       let uninput = +prompt("сколько строк хочеш:(limited:189)");
  
//       for (let i = 0; i < uninput; i++) {
//         for (let j = 0; j < i; j++) {
//           fast.innerHTML += "*";
//         }
//         fast.innerHTML += "<br>";
//       }
//       break;
//     default:
//       break;
//   }



// let output = document.getElementById("output")

// let a = prompt("english color names:");


// output.style.backgroundColor = a;

// let output = document.getElementById("output")
// let a = prompt("rang")
//   output.style.bacgroundColor ="red"


// let a ={
//   b:3,
//   c:"ok"

// };


// a.d=22
// delete a.c
// console.log(a);
let num1 = document.querySelector(".num");
let num1_result = document.querySelector(".num__result");
function words(q, w, e, r, t, y, u, i, o, p){
    return {
        q,
        w,
        e,
        r,
        t,
        y,
        u,
        i,
        o,
        p
    }   
}

let ok = words(12, 18, "qwert", true, "yuio", 33, 31, 15, "false");
for(const lok in ok) {
    num1.innerHTML += ok[lok] + ', ';
}
function ko(ok){
    for(const lok in ok) {
        if(!isNaN(ok[lok])) {
            num1_result.innerHTML += ok[lok] * 2 + ', ';
        }
    }
}

ko(ok);