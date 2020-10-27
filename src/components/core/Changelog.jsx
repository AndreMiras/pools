import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import changelogPath from '../../CHANGELOG.md';

const Changelog = () => {
  const [markdown, setMarkdown] = useState();
  fetch(changelogPath)
    .then((response) => response.text())
    .then(setMarkdown);
  return <ReactMarkdown source={markdown} />;
};

export default Changelog;
