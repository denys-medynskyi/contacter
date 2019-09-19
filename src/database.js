import firebaseConfig from "./config/secrets/firebaseConfig";
import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
db.enablePersistence();


function addRecord(tableName, data) {
  const timestamp = new Date().toISOString();
  const newRecord = Object.assign(data, { created: timestamp })

  return db
    .collection(tableName)
    .add(newRecord)
    .then(function(data) {
      return Object.assign(newRecord, {id: data.id});
    })
    .catch(function(error) {
      console.error(error);
      return { error };
    });
}

function updateRecord(tableName, data) {
  const timestamp = new Date().toISOString();

  return db
    .collection(tableName)
    .doc(data.id)
    .set(Object.assign(data, { updated: timestamp }))
    .then(function() {
      return {};
    })
    .catch(function(error) {
      console.error(error);
      return { error };
    });
}

function loadRecord(tableName, id) {
  return db.collection(tableName).doc(id).get().then(function(doc) {
      if (doc.exists) {
        console.log("loadRecord is requested")
        return doc.data();
      } else {
        // doc.data() will be undefined in this case
        console.error("No such document!");
      }
    })
    .catch(function(error) {
      console.error("Error getting document:", error);
    });
}

function listRecords(tableName) {
  console.log("listRecords is requested");
  return db.collection(tableName).get().then(function(querySnapshot) {
    return querySnapshot.docs.map(doc => {
      const id = doc.id
      return Object.assign(doc.data(), {id: id})
    });
  });
}

function deleteRecord(tableName, id) {
  return db.collection(tableName)
    .doc(id)
    .delete()
    .then(function() {
      return {};
    })
    .catch(function(error) {
      console.error(error);
      return { error };
    });
}

export default {
  addContact: data => {
    return addRecord("contacts", data);
  },
  updateContact: data => {
    return updateRecord("contacts", data);
  },
  listContacts: userId => {
    return listRecords("contacts");
  },
  deleteContact: id => {
    return deleteRecord("contacts", id);
  },
  loadContact: id => {
    return loadRecord("contacts", id);
  }
};
