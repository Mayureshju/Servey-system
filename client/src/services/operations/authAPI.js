import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";

const { LOGIN_API } = endpoints;

export async function login(email, password, navigate) {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", LOGIN_API, {
      email,
      password,
    });

    console.log("LOGIN API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Login Successful");
    localStorage.setItem("token", JSON.stringify(response.data.token));
    navigate("/dashboard");
  } catch (error) {
    console.log("LOGIN API ERROR............", error);
    toast.error("Login Failed");
  }
  toast.dismiss(toastId);
}

export function logout(navigate) {
  return () => {
    localStorage.removeItem("token");
    toast.success("Logged Out");
    navigate("/");
  };
}
