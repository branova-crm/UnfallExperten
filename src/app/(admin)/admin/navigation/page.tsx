import { getNavigation } from '@/lib/queries';
import NavigationEditorClient from './NavigationEditorClient';

export default async function AdminNavigationPage() {
    let navigation = null;
    try {
        navigation = await getNavigation('main');
    } catch { }

    return (
        <>
            <div className="admin-header">
                <h1>Navigation</h1>
            </div>
            <NavigationEditorClient navigation={navigation} />
        </>
    );
}
