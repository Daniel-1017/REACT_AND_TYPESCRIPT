import { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: ( value: unknown ) => void;
};

export type FormHandle = {
  clear: () => void;
}

const Form = forwardRef<FormHandle, FormProps>( ( { onSave, children, ...props }, ref ) => {
  const form = useRef<HTMLFormElement>( null )

  useImperativeHandle( ref, () => {
    return {
      clear() {
        form.current?.reset();
      }
    }
  } )

  const handleSubmit = ( event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();

    const formData = new FormData( event.currentTarget );
    const data = Object.fromEntries( formData );
    onSave( data )
  }

  return (
    <form {...props} onSubmit={handleSubmit} ref={form}>
      {children}
    </form>
  );
} )

export default Form;
