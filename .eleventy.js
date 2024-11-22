module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles/*");
    eleventyConfig.addPassthroughCopy("images/*");
    eleventyConfig.addPassthroughCopy("scripts/*");
};