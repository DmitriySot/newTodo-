import React, { useState } from 'react';
import InputField from 'components/InputField';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { addTask } from 'redux/actions/tasks';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState<string>('');

  const dispatch = useDispatch();

  const onAddTask = () => {
    dispatch(
      addTask({
        id: Math.random(),
        title,
        description,
        checked: false,
      }),
    );
    setTitle('');
    setDescription('');
  };

  const onInputChange = (e: any) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setDescription(e.target.value);
    }
  };

  return (
    <>
      <InputField value={title} onChange={onInputChange} label={'Введите задание'} name={'title'} />
      <InputField
        value={description}
        onChange={onInputChange}
        label={'Введите описание задания'}
        name={'description'}
      />
      <Button disabled={!title.length} variant={'contained'} onClick={onAddTask}>
        add item
      </Button>
    </>
  );
};

export default AddTask;
