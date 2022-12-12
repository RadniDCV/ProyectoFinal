import API from "../api/Rule_API";

export const isAuth = () => {
  if (typeof window !== "undefined") {
    const tokenChecked = localStorage.getItem("token");
    if (tokenChecked) {
      return true;
    } else return false;
  }
};
