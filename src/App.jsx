import { useState } from 'react'
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './App.css'

function App() {
  const [emailCreate, setEmailCreate] = useState("");
  const [passwordCreate, setPasswordCreate] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const [token, setToken] = useState("");

  const createUser = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, emailCreate, passwordCreate);
    console.log("User created");
    setEmailCreate("");
    setPasswordCreate("");
  }

  const loginUser = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, emailLogin, passwordLogin);
    console.log("Login successful!");
    setEmailLogin("");
    setPasswordLogin("");
  }

  const showToken = async () => {
    const token = await auth.currentUser?.getIdToken();
    setToken(token);
  }

  return (
    <>
      <form onSubmit={createUser}>
          <input type="text" value={emailCreate} onChange={e => setEmailCreate(e.target.value)} />
          <input type="password" value={passwordCreate} onChange={e => setPasswordCreate(e.target.value)} />
          <button>Create</button>
      </form>
      <form onSubmit={loginUser}>
      <input type="text" value={emailLogin} onChange={e => setEmailLogin(e.target.value)} />
          <input type="password" value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)} />
          <button>Login</button>
      </form>
      <button onClick={showToken}>Show Token</button>
      <p>{token}</p>
    </>
  )
}

export default App
