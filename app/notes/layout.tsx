'use client';
import { useState } from "react";
import { NotesContext } from "@/context/NotesContext";

type Props = {
    children: React.ReactNode;
};

export default function NotesLayout({ children }: Props) {
    const [search, setSearch] = useState('');

    return <NotesContext.Provider value={{ search, setSearch }}>
        <section>            
            {children}
        </section>
    </NotesContext.Provider>
}