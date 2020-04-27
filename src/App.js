import React from 'react';
import Routers from './routers';

import fontSize, { resetWxFont } from '@/common/lib/font-size';
fontSize(document, window);
resetWxFont();

function App() {
  return <Routers />;
}

export default App;
