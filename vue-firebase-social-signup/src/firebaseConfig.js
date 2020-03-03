import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: process.env.VUE_APP_FIREBASE_CONFIG_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_CONFIG_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_CONFIG_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_CONFIG_PROJECT_ID
};

firebase.initializeApp(config);

// firebase utils
const auth = firebase.auth();

export {
    auth,
}

