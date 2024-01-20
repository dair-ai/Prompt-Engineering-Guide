// components/PromptFiles.js
import React, { useEffect, useState } from 'react';
import { Cards, Card } from 'nextra-theme-docs';
import { FilesIcon } from './icons'; // Ensure this path is correct for your project

const PromptFiles = ({ lang = 'en' }) => {
  const [promptsData, setPromptsData] = useState([]);

  useEffect(() => {
    // Fetch the data from the API
    fetch(`/api/promptsFiles?lang=${lang}`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API returns data structured as an array of objects
        setPromptsData(data);
    })
    .catch((error) => {
    console.error('Error fetching prompt files:', error);
    });
    }, [lang]);
    
    return (
        <div>
        {promptsData.map(({ folderKey, folderName, files }) => (
        <section key={folderKey}>
        <br></br>
        <h2 class="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">{folderName}
        <a href={`#${folderKey}`} id={folderKey} class="subheading-anchor" aria-label="Permalink for this section"></a>
        </h2>
        <Cards>
        {files.map(({ slug, title }) => (
        <Card
        key={slug}
        icon={<FilesIcon />} // This should be the icon component you want to use
        title={title}
        href={`/prompts/${folderKey}/${slug}`} // Adjust the href to match your routing pattern
        >
        {/* Additional content for each card, if any, goes here */}
        </Card>
        ))}
        </Cards>
        </section>
        ))}
        </div>
    );
    };
    
    export default PromptFiles;
    
    
