import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from "../../db/firebase.utils";

const SignIn = () => {
    const logGoogleUserPopup = async () => {
        const { user } = await signInWithGooglePopup(); //destruct the response to get the user
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUserPopup}> Sign-in with Google Popup </button>
        </div>);
}
export default SignIn;