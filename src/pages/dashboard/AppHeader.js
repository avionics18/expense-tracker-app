import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const { name, profilePhoto } = useGetUserInfo();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-danger py-3 border-bottom border-4 border-danger-subtle mb-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="brand fs-4 font-monospace fw-bold text-white m-0">
            <i className="fa fa-money"></i> Expense Tracker
          </h1>
          <div className="account-details d-flex align-items-center">
            {profilePhoto && (
              <img
                className="border border-light rounded-circle shadow-sm me-2"
                width="30"
                src={profilePhoto}
                alt={name}
              />
            )}
            <p className="m-0 fw-semibold text-white">{name}</p>
            <button
              className="ms-3 btn btn-dark btn-sm"
              onClick={logoutHandler}
            >
              <i className="fa fa-sign-out"></i> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
