/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/

const frequencyCounter = (str) => {


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
    
  
//   Array.from(str)
//    .filter(letter => 'aeiou'.includes(letter)).length;
   
 
//  console.log(frequencyCounter('abcdefghijklmnopqrstuvwxyz')); // 5
//  console.log(frequencyCounter('test')); // 1
//  console.log(frequencyCounter('ddd'));
//  console.log(frequencyCounter("aeeeee"))

}
module.exports = frequencyCounter;
