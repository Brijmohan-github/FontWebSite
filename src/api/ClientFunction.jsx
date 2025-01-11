import axios from "axios";
import { BASE_API_URL as baseURL } from "./Constant";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

if (!baseURL) {
  console.log(
    ">BaseURL error,please check your env file or visit api/ClientFunction.jsx file to see more details...,Thanks!..."
  );
}
const api = axios.create({
  baseURL: baseURL,
});

const handleRequest = async (method, url, data = null, customHeaders = {}) => {
  const token = localStorage.getItem("token");
  try {
    const response = await api({
      method,
      url,
      data,
      headers: {
        ...customHeaders,
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success(response.message);
    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      if (
        error.response.data?.data?.jwt === "jwt expired" ||
        error.response.data?.data?.jwt === "invalid token"
      ) {
        localStorage.removeItem("token");
        window.location.reload();
        <Navigate to="/login" replace={true} />;
      }
      toast.error(error.response.data?.message);
    }
    return { success: false, err: error.message };
  }
};

export const fetchData = (url) => handleRequest("get", url);
export const postData = (url, data) => handleRequest("post", url, data);

export const updateData = (url, data) => handleRequest("put", url, data);

export const deleteData = (url, data) => handleRequest("delete", url, data);

export const requestData = (method, url, data) => {
  return handleRequest(method, url, data);
};

export function generateTransactionId(phoneNumber) {
  phoneNumber = String(phoneNumber);

  const seed = Date.now();

  const combinedString = phoneNumber + seed;

  const hashCode = combinedString.split("").reduce((hash, char) => {
    const charCode = char.charCodeAt(0);
    return (hash << 5) - hash + charCode;
  }, 0);

  const positiveHashCode = Math.abs(hashCode) % 100000000;

  const transactionId = positiveHashCode.toString().padStart(8, "0");

  return transactionId;
}
export function formatTime(dateString) {
  const options = { hour: "numeric", minute: "numeric", hour12: true };

  const formattedTime = new Date(dateString).toLocaleTimeString([], options);

  return formattedTime;
}
export function formatDate(isoDate) {
  const originalDate = new Date(isoDate);
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const formattedDate = originalDate.toLocaleDateString("en-US", options);
  const [month, day, year] = formattedDate.split(" ");
  return `${month} ${day} ${year}`;
}
export function todayDateInIso() {
  const now = new Date();
  const ISTOffset = 5.5 * 60 * 60 * 1000;
  const ISTTime = new Date(now.getTime() + ISTOffset);
  const todayIST = ISTTime.toISOString().slice(0, 10);
  return todayIST;
}
export function formatDateWithTime(isoDate) {
  const originalDate = new Date(isoDate);
  // Extend options to include time parts
  const options = {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour format, set to true for 12-hour format
  };
  const formattedDateTime = originalDate.toLocaleString("en-US", options);
  return formattedDateTime;
}

// cookie
export function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return null; // Return null if the cookie is not found
}

export function formatNumber(length, number) {
  if (number && `${number}`.length > 0) {
    const numberStr = number.toString();
    const zerosNeeded = length - numberStr.length;
    const zeros = new Array(zerosNeeded + 1).join("0");
    return zeros + numberStr;
  } else {
    return "*";
  }
}

export function formatTimeInAMPM(time) {
  const [hours, minutes] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12; // 0 should be converted to 12
  const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours12}:${paddedMinutes} ${period}`;
}

export function formatDateWithDay(dateString) {
  const date = new Date(dateString);
  const dayName = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
    date
  );
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
  return `${dayName}`;
}
