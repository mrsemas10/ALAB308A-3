console.log("running")

// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

// function getUserData(id) {
//   const dbs = {
//     db1: db1,
//     db2: db2,
//     db3: db3
//   };
// }

async function getUser(id) {

  const dbNum = await central(id);

  console.log(dbNum);

  // const value = await vault(id);

  // console.log(value);

 

  new Promise(function (resolve, reject) {

    vault(id).then((returnedValue) => {

      console.log(returnedValue);

      // let userData = returnedValue;

    });

    resolve("Data received"); // when successful

    reject("Id Invalid"); // when error

  });
}


console.log(getUser(1));