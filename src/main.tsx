import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';
import { Application } from './application/index.ts';

import '~/styles/global.scss';

const run = () => {
  const rootElem = document.getElementById('root');
  if (rootElem == null) {
    console.error(`#root elem is not found, rendering aborted`);
    return;
  }

  const app = new Application({
    apiBaseURL: 'http://localhost:3000/',
  });

  createRoot(rootElem).render(
    <StrictMode>
      <App app={app} />
    </StrictMode>,
  );
};

run();
