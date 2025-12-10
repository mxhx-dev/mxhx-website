const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginToc = require("eleventy-plugin-toc");

/**
 * @import UserConfig from "@11ty/eleventy/UserConfig"
 */

module.exports = /** @param eleventyConfig {UserConfig} */ function (
  eleventyConfig
) {
  eleventyConfig.addPassthroughCopy({
    "static/root": ".",
    "static/img": "img",
    "static/fnt": "fnt",
    "static/js": "js",
  });
  eleventyConfig.addPlugin(pluginToc);
  eleventyConfig.setLibrary(
    "md",
    markdownIt({ html: true }).use(markdownItAnchor)
  );
  eleventyConfig.addFilter("dateToISOString", function (date) {
    return date.toISOString();
  });
  // for debugging purposes
  eleventyConfig.addFilter("log_value", (value) => {
    console.log(value, typeof value);
    return value;
  });
  eleventyConfig.addShortcode(
    "create_docs_sidebar",
    function (sidebar, /** @type any[] */ all) {
      let sectionName = null;
      if (this.page.filePathStem.endsWith("/index")) {
        sectionName = this.page.filePathStem.substring(
          1,
          this.page.filePathStem.length - 6
        );
      } else {
        sectionName = this.page.filePathStem.substring(
          1,
          this.page.filePathStem.length - this.page.fileSlug.length - 1
        );
      }
      if (!(sectionName in sidebar)) {
        return null;
      }
      const section = sidebar[sectionName];
      let result = `<ul class="sidebar">`;
      for (var category in section) {
        result += generateSidebarCategory(
          category,
          sectionName,
          section[category],
          this.page,
          all
        );
      }
      result += `</ul>`;
      return result;
    }
  );
  eleventyConfig.addTemplateFormats("css");
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: async function (inputContent) {
      return async () => {
        return inputContent;
      };
    },
  });
  eleventyConfig.addTransform("rewritedotmd", function (content) {
    const lastSlashIndex = this.inputPath.lastIndexOf("/");
    const startURL = this.inputPath.substring(1, lastSlashIndex + 1);
    const lastLastSlashIndex = this.inputPath.lastIndexOf(
      "/",
      lastSlashIndex - 1
    );
    const startURLParent =
      lastLastSlashIndex !== -1
        ? this.inputPath.substring(1, lastLastSlashIndex + 1)
        : startURL;
    return content
      .replace(
        /<a( class="[\w\-]+")? href="\.\/([\w\-\/]+)\.md(#[\w+\-]+)?"/g,
        `<a$1 href="${startURL}$2/$3"`
      )
      .replace(
        /<a( class="[\w\-]+")? href="\.\.\/([\w\-\/]+)\.md(#[\w+\-]+)?"/g,
        `<a$1 href="${startURLParent}$2/$3"`
      )
      .replace("/index/", "/");
  });
  eleventyConfig.addTransform("htmlmin", function (content) {
    if (this.outputPath && this.outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
      });
    }
    return content;
  });
  eleventyConfig.addTransform("cssmin", function (content) {
    if (this.outputPath && this.outputPath.endsWith(".css")) {
      return new CleanCSS({}).minify(content).styles;
    }
    return content;
  });
};

function generateSidebarCategory(categoryName, categoryRoot, items, page, all) {
  var result = `<li>${categoryName}`;
  result += `<ul>`;
  for (var item of items) {
    if (item.type === "subcategory") {
      result += generateSidebarCategory(
        item.label,
        categoryRoot,
        item.ids,
        page,
        all
      );
    } else {
      const link = generateSidebarLink(
        "/" + categoryRoot + "/" + item,
        page,
        all
      );
      if (link) {
        result += link;
      }
    }
  }
  result += `</ul></li>`;
  return result;
}

function generateSidebarLink(item, page, all) {
  for (var other of all) {
    if (item === other.filePathStem) {
      const title = other.data.sidebarTitle
        ? other.data.sidebarTitle
        : other.data.title;
      return `<li><a${
        other.filePathStem === page.filePathStem ? ' class="current-page"' : ""
      } href="${other.url}">${title}</a></li>`;
    }
  }
  return null;
}
