import FileBoard from "../board/FileBoard";
import LoginForm from "../login/LoginForm";
import LoginTest from "../login/LoginTest";

export const pathInfo = [
	{ board: ['all-board', 'LoginTest', 'List', 'fileBoard'] },
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
		default:
			return <div style={{backgroundColor: 'white',}}></div>

	}
}