import { fetchNotes } from '@/lib/api';
import NotesClient from './filter/[...slug]/NotesClient';
import { QueryClient } from '@tanstack/react-query';

const NotesPage = async (): Promise<JSX.Element> => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['notes', 1, ''],
        queryFn: () => fetchNotes({page: 1, perPage: 12, search: ''})
    })

    return (
            <NotesClient />
    );
}
export default NotesPage;
