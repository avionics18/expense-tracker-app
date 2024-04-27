export const useGetUserInfo = () => {
  let isAuth = false,
    name = "",
    profilePhoto = "",
    userID = "";

  if (localStorage.getItem("auth") !== null) {
    ({ isAuth, name, profilePhoto, userID } = JSON.parse(
      localStorage.getItem("auth")
    ));
  }

  return { isAuth, name, profilePhoto, userID };
};
