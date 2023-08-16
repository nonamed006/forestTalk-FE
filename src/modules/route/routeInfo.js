import LoginForm from "../login/LoginForm";
import LoginTest from "../login/LoginTest";

export const pathInfo = [
	{ board: ['all-board', 'LoginTest', 'List'] },
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
		default:
			return <div style={{backgroundColor: 'white',}}></div>

	}
}