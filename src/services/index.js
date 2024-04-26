const baseURL = process.env.REACT_APP_BASE_URL;

console.log("baseURL", baseURL);

const Methods = { GET: "GET", POST: "POST" };

const token = localStorage.getItem("user_token");

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: "Bearer " + token,
};

export const fetchCustomers = async () => {
  try {
    const response = await fetch(`${baseURL}/customers`, {
      method: Methods.GET,
      headers: defaultHeaders,
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const loginRequest = (email, password) => {
  fetch(`${baseURL}/users/login`, {
    method: Methods.POST,
    body: JSON.stringify({
      email,
      password,
    }),
    headers: defaultHeaders,
  })
    .then(async (res) => {
      if(res.status !== 200) {
        throw Error('User and/or password invalid!')
      }
      const { token } = await res.json();
      console.log("loggedin success", token);
      localStorage.setItem("user_token", token);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const logout = () => {
  localStorage.removeItem("user_token");
};
