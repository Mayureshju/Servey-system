import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";

const { CREATESERVEY_API} = endpoints;

export async function createSurvey(
  firstname,
  lastname,
  gender,
  nationality,
  email,
  phoneNumber,
  address,
  message,
  navigate
) {
  const toastId = toast.loading("Submitting survey..."); 

  try {
    console.log("first")
    const response = await apiConnector("POST", CREATESERVEY_API, {
      firstname,
      lastname,
      gender,
      nationality,
      email,
      phoneNumber,
      address,
      message,
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Survey submitted successfully"); // Adjust success message

    navigate("/");
  } catch (error) {
    console.log("Survey API ERROR:", error);
    toast.error("Survey submission failed");
  }

  toast.dismiss(toastId);
}


