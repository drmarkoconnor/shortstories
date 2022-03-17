const eleventyNavigation = require('@11ty/eleventy-navigation')

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('assets')
	eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`)
	eleventyConfig.addPlugin(eleventyNavigation)
	return {
		templateFormats: ['html', 'liquid', 'md'],
	}
}
