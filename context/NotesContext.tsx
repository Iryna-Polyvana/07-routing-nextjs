'use client';

import { createContext, useContext } from 'react';

type NotesContextValue = {
  search: string;
  setSearch: (value: string) => void;
};

export const NotesContext = createContext<NotesContextValue | null>(null);

export const useNotesContext = () => {
  const context = useContext(NotesContext);

  if (!context) {
    throw new Error(
      'useNotesContext must be used within NotesContext.Provider'
    );
  }

  return context;
};
