import React from 'react';
import Notes from 'components/Notes';
import Alert from 'components/Alert';
import SearchField from 'components/SearchField';
import AddTask from 'components/AddTask';

const Home = () => {
  return (
    <>
      <Alert />
      <SearchField />
      <AddTask />
      <Notes />
    </>
  );
};

export default Home;
