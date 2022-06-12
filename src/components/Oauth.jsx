import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";

function Oauth() {
  const navigate = useNavigate();
  const location = useLocation();
  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);
      const user = response.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Google authorization failed");
    }
  };
  return (
    <div className="socialLogin">
      <p>
        Sign {location.pathname === "/signup" ? "up" : "in"} with{" "}
        <button className="socialIconDiv" onClick={onGoogleClick}>
          <img className="socialIconImg" src={googleIcon} alt="google" />
        </button>
      </p>
    </div>
  );
}

export default Oauth;
