
//require firebase and firestore

import { firestore } from 'firebase-admin';

function main(args) {
  const db = firestore();
const docRef = db.collection('users').doc('alovelace');
const setAda = docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

    let name = args.name || 'stranger'
    let greeting = 'Hello ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
  }
  