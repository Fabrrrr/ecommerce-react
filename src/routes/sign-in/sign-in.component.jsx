import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from "../../db/firebase.utils";
import SignUpForm from "../../components/sign-up/sign-up-form.component";

const SignIn = () => {
    const logGoogleUserPopup = async () => {
        const { user } = await signInWithGooglePopup(); //destruct the response to get the user
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUserPopup}> Sign-in with Google Popup </button>
            <SignUpForm />
        </div>
    );
}
export default SignIn;