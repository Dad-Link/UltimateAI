const BASE_URL = "https://api.your-backend.com";

export const login = async (email, password) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) throw new Error("Login failed");
  const data = await response.json();
  localStorage.setItem("token", data.token); // Save token for auth
  return data;
};

export const signup = async (email, password) => {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) throw new Error("Signup failed");
  const data = await response.json();
  localStorage.setItem("token", data.token);
  return data;
};