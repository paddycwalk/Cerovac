const htmlmin = require('html-minifier');
const CleanCSS = require('clean-css');

module.exports = function (eleventyConfig) {
  // eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
  //   // Eleventy 1.0+: use this.inputPath and this.outputPath instead
  //   if (outputPath && outputPath.endsWith('.html')) {
  //     let minified = htmlmin.minify(content, {
  //       useShortDoctype: true,
  //       removeComments: true,
  //       collapseWhitespace: true,
  //       minifyCSS: true,
  //     })
  //     return minified
  //   }

  //   return content
  // })

  eleventyConfig.setQuietMode(true);
  eleventyConfig.setBrowserSyncConfig({
    files: './dist/_res/css/**',
  });

  eleventyConfig.addWatchTarget('./src/_res/styles/**');
  // eleventyConfig.addWatchTarget('./src/_includes/components/atoms/**')

  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.setBrowserSyncConfig({
    open: true,
  });

  eleventyConfig.addPassthroughCopy('src/_res/fonts');
  eleventyConfig.addPassthroughCopy('src/_res/img');
  eleventyConfig.addPassthroughCopy('src/_res/icons');
  eleventyConfig.addPassthroughCopy('src/_res/scripts');

  return {
    dir: {
      input: 'src',
      // includes: '_includes',
      output: 'dist',
    },
    templateFormats: ['njk', 'html'],
    markdownTempalteEnginge: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
};
