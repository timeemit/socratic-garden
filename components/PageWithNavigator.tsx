import React, { FunctionComponent } from 'react';
import Page, { Props } from './Page';

export default ({
  children,
  title,
}) =>  (
  // Moved the Navigator to the App component
  <Page title={title}>
    {children}
  </Page>
);
