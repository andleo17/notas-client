module.exports = {
	client: {
		includes: ['./src/graphql/**/*.gql'],
		excludes: ['./src/generated/*.*'],
		service: {
			name: 'notas-api',
			url: 'http://localhost:4000/graphql',
		}
	}
}