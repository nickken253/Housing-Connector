import React, { useState } from 'react';



interface EditableInputProps extends React.HTMLAttributes<HTMLDivElement> {
  initValue: string;
}
export const EditableInput = ({ initValue }: EditableInputProps) => {
  const [state, setState] = useState({
    isEditable: true,
    inputValue: initValue,
  });

  const handleEditClick = () => {
    setState((prevState) => ({ ...prevState, isEditable: !prevState.isEditable }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, inputValue: event.target.value }));
  };

  return (
    <div className='w-full flex'>
      <input
        className='w-full mx-10 border rounded-lg bg-gray-100 h-10'
        type="text"
        value={state.inputValue}
        disabled={!state.isEditable}
        onChange={handleInputChange}
      />
      <button onClick={handleEditClick} className='min-w-[50px] font-medium text-xl text-[#2986FE]'>
        {state.isEditable ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};
