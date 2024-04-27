import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import googleLogo from "../../assets/google-logo.webp";

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const res = await signInWithPopup(auth, provider);

    // User Auth Info to be stored into Local Storage
    const authInfo = {
      userID: res.user.uid,
      name: res.user.displayName,
      profilePhoto: res.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/dashboard");
  };

  return (
    <div className="login-wrapper bg-danger">
      <div className="container">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="col-5">
            <div className="card border-danger py-4 shadow mt-5">
              <div className="card-body text-center">
                <i className="fa fa-money fa-3x text-danger"></i>
                <h1 className="fs-3 fw-bold text-uppercase">Expense Tracker</h1>
                <p className="lead">
                  I got 99 problems but tracking expenses ain't one.
                </p>
                <hr className="w-50 mx-auto mt-4 mb-5" />
                <p className="card-text">
                  Login to continue to Expense Tracker:
                </p>
                <button className="btn btn-danger" onClick={signInWithGoogle}>
                  <img
                    className="me-3 bg-white rounded"
                    width="30"
                    src={googleLogo}
                    alt="Google Authentication"
                  />
                  Sign Up With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
