import { Message } from '@master-skeleton-full-stack/types'

export function App() {
  const message: Message = { message: 'Hello world' };
  return (
    <div>
      <div className="text-center">{message.message}</div>
    </div>
  );
}

export default App;
