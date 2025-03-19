import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAKJQ7ghz8h9b9TSVKbLP86qGUeZ36FXis",
  authDomain: "netflix-clone-dab4c.firebaseapp.com",
  projectId: "netflix-clone-dab4c",
  storageBucket: "netflix-clone-dab4c.firebasestorage.app",
  messagingSenderId: "734502423736",
  appId: "1:734502423736:web:8301ae02e8d599cd79384d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name,email,password)=>{
    try{
      const res = await createUserWithEmailAndPassword(auth,email,password) 
      const user = res.user
      await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider : "local",
        email,
      })
    }catch (error){
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
    
}

const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
        
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
        
    }
}

const logout = () =>{
    signOut(auth)
}

export {auth,db,login,signup,logout}