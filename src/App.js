import Signup from "./component/signUp/Signup";
import SignIn from "./component/signIn/SignIn";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase";
function App() {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Signup />
      <SignIn />
      <button onClick={logout}>logout</button>
    </>
  );
}

export default App;
