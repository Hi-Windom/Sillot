import { createBoard } from '@wixc3/react-board';
import { DemoComponent } from '../../components/demo-component/demo-component';

export default createBoard({
    name: 'DemoComponent',
    Board: () => <DemoComponent />
});
