// const balance = 500
// console.log(balance);
// const score = new Number (500.3)
// console.log(score.toString().endsWith(0));
// console.log(score.toFixed(4));

// const otherNum = 25.890
// console.log(otherNum.toPrecision(2));

// const hundreds = 5000000000
// console.log(hundreds.toLocaleString('en-in'));

////////////////////// /////////////  MATHS IN JS /////////////////////////////////////////// 

////////////  abs() Func ////////////////
// console.log(Math.abs(-89));
// Output = 89 . It changes - value into +

////// round () func //////////////
// console.log(Math.round(6.7));
// Output = 7 . 
// We Can also use ceil & floor but in most common cases //

// // To find a minimum value in numbers ///
// console.log(Math.min(7,5,4,3,800,-555));
// output = -555

// To find a maximum value in numbers ///
// console.log(Math.max(7,5,4,3,800, 555));
// output = 800

// Math.random() Func //
// console.log(Math.random());
// output = always b/w from 0 to 1 But we can set it on our choice
// For example :>
// console.log(Math.random()*10);
// output = always b/w from 0 to 10

// More On random func//
//  const min = 40
//  const max = 80
//  console.log(Math.floor(Math.random()*(max - min + 1 ))+min);
/* Explaination on line num 42 first i add Math.floor() which means it will give round value , Then i add Math.random() Func and multiply it with max range. so it will give a value from 0 to 80 but i want minimum value 40 so i add (+) min value (40) in whole function. Now it will give minimum value 
  40 to maximum value 80 .. 
 */
  //  Output alwys b/w 40 to 80











