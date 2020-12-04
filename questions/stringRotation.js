const rotateString = (str, n, direction) => {

//   arr=arr.concat(arr.splice(0,arr.indexOf(n)+direction));
//   return arr;

//   var adjustedArray=rotateString(['N','E','S','W'],'S',1);
// };

  if (typeof str != "string") {

    throw new Error("Invalid Input");
  }
  str = str.toLowerCase();

  let vowA = 0,
    vowE = 0,
    vowI = 0,
    vowO = 0,
    vowU = 0;
    
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":vowA++;
        break;
      case "e":vowE++;
        break;
      case "i":vowI++;
        break;
      case "o":vowO++;
        break;
      case "u":vowU++;
       break;
    }
  }
  return {
     a: vowA, e: vowE, i: vowI, o: vowO, u: vowU 
    };
  

  }


module.exports = rotateString;
