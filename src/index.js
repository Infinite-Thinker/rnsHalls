// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import * as firebaseui from 'firebaseui'
import { firebaseConfig, uiConfig } from "./config/firebaseConfig";
import './css/firebase-ui-auth.css'
import './modules/loader.js'

//import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

let ui = new firebaseui.auth.AuthUI(auth).start('#firebaseui-auth-container', uiConfig );

if (ui.isPendingRedirect()) {
    ui.start('#firebaseui-auth-container', uiConfig);
}

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = "Hellow World rom webpack !"

    return element;
}

document.body.appendChild(component());