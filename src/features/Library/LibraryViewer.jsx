import React, { useState } from 'react';
import books from '../../data/libraryBooks.json';
import './LibraryViewer.css'; // The new CSS file

function LibraryViewer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // State for the filter buttons

  const filteredBooks = books
    .filter(book => {
      // Filter by status first
      if (filterStatus === 'all') return true;
      return book.status.toLowerCase() === filterStatus;
    })
    .filter(book => {
      // Then filter by search term
      return book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
             book.author.toLowerCase().includes(searchTerm.toLowerCase());
    });

  return (
    <div className="library-container">
      <div className="library-header">
        <h1>Library Collection</h1>
        <input
          type="text"
          placeholder="Search by title or author..."
          className="search-input" // We can reuse this class style
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="filter-buttons">
          <button onClick={() => setFilterStatus('all')} className={filterStatus === 'all' ? 'active' : ''}>All</button>
          <button onClick={() => setFilterStatus('available')} className={filterStatus === 'available' ? 'active' : ''}>Available</button>
          <button onClick={() => setFilterStatus('issued')} className={filterStatus === 'issued' ? 'active' : ''}>Issued</button>
        </div>
      </div>

      <div className="table-container">
        <table className="book-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map(book => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <span className={`status-pill ${book.status.toLowerCase()}`}>
                    {book.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LibraryViewer;