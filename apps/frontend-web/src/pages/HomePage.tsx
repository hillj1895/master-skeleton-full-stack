import React from 'react';
import { Message } from '@internal/types'
import { Button, Variant } from '@internal/shared-ui';
import { useLocation } from 'react-router-dom';


export const HomePage: React.FC = () => {
  const message: Message = { message: 'Hello from the frontend' };
  // const location = useLocation()
  return (
    <div className='container mx-auto'>
      <div>Path : {useLocation().pathname}</div>
      <Button onClick={() => console.log('Button click works!')} variant={Variant.PRIMARY}>{message.message}</Button>
      <Button onClick={() => console.log('Button click works!')} variant={Variant.SECONDARY}>{message.message}</Button>
      <Button onClick={() => console.log('Button click works!')} variant={Variant.TERTIARY}>{message.message}</Button>
    </div>
  );
}

export default HomePage;