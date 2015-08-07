// https://github.com/BrowserSync/grunt-browser-sync

module.exports = {
	dev: {
		bsFiles: {
			src: [
	            'assets/js/*.js',
	            'assets/css/*.css',
				'views/**/*.cshtml'
			]
		},
		options: {
			watchTask: true,
		}
	}
}