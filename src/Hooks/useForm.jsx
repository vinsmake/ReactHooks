import { useState } from "react";

export const useForm = ( defaultForm = {}) => {


    const [formState, setFormState ] = useState( defaultForm );
    
      const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
          //we destructure formState to mantain the form values
          ...formState,
          //then, we change what is bein modofied in name to the value propierty (This could mean: name=username/email value=vinsmake/vinsmake@mail.com)
          [name]: value
        });
      }

      const onResetForm = () => {
        setFormState(defaultForm)
      }
    

/* ...formState returns the desestructured data */
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}


