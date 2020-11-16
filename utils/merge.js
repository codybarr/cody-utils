const isObject = (value) =>
	typeof value === 'object' && value !== null && !(value instanceof Array)

const merge = (destination, source) => {
	for (let prop in source) {
		isObject(destination[prop])
			? merge(destination[prop], source[prop])
			: (destination[prop] = source[prop])
	}
	return destination
}

module.exports = merge
