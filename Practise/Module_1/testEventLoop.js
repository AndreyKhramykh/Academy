console.log(`output->1`,1)
setTimeout(() => {
	console.log(`output->14`,14)
	queueMicrotask(() => console.log(`output->15`,15))
	Promise.resolve().then(() => console.log(`output->16`,16))
})
setTimeout(() => console.log(`output->4`,4), 0)
process.nextTick(() => {
	console.log(`output->12`,12)
	queueMicrotask(() => console.log(`output->13`,13))
})
queueMicrotask(()=> {
	console.log(`output->7`,7)
	Promise.resolve().then(() => console.log(`output->`, 6))
	console.log(`output->8`,8)
	setImmediate(() => console.log(`output->9`,9))
	queueMicrotask(() => console.log(`output->10`,10))
})
Promise.resolve().then(() => console.log(`output->2`,2))
console.log(`output->3`,3)
queueMicrotask(() => console.log(`output->5`,5))
console.log(`output->11`,11)

console.log(`output->`,!!0)

console.log(`output->`,4)
setTimeout(() => {
	console.log(`output->1`,1)
	queueMicrotask(() => {
		console.log(`output->5`,5)
	})
})
queueMicrotask(() => {
	console.log(`output->5`,6)
})
setImmediate(() => {
	console.log(`output->`,3)
})
setTimeout(() => {
	queueMicrotask(() => {
		console.log(`output->5`,7)
	})
	console.log(`output->1`,2)
})