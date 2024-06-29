// useLogout.js
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    // Remove login

    localStorage.removeItem("loggedInUser");
    Swal.fire({
      title: "Success!",
      text: "Logout successful",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      navigate("/login");
      window.location.reload();
    });
  };

  return logout;
};

export default useLogout;
