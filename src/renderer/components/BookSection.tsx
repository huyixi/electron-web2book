import * as React from 'react';

const BookSection = ({ title, books }: { title: string; books: string[] }) => (
  <div style={{ marginBottom: '20px' }}>
    <h2>{title}</h2>
    <div style={{ display: 'flex', gap: '20px' }}>
      {books.map((book) => (
        <div
          key={book}
          style={{
            width: '200px',
            height: '300px',
            background: '#eaeaea',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {book}
        </div>
      ))}
    </div>
  </div>
);

export default BookSection;
