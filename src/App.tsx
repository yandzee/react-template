import { BrowserRouter, Route, Routes } from 'react-router';
import { type Application, ApplicationContext } from './application';

import { IndexPage } from './pages/IndexPage';

interface Props {
  app: Application;
}

export function App(props: Props) {
  return (
    <ApplicationContext value={props.app}>
      <BrowserRouter>
        <Routes>
          <Route index element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </ApplicationContext>
  );
}
