import firebaseConfig from "./config/secrets/firebaseConfig";
import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

function addRecord(tableName, data) {
  db.collection(tableName)
    .doc(data.uid)
    .set(data)
    .then(function() {
      return {}
    })
    .catch(function(error) {
      return {error: error};
    });
}

function listRecords(tableName) {
  return db.collection(tableName).get().then(function(querySnapshot) {
    return querySnapshot.docs.map(doc => doc.data());
  });
}

function deleteRecord(tableName, uid) {
  db.collection(tableName)
    .doc(uid)
    .delete()
    .then(function() {
      return {}
    })
    .catch(function(error) {
      return { error: error };
    });
}

export default {
  addContact: data => {
    return addRecord("contacts", data);
  },
  listContacts: () => {
    return listRecords("contacts");
  },
  deleteContact: (uid) => {
    return deleteRecord("contacts", uid);
  }
};
