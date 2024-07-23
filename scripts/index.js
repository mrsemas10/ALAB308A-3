console.log("running")

// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
}

async function getUser(id) {
  const returnedValue = await central(id);
  console.log(returnedValue);

 const dbPromis = new Promise((resolve, reject) => {
  vault(id).then((returnedValue) => {
      console.log(returnedValue);
      });
  setTimeout(() => {
    resolve("received data");
    reject("did not receive");
  }, 2000);
 }) 
}


console.log(getUser(8));
// console.log(getUser(true));
// console.log(getUser(11));