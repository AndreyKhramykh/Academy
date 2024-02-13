Object.prototype.valueOf = () => {
	console.log('Object valueOf called');
	return 1
}

Object.prototype.toString = () => {
	console.log('Object toString called');
	return 'test';
}

Date.prototype.valueOf = () => {
	console.log('Date valueOf called');
	return Math.random() * 1000;
}

Date.prototype.toString = () => {
	console.log('Date toString called');
	return 'test';
}

const obj = new Object();
const date = new Date();


obj + obj;

date + date;

// alert(obj)

// const myObj = {
// 	valueOf() {
// 	 console.log('myObj valueOf called');
// 	 return Math.random() * 1000;
//  },
//  toString() {
// 		console.log('myObj toString called');
// 		return 'test';
// 	},
// 	// provide compiler instructions here !!!!
// };
