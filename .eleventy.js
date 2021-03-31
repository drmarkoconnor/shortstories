module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets');
  // eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);
};
