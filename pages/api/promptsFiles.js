// pages/api/promptsFiles.js
import fs from 'fs';
import path from 'path';

const getDirectoryData = (basePath, lang) => {
  // Read the meta file if it exists and return an object of titles
  const metaFilePath = path.join(basePath, `_meta.${lang}.json`);
  let titles = {};
  if (fs.existsSync(metaFilePath)) {
    const metaFileContents = fs.readFileSync(metaFilePath, 'utf8');
    titles = JSON.parse(metaFileContents);
  }

  // Read all mdx files in the directory and return their slugs and titles
  return fs.readdirSync(basePath)
    .filter(file => file.endsWith(`${lang}.mdx`))
    .map(file => {
      const slug = file.replace(`.${lang}.mdx`, '');
      return { slug, title: titles[slug] || slug }; // Use the title from meta file or the slug as a fallback
    });
};

export default function handler(req, res) {
  const { lang = 'en' } = req.query;
  const promptsPath = path.join(process.cwd(), 'pages/prompts');
  const metaFilePath = path.join(promptsPath, `_meta.${lang}.json`);
  let folderMappings = {};
  
  if (fs.existsSync(metaFilePath)) {
  const metaFileContents = fs.readFileSync(metaFilePath, 'utf8');
  folderMappings = JSON.parse(metaFileContents);
  }
  
  let promptsData = Object.entries(folderMappings).map(([folderKey, folderTitle]) => {
  const subdirectoryPath = path.join(promptsPath, folderKey);
  const filesData = getDirectoryData(subdirectoryPath, lang);
  return {
  folderKey,
  folderName: folderTitle,
  files: filesData,
  };
  });
  
  res.status(200).json(promptsData);
  }