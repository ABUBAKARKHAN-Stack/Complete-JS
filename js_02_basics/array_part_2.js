// const marvelHeros = ["Thor" , "Ironman" , "Hulk"]
// const dcHeros = ["Flash" , "Superman" , "Batman"]


                  //   Concat Function //
// // marvelHeros.push(dcHeros)
// // console.log(marvelHeros);
// // console.log(marvelHeros[3][0]);
// // const allHeros = marvelHeros.concat(dcHeros)
// // console.log(allHeros);

// Output => [ 'Thor', 'Ironman', 'Hulk', 'Flash', 'Superman', 'Batman' ]


                // Spread Operator //
// const allNewheros = [...dcHeros, ...marvelHeros]
// console.log(allNewheros);
// Output => [ 'Flash', 'Superman', 'Batman', 'Thor', 'Ironman', 'Hulk' ] 

// We can use the spread operator to merge two or more arrays, and this is much more reliable than manually concatenating them with the concat() method.

                 // Flat Function //

// const multipleArrays = [1 , 2 , 3 , 4 , 5 , [6 , 7 , 8 ] ,[6 , 7 , 5 ] ,[2 ,3 ,4] ]
// const mainArray = multipleArrays.flat(Infinity)
// console.log(mainArray);
// Output => [1, 2, 3, 4, 5, 6,7, 8, 6, 7, 5, 2,3,4]

                 // IsArray () //
// console.log(Array.isArray("Abubakar"));
// Output => False 


                // From Function () // 
// const name = "Abubakar"                
// console.log(Array.from("name"));
// Output => [ 'A', 'b', 'u','b', 'a', 'k', 'a', 'r' ]

                         // of ()

   // Converting a multiple number , string etc into array by using Of () //
    // const score1 = 1000
    // const score2 = 2000
    // const score3 = 3000
    // const strings = "Lion"
    // console.log(Array.of(score1,score2,score3 , strings));
    // Output => [1000,2000,3000 , 'Lion']
 


