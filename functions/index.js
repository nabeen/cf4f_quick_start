const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.hello = functions.https.onRequest((req, res) => {
  return res.status(200).send('Hello World!');
});

exports.addMessage = functions.https.onRequest((req, res) => {
  console.log(req.body);
  const original = req.body.text;
  return admin.database().ref('/messages').push({original: original}).then((snapshot) => {
    return res.redirect(303, snapshot.ref.toString());
  });
});

exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
    .onCreate((snapshot, context) => {
      const original = snapshot.val();
      console.log('Uppercasing', context.params.pushId, original);
      const uppercase = original.toUpperCase();
      return snapshot.ref.parent.child('uppercase').set(uppercase);
    });
