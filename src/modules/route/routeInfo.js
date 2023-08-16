import FileBoard from "../board/FileBoard";
import UserBoard from "../board/UserBoard";
import LoginForm from "../user/LoginForm";
import SignupForm from "../user/SignupForm";

export const pathInfo = [
  { board: ["userboard", "fileBoard"] },
  { main: ["main1", "main2"] },
];

export const routeInfo = (path) => {
  switch (path) {
    case "/board/fileBoard":
      return <FileBoard />;
    case "/board/userboard":
      console.log("path", path);
      return <UserBoard />;
    case "/login":
      console.log("path", path);
      return <LoginForm />;
    case "/signup":
      console.log("path", path);
      return <SignupForm />;
    default:
      return <div style={{ backgroundColor: "white" }}></div>;
  }
};
