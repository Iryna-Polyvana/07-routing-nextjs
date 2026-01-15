import NotesClient from '@/app/notes/filter/[...slug]/Notes.client';
type Props = {
    params: Promise<{ slug: string[]}>;
};

const NotesByCategory = async({params}: Props) => {
    const { slug } = await params;
    const tag = slug[0] === 'all' ? undefined : slug[0];
    
    return <div>
        <NotesClient tag={tag} />
    </div>
};

export default NotesByCategory;