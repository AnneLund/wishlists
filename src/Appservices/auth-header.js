export default function authHeader() {
  const tokenString = localStorage.getItem("token");

  const currentToken = tokenString ? JSON.parse(tokenString) : null;

  if (currentToken && currentToken.access_token) {
    return {
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${currentToken.access_token}`,
    };
  } else {
    return {};
  }
}
