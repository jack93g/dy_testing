

// /*const someDate = new Date();
// let numberOfDaysToAddShort = 2;
// let numberOfDaysToAddLong = 3;
// let lowerBound = someDate.setDate(someDate.getDate() + numberOfDaysToAddShort);
// let upperBound = someDate.setDate(someDate.getDate() + numberOfDaysToAddLong); */
// //console.log(new Date(result))

// //console.log(`Your item will be devlivered between ${new Date(lowerBound)} and ${new Date(upperBound)}`);


// /* function date_range(numberOfDaysToAddShort, numberOfDaysToAddLong){

//     const lowerBoundDate = new Date()
//     let lowerBound = lowerBoundDate.setDate(lowerBoundDate.getDate() + numberOfDaysToAddShort)
    
//     const upperBoundDate = new Date()
//     let upperBound = upperBoundDate.setDate(upperBoundDate.getDate() + numberOfDaysToAddLong)

//     return `Your item will be delivered between ${new Date(lowerBound)} and ${new Date(upperBound)}`
// }

// console.log(date_range(2,3)) */

// ////////////////////////


// function date_range(numberOfDaysToAddShort, numberOfDaysToAddLong){

//     const lowerBoundDate = new Date();
//     let lowerBound = lowerBoundDate.setDate(lowerBoundDate.getDate() + numberOfDaysToAddShort);

//     const upperBoundDate = new Date();
//     let upperBound = upperBoundDate.setDate(upperBoundDate.getDate() + numberOfDaysToAddLong);

//     // Loop through each day between the lower and upper bounds
//     for (let date = lowerBound; date <= upperBound; date = new Date(date).setDate(new Date(date).getDate() + 1)) {
//         const currentDay = new Date(date).getDay();
//         // If the current day is Sunday, skip to the next day
//         if (currentDay === 0) {
//             upperBound += 86400000; // add one day in milliseconds
//         }
//     }


//     return `Du erhälst dein Gerät voraussichtlich am ${new Date(lowerBound)} oder ${new Date(upperBound)}`;
// }

// console.log(date_range(2, 3)); 


// function date_range(numberOfDaysToAddShort, numberOfDaysToAddLong) {
//     const lowerBoundDate = new Date();
//     let lowerBound = lowerBoundDate.setDate(lowerBoundDate.getDate() + numberOfDaysToAddShort);
  
//     const upperBoundDate = new Date();
//     let upperBound = upperBoundDate.setDate(upperBoundDate.getDate() + numberOfDaysToAddLong);
  
//     // Loop through each day between the lower and upper bounds
//     for (let date = lowerBound; date <= upperBound; date = new Date(date).setDate(new Date(date).getDate() + 1)) {
//       const currentDay = new Date(date).getDay();
//       // If the current day is Sunday, skip to the next day
//       if (currentDay === 0) {
//         upperBound += 86400000; // add one day in milliseconds
//       }
//     }
  
//     const lowerBoundFormatted = new Date(lowerBound).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
//     const upperBoundFormatted = new Date(upperBound).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
  
//     return `Du erhälst dein Gerät voraussichtlich am ${lowerBoundFormatted} oder am ${upperBoundFormatted}`;
//   }
  
//   console.log(date_range(2, 3));


//   function date_range(numberOfDaysToAddShort, numberOfDaysToAddLong) {
//     const lowerBoundDate = new Date();
//     let lowerBound = lowerBoundDate.setDate(lowerBoundDate.getDate() + numberOfDaysToAddShort);
  
//     const upperBoundDate = new Date();
//     let upperBound = upperBoundDate.setDate(upperBoundDate.getDate() + numberOfDaysToAddLong);
  
//     // Loop through each day between the lower and upper bounds
//     for (let date = lowerBound; date <= upperBound; date = new Date(date).setDate(new Date(date).getDate() + 1)) {
//       const currentDay = new Date(date).getDay();
//       // If the current day is Sunday, skip to the next day
//       if (currentDay === 0) {
//         upperBound += 86400000; // add one day in milliseconds
//       }
//     }
  
//     const lowerBoundFormatted = new Date(lowerBound).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
//     const upperBoundFormatted = new Date(upperBound).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
  
//     return //`Du erhälst dein Gerät voraussichtlich am// 
//     lowerBoundFormatted,
//    // oder am
//     upperBoundFormatted;
//   }
  
//   console.log(date_range(2, 3));
    
  

//   function date_range(numberOfDaysToAddShort, numberOfDaysToAddLong) {
//     const lowerBoundDate = new Date();
//     let lowerBound = lowerBoundDate.setDate(lowerBoundDate.getDate() + numberOfDaysToAddShort);
  
//     const upperBoundDate = new Date();
//     let upperBound = upperBoundDate.setDate(upperBoundDate.getDate() + numberOfDaysToAddLong);
  
//     // Loop through each day between the lower and upper bounds
//     for (let date = lowerBound; date <= upperBound; date = new Date(date).setDate(new Date(date).getDate() + 1)) {
//       const currentDay = new Date(date).getDay();
//       // If the current day is Sunday, skip to the next day
//       if (currentDay === 0) {
//         upperBound += 86400000; // add one day in milliseconds
//       }
//     }
  
