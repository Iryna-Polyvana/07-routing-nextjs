'use client';

import css from './NotesToolbar.module.css';
import SearchBox from '../SearchBox/SearchBox';
import Modal from '../Modal/Modal';
import NoteForm from '../NoteForm/NoteForm';
import { useState } from 'react';

interface NotesToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function NotesToolbar({
  search,
  onSearchChange,
}: NotesToolbarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={css.toolbar}>
      <SearchBox value={search} onChange={onSearchChange} />

      <button className={css.button} onClick={() => setIsModalOpen(true)}>
        Create note +
      </button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <NoteForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}
