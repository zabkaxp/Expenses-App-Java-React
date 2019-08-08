let user = sessionStorage.getItem("authenticatedUser");

class AuthenticationService {
  setSession = userName => {
    sessionStorage.setItem("authenticatedUser", userName);
  };

  isUserLoggedIn = () => {
    if (user === null) return false;
    return true;
  };

  logOut = () => {
    sessionStorage.removeItem("authenticatedUser");
    window.location.reload();
  };

  getUsername = () => {
    let user = sessionStorage.getItem("authenticatedUser");

    if (user === null) {
      return "";
    } else {
      return user;
    }
  };
}

export default new AuthenticationService();
