import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { pagePath } = req.query;

  if (!pagePath || typeof pagePath !== 'string') {
    return res.status(400).json({ error: 'Page path is required' });
  }

  try {
    // Only allow .en.mdx files for now
    if (!pagePath.endsWith('.en.mdx')) {
      return res.status(400).json({ error: 'Only English pages are supported' });
    }

    // Construct the file path
    const filePath = path.join(process.cwd(), 'pages', pagePath);

    console.log('Attempting to read file:', filePath);
    console.log('File exists:', fs.existsSync(filePath));

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        error: 'Page not found',
        attempted: filePath,
        pagePath: pagePath
      });
    }

    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');

    // Clean the content:
    // 1. Remove import statements
    content = content.replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, '');

    // 2. Remove export statements
    content = content.replace(/^export\s+.*?;?\s*$/gm, '');

    // 3. Remove frontmatter (YAML between --- markers)
    content = content.replace(/^---\s*\n[\s\S]*?\n---\s*\n/m, '');

    // 4. Trim extra whitespace
    content = content.trim();

    return res.status(200).json({ content, pagePath });
  } catch (error) {
    console.error('Error reading page content:', error);
    return res.status(500).json({ error: 'Failed to read page content' });
  }
}
