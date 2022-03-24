import React from 'react';
import InputField from 'components/InputField';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from 'redux/store';
import { searchTask } from 'redux/actions/tasks';

const SearchField = () => {
  const dispatch = useDispatch();

  const onSearchChange = (e: any) => {
    dispatch(searchTask(e.target.value));
  };

  const store = useSelector((store: InitialState) => store);

  const { search } = store;

  return <InputField value={search} onChange={onSearchChange} label={'Поиск'} />;
};

export default SearchField;
