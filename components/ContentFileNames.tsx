// components/ContentFileNames.tsx
import React, { useEffect, useState } from 'react';
import { Cards, Card } from 'nextra-theme-docs';
import { FilesIcon } from './icons';

const ContentFileNames = ({ section = 'research', lang = 'en' }) => {
  const [fileNames, setFileNames] = useState([]);

  useEffect(() => {
    fetch(`/api/contentFiles?section=${section}&lang=${lang}`)
      .then(response => response.json())
      .then(data => setFileNames(data.fileNames));
  }, [section, lang]);

  return (
    <Cards>
      {fileNames.map(({ slug, title }, index) => (
        <React.Fragment key={index}>
          <Card
            icon={<FilesIcon />}
            title={title}
            href={`/${section}/${slug}`}
            children={<></>}
          />
        </React.Fragment>
      ))}
    </Cards>
  );
};

export default ContentFileNames;
