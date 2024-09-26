import { Message } from '@master-skeleton-full-stack/types'
import { Button, Variant } from '@master-skeleton-full-stack/shared-ui';

export function App() {
  const message: Message = { message: 'Hello world' };
  return (
    <div className='container mx-auto'>
      <Button onClick={() => console.log('Button click works!')} variant={Variant.PRIMARY}>{message.message}</Button>
      <Button onClick={() => console.log('Button click works!')} variant={Variant.SECONDARY}>{message.message}</Button>
      <Button onClick={() => console.log('Button click works!')} variant={Variant.TERTIARY}>{message.message}</Button>
    </div>
  );
}

export default App;
