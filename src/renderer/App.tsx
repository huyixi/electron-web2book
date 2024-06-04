import * as React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BookSection from './components/BookSection';

const App = () => (
  <div style={{ display: 'flex', height: '100vh' }}>
    <Sidebar />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ padding: '20px', overflowY: 'scroll' }}>
        <BookSection title="Continue" books={['Book 1', 'Book 2', 'Book 3']} />
        <BookSection title="Top Picks" books={['Book 4', 'Book 5', 'Book 6']} />
      </div>
    </div>
  </div>
);

export default App;
