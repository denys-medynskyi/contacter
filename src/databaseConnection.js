import firebaseConfig from "./config/firebaseConfig";
var firebase = require("firebase");
require("firebase/database");

export default () => {

  return {
    save: () => {
      debugger
    }
  };
};

// export default database = () => {
//   const db = firebase.initializeApp(firebaseConfig).firestore();
//   db.settings({ timestampsInSnapshots: true });

//   return {
//     save: (tableName, data) => {
//       db.collection(tableName).add(data);
//     }
//   };
// };
