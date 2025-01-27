import { UncontrolledTreeEnvironment, Tree, StaticTreeDataProvider } from 'react-complex-tree'
import 'react-complex-tree/lib/style-modern.css'
import { longTree } from './treedata'


export function Filetree() {
    return (
        <UncontrolledTreeEnvironment
            dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}
            getItemTitle={item => item.data}
            viewState={{}}
        >
            <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
        </UncontrolledTreeEnvironment>
    )
}