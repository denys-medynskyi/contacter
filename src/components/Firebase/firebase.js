import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "config/secrets/firebaseConfig";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.firestore();
    this.db.enablePersistence();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** Firestore / Database API ***

  addRecord = (tableName, data) => {
    const timestamp = new Date().toISOString();
    const newRecord = Object.assign(data, { created: timestamp });

    return this.db
      .collection(tableName)
      .add(newRecord)
      .then(function(data) {
        return Object.assign(newRecord, { id: data.id });
      })
      .catch(function(error) {
        console.error(error);
        return { error };
      });
  };

  updateRecord = (tableName, data) => {
    const timestamp = new Date().toISOString();

    return this.db
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
  };

  loadRecord = (tableName, id) => {
    return this.db.collection(tableName)
      .doc(id)
      .get()
      .then(function(doc) {
        if (doc.exists) {
          console.log("loadRecord is requested");
          return doc.data();
        } else {
          // doc.data() will be undefined in this case
          console.error("No such document!");
        }
      })
      .catch(function(error) {
        console.error("Error getting document:", error);
      });
  };

  listRecords = (tableName, user_uid) => {
    console.log("listRecords is requested");
    return this.db
      .collection(tableName)
      .where("user_uid", "==", user_uid)
      .get()
      .then(function(querySnapshot) {
        return querySnapshot.docs.map(doc => {
          const id = doc.id;
          return Object.assign(doc.data(), { id: id });
        });
      });
  };

  deleteRecord = (tableName, id) => {
    return this.db
      .collection(tableName)
      .doc(id)
      .delete()
      .then(function() {
        return {};
      })
      .catch(function(error) {
        console.error(error);
        return { error };
      });
  };

  // *** Contact API ***

  addContact = data => {
    return this.addRecord("contacts", data);
  };

  updateContact = data => {
    return this.updateRecord("contacts", data);
  };

  listContacts = (user_uid) => {
    return this.listRecords("contacts", user_uid);
  };

  deleteContact = id => {
    return this.deleteRecord("contacts", id);
  };

  loadContact = id => {
    return this.loadRecord("contacts", id);
  };
}

export default Firebase;
