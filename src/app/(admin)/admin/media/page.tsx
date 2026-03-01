import { getAllMedia } from '@/lib/queries';
import MediaPageClient from './MediaPageClient';

export default async function AdminMediaPage() {
    let media: any[] = [];
    try {
        media = await getAllMedia();
    } catch { }

    return (
        <>
            <div className="admin-header">
                <h1>Medien</h1>
            </div>
            <MediaPageClient mediaItems={media} />
        </>
    );
}
