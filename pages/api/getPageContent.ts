import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
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

    // Construct GitHub raw URL
    const githubBaseUrl = 'https://raw.githubusercontent.com/dair-ai/Prompt-Engineering-Guide/main/pages';
    const githubUrl = `${githubBaseUrl}/${pagePath}`;

    console.log('Fetching from GitHub:', githubUrl);

    // Fetch content from GitHub
    const response = await fetch(githubUrl);

    if (!response.ok) {
      console.error('GitHub fetch failed:', response.status, response.statusText);
      return res.status(404).json({
        error: 'Page not found',
        attempted: githubUrl,
        pagePath: pagePath
      });
    }

    let content = await response.text();

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
    console.error('Error fetching page content:', error);
    return res.status(500).json({ error: 'Failed to fetch page content' });
  }
}