//     const lowerBoundFormatted = new Date(lowerBound).toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
//     const upperBoundFormatted = new Date(upperBound).toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
  
//     return `Du erhälst dein Gerät voraussichtlich am ${lowerBoundFormatted} oder ${upperBoundFormatted}`;
//   }
  
//   console.log(date_range(2, 3));
  



// ////////////////////////////////////////////


//   function date_range(numberOfDaysToAddShort, numberOfDaysToAddLong) {

//   const lowerBoundDate = new Date();
//   let lowerBound = lowerBoundDate.setDate(lowerBoundDate.getDate() + numberOfDaysToAddShort);

//   const upperBoundDate = new Date();
//   let upperBound = upperBoundDate.setDate(upperBoundDate.getDate() + numberOfDaysToAddLong);

//   // Loop through each day between the lower and upper bounds
//   for (let date = lowerBound; date <= upperBound; date = new Date(date).setDate(new Date(date).getDate() + 1)) {
//     const currentDay = new Date(date).getDay();
//     // If the current day is Sunday, skip to the next day
//     if (currentDay === 0) {
//       lowerBound += 86400000;
//       upperBound += 86400000; // add one day in milliseconds
//     }
//   }

//   const lowerBoundFormatted = new Date(lowerBound).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
//   const upperBoundFormatted = new Date(upperBound).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });

//   return "Lieferung voraussichtlich zwischen  " + lowerBoundFormatted + " und " + upperBoundFormatted;
// }

// const deliveryDate = date_range(2, 3);

// const deliveryDateElement = document.getElementById("delivery-date");
// deliveryDateElement.innerText = deliveryDate;//


//////////////////////////////////
// Copyright LDN

/* const holidays = ['09.04.2023', '10.04.2023', '12.04.2023'];
const dayInMillisencods = 86400000;



function stringifyDate(date) {
  return new Date(date).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

function date_range(numberOfDaysToAddShort, numberOfDaysToAddLong) {
  const lowerBoundDate = new Date();
  const upperBoundDate = new Date();

  const lowerBound = lowerBoundDate.setDate(
    lowerBoundDate.getDate() + numberOfDaysToAddShort,
  );
  const upperBound = upperBoundDate.setDate(
    upperBoundDate.getDate() + numberOfDaysToAddLong,
  );

  // const currentLowerDay = new Date(lowerBound).getDay();
  // const currentUpperDay = new Date(upperBound).getDay();

  const lowerBoundFormatted = stringifyDate(lowerBound);
  const upperBoundFormatted = stringifyDate(upperBound);

  if (holidays.includes(lowerBoundFormatted)) {
    return date_range(numberOfDaysToAddShort + 1, numberOfDaysToAddLong + 1);
  }

  if (holidays.includes(upperBoundFormatted)) {
    return date_range(numberOfDaysToAddShort, numberOfDaysToAddLong + 1);
  }

  // const lowerBoundFormatted = new Date(lowerBound).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
  // const upperBoundFormatted = new Date(upperBound).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });

  return "Lieferung voraussichtlich zwischen  " + lowerBoundFormatted + " und " + upperBoundFormatted;
}

console.log(date_range(2, 3)) */



////////////////////////////////////////////////

const holidays = ['09.04.2023', '10.04.2023', '12.04.2023', '01.05.2023', '18.05.2023', '28.05.2023', '29.05.2023'
                  , '08.06.2023', '15.08.2023', '03.10.2023', '31.10.2023', '01.11.2023', '22.11.2023', '25.12.2023', '26.12.2023'];
const dayInMillisencods = 86400000;

function stringifyDate(date) {
  return new Date(date).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function isSunday(date) {
  return new Date(date).getDay() === 0; // Sunday is represented by 0 in JavaScript's getDay() method
}

function date_range(numberOfDaysToAddShort, numberOfDaysToAddLong) {
  const holidays = []; // Replace with your array of holidays
  const lowerBoundDate = new Date();
  const upperBoundDate = new Date();

  const lowerBound = lowerBoundDate.setDate(
    lowerBoundDate.getDate() + numberOfDaysToAddShort,
  );
  const upperBound = upperBoundDate.setDate(
    upperBoundDate.getDate() + numberOfDaysToAddLong,
  );

  const lowerBoundFormatted = stringifyDate(lowerBound);
  const upperBoundFormatted = stringifyDate(upperBound);

  if (holidays.includes(lowerBoundFormatted) || isSunday(lowerBound)) {
    return date_range(numberOfDaysToAddShort + 1, numberOfDaysToAddLong + 1);
  }

  if (holidays.includes(upperBoundFormatted) || isSunday(upperBound)) {
    return date_range(numberOfDaysToAddShort, numberOfDaysToAddLong + 1);
  }

  return "Lieferung voraussichtlich zwischen " + lowerBoundFormatted + " und " + upperBoundFormatted;
}



console.log(date_range(2, 3));
