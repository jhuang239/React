import { redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URLSearchParams(request.url.split("?")[1]);
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    return Response(JSON.stringify({ message: "Invalid mode." }), { status: 422 });
  }

  const data = await request.formData();
  const authData = Object.fromEntries(data.entries());

  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw Response(JSON.stringify({ message: "Could not authenticate." }), { status: 500 });
  }

  const resData = await response.json();
  localStorage.setItem("token", resData.token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());

  return redirect("/");
}
