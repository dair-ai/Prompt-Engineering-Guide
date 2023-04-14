const fs = require("fs");
const path = require("path");
const translate = require("translate-google");

const PAGES_DIR = path.join(__dirname, "..", "pages", "techniques");
const ES_PAGES_DIR = path.join(__dirname, "..", "pages", "techniques");

// Create es-pages directory if it doesn't exist
if (!fs.existsSync(ES_PAGES_DIR)) {
  fs.mkdirSync(ES_PAGES_DIR);
}

// Copy all .en.mdx files from pages directory to es-pages directory
if (fs.existsSync(PAGES_DIR)) {
  const files = fs.readdirSync(PAGES_DIR);
  files.forEach((file) => {
    if (file.endsWith(".en.mdx") || file.endsWith(".en.json")) {
      const newFile = file.replace(".en", ".es");
      fs.copyFileSync(
        path.join(PAGES_DIR, file),
        path.join(ES_PAGES_DIR, newFile)
      );
    }
  });
} else {
  console.error("The pages directory does not exist");
}
