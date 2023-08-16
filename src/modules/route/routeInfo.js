import FileBoard from "../board/FileBoard";
import UserBoard from "../board/UserBoard";
import LoginForm from "../user/LoginForm";
import LoginTest from "../user/LoginTest";

export const pathInfo = [
	{ board: ['all-board', 'LoginTest', 'List', 'fileBoard', 'userboard'] },
	{ main: ['main1', 'main2'] }
]

export const routeInfo = (path) => {
	switch (path) {
		case '/board/all-board':
			console.log('path', path);
			return <LoginForm />
		case '/board/LoginTest':
			console.log('path', path);
			return <LoginTest />
		case '/board/fileBoard' :
			return <FileBoard />
		case '/board/userboard':
			console.log('path', path);
			return <UserBoard />
		default:
			return <div style={{backgroundColor: 'white',}}></div>

	}
}