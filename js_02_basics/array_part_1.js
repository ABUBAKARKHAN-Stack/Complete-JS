// Array //

// Hint == Array always written in Sq Brackets [] //
// const myArr = [0 ,1 ,2 ,3 ,4 ,5]
// console.log(myArr[0]);
// Output => 0 Bcz Array Index Starts From zero 0 to N .//

// const myArr2 = new Array ('Harry' , 'Abubakar' , 'Blue')
// console.log(myArr2[1]);
// Output => Abubakar

// Array Methods //

                 // PUSH FUNCTION //
// const myArr = [0 ,1 ,2 ,3 ,4 ,5]
// myArr.push(6)
// // Push Func () Used to add values in array //
// console.log(myArr);
// Output => [ 0, 1, 2, 3, 4, 5, 6 ]

                      // POP FUNCTION //
// const myArr = [0 ,1 ,2 ,3 ,4 ,5]
// myArr.pop()
//  // Pop Func () Used to remove last value in array //
// console.log(myArr);
//  // Output => [ 0, 1, 2, 3, 4 ]


                     //  UNSHIFT FUNCTION //
// const myArr = [0 ,1 ,2 ,3 ,4 ,5]
// myArr.unshift(-1)
// // Unshift () Function is used Insert Value in the start of Array //
// console.log(myArr);
// Output => [-1, 0, 1, 2,3, 4, 5]

                 // Shift Function //
// const myArr = [0 ,1 ,2 ,3 ,4 ,5]
// myArr.shift()
// Shift Func () Used to remove first value in array //
// console.log(myArr);
// Output => [1, 2, 3, 4 , 5 ]


              // INCLUDES FUNCTION () //
// const myArr = [0 ,1 ,2 ,3 ,4 ,5]
// console.log(myArr.includes(9));
// Output => False Because includes() is used to check the value present in array or not. 
// NOTE : It alwyas gives anwser in Boolean form (Ture/False). Output of this expression is false because 9 is not present in the given array  //
 
                // JOIN FUNCTION //
// const myArr = [0 ,1 ,2 ,3 ,4 ,5]
// const myArr2 = myArr
// console.log(myArr2.join());
// Join () in JavaScript is used to join all the elements of an array (separated   by commas by default) into a string.//
// Output => 0,1,2,3,4,5

                   // SLICE FUNCTION
// // const myArr = [0 ,1 ,2 ,3 ,4 ,5]
// // console.log(myArr.slice(1,3));
// Output => [1 , 2]
// // console.log(myArr);
// Output => [0 ,1 ,2 ,3 ,4 ,5]
// Note : Slice Functions used to extract a portion of an array without modifying it Due To This reason Output Remains same //


                 // SPLICE FUNCTION () //
// const fruitArr =   ["Orange" , "Banana" , "Mango" , "Watermelon" ]
// console.log(fruitArr);
// Output => ["Orange" , "Banana" , "Mango" , "Watermelon" ]
// const fruitArr2 = fruitArr
// console.log(fruitArr2.splice(1,3));
// Output => [ 'Banana', 'Mango', 'Watermelon' ]
// console.log(fruitArr2);
// Output  => [ 'Orange' ]
/* Must Read This Note To Understand the "Splice Function" ....> splice()` is used to modify an array by removing and/or adding elements at a specified index. */













