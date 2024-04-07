import React, { useState } from 'react';



interface EditableInputProps {
    initValue: string;
}

export const EditableInput = ({initValue}: EditableInputProps) => {
  const [state, setState] = useState({
    isEditable: false,
    inputValue: initValue,
  });

  const handleEditClick = () => {
    setState((prevState) => ({ ...prevState, isEditable: !prevState.isEditable }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, inputValue: event.target.value }));
  };

  return (
    <div>
      <input
        type="text"
        value={state.inputValue}
        disabled={!state.isEditable}
        onChange={handleInputChange}
        style={{fontSize:24, color:'#1C1D1F'}}
      />
      <button onClick={handleEditClick} style={{color:'#2986FE', fontWeight:'bold', fontSize:24}}>
        {state.isEditable ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};
