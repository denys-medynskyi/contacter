import firebaseConfig from "./config/secrets/firebaseConfig";
const firebase = require("firebase");
require("firebase/database");

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

function addRecord(tableName, data) {
  db.collection(tableName)
    .doc(data.uid)
    .set(data)
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
}

function listRecords(tableName) {
  return db.collection(tableName).get().then(function(querySnapshot) {
    return querySnapshot.docs.map(doc => doc.data());
  });
}

export default {
  addContact: data => {
    return addRecord("contacts", data);
  },
  listContacts: () => {
    return listRecords("contacts");
  }
};
