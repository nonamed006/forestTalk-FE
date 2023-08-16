import LoginForm from "../user/LoginForm";
import SignupForm from "../user/SignupForm";

export const pathInfo = [
  { board: ["login", "Signup", "List"] },
  { main: ["main1", "main2"] },
];

export const routeInfo = (path) => {
  switch (path) {
    case "/board/login":
      console.log("path", path);
      return <LoginForm />;
    case "/board/Signup":
      console.log("path", path);
      return <SignupForm />;
    default:
      return <div style={{ backgroundColor: "white" }}></div>;
  }
};
