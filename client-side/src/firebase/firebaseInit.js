import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAn5-SfbuY9gpl6oLHFJa1ShboL_ALsQHY",
	authDomain: "bank-transaction-9bdfd.firebaseapp.com",
	projectId: "bank-transaction-9bdfd",
	storageBucket: "bank-transaction-9bdfd.appspot.com",
	messagingSenderId: "291984666608",
	appId: "1:291984666608:web:7ce78549fa73ac81c0b735",
};

const fireabaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const getAuth = firebase.auth();
export { timestamp, getAuth };
export default fireabaseApp.firestore();
