const fs = require('fs');
const glob = require('glob');
const lernaJson = require('./lerna.json');

const stories = process.argv.indexOf('--stories') !== -1;
const isRoot = process.argv.indexOf('--root') !== -1;
const appIndex = isRoot || stories ? '/' : `${process.env.PWD}/demo/index.html`;

const generateIndexHTML = async () => {
  const html = [];
  lernaJson.packages.forEach(lernaPackages => {
    glob.sync(lernaPackages).forEach(pkgDir => {
      const packageJson = JSON.parse(fs.readFileSync(`${pkgDir}/package.json`, 'utf8'));
      html.push(`<li><a href="${pkgDir}/demo/index.html">${packageJson.name}</a></li>`);
    });
  });
  return `<ul>${html.join('')}</ul>`;
};

const serveAllDemos = ({ url, status, contentType, body }) => {
  if (url === '/' || url === '/index.html') {
    return {
      body: generateIndexHTML(),
      contentType: 'text/html',
    };
  }
  return { url, status, contentType, body };
};

const responseTransformers = isRoot ? [serveAllDemos] : [];

module.exports = {
  rootDir: __dirname,
  watch: true,
  nodeResolve: true,
  open: true,
  appIndex,
  responseTransformers,
};
