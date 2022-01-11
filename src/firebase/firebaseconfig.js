
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAROmhrb2W-OnnMq1QTF5XGjblbXL5Qaxc",
  authDomain: "personal-finances-adda9.firebaseapp.com",
  projectId: "personal-finances-adda9",
  storageBucket: "personal-finances-adda9.appspot.com",
  messagingSenderId: "51065408327",
  appId: "1:51065408327:web:aa2001d05122dfb29e9a62"
};


firebase.initializeApp(firebaseConfig);

export default firebase