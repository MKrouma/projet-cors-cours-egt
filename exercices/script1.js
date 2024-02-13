// let motPropose = "Ecole"
// let motTape = prompt("Entrez un mot :")

// if (motPropose === motTape) {
//     motPropose = "Bonsoir"
//     console.log("Valider!")
// } else {
//     console.log("Taper à nouveau le mot")
// }

// function countTrue(arr) {
// 	let numberOfTrue = 0
//     for (let i=0; i<arr.length; i++)
//     {
//         if (arr[i] === true)
//         {
//             numberOfTrue += 1
//         }
//     }

//     return numberOfTrue
// }


// let arr = [64, [25], 12, 22, [11]]


// function sortIt(arr) {
//     let sortedArr = []
//     let lenArr = arr.length

//     for (let j=0; j<lenArr; j++) {

//         let minArr = arr[0]

//         for (let i=0; i<arr.length; i++) {
//             if (arr[i] < minArr) {
//                 minArr = arr[i]
//             }
//         }

//         sortedArr.push(minArr)
//         arr.splice(arr.indexOf(minArr), 1);
        
//     }

//     console.log("Ancien array : ", arr)
//     console.log("Nouveau array : ", sortedArr)
// }

// sortIt(arr)

let eltHeader = document.getElementById("nav")
console.log(eltHeader)