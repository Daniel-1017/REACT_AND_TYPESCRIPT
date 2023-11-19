import { useRef } from 'react';
import Button from './components/Button';
import Form, { FormHandle } from './components/Form';
import Input from './components/Input';

function App() {
  const customForm = useRef<FormHandle>( null )

  const handleSave = ( data: unknown ) => {
    const extractData = data as { name: string, age: number };
    console.log( extractData );
    customForm.current?.clear()
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type='text' label='Name' id='name' />
        <Input type='number' label='Age' id='age' />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
