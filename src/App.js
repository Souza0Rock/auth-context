import React from "react";
import { useAuth } from "./providers/auth";
import Profile from "./components/profile";
import Login from "./components/login";

function App() {

  const { user } = useAuth();

  console.log(user, 'user');

  return (
    <>
      <h1>hello</h1>
      <Profile />
      <Login />
    </>
  );
}

export default App;
