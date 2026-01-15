'use client';
import css  from './NotesToolbar.module.css'
import { useState } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Modal from '../Modal/Modal';
import NoteForm from '../NoteForm/NoteForm';
import { useNotesContext } from '@/context/NotesContext';

export const NotesToolbar = () => {
    const { search, setSearch } = useNotesContext();

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <div className={css.toolbar}>
            <SearchBox
                value={search}
                onChange={setSearch}
            />
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
};
