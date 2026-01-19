import { createContext, useContext } from 'react';
import type { Application } from '.';

export const ApplicationContext = createContext<Application | null>(null);
ApplicationContext.displayName = 'ApplicationContext';

export const useApplication = () => {
  const app = useContext(ApplicationContext);
  if (app == null) {
    throw new Error(`useApplication can only be called from ApplicationContext`);
  }

  return app;
};
