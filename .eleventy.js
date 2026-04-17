module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addCollection("recipe", function(collectionApi) {
    return collectionApi.getFilteredByGlob("recipes/*.md");
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};