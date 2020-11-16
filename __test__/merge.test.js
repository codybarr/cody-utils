const { expect } = require('chai')
const merge = require('../utils/merge')

describe('merge tests', () => {
	it('should merge two basic objects', () => {
		const destination = {
			a: 1,
			b: '3',
		}

		const source = {
			b: '4',
			c: 2,
		}

		expect(merge(destination, source)).to.deep.equal({
			a: 1,
			b: '4',
			c: 2,
		})
	})

	it('should merge two nested objects', () => {
		const destination = {
			a: 1,
			b: {
				unstuff: 'a',
				stuff: 'thing',
			},
		}

		const source = {
			a: '4',
			b: {
				stuff: 'other thing',
			},
			c: 3,
		}

		expect(merge(destination, source)).to.deep.equal({
			a: '4',
			b: {
				unstuff: 'a',
				stuff: 'other thing',
			},
			c: 3,
		})
	})
})
