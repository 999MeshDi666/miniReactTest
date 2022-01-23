import {createContext} from "react";

export const style = {
	black: {
		backgroundColor: 'rgb(35 33 34 / 1)',
		color: '#fff',
		padding: '12px',
		border: 0,
		borderRadius: '5px',
	},
	pink: {
		backgroundColor: 'rgb(202 62 133)',
		color: '#fff',
		padding: '24px',
		border: 0,
		borderRadius: '15px',
	},
	gray: {
		backgroundColor: 'rgb(92 89 90)',
		color: '#fff',
		padding: '18px',
		border: 0,
		borderRadius: '20px',
	}
    
}

export const BtnStyleContxt = createContext({
	color: style.black,
	changeColor: () => {}
});


