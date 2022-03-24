import React from 'react';
import { List } from '@mui/material';

import NoteItem from 'components/NoteItem';
import { InitialState } from 'redux/store';
import { useSelector } from 'react-redux';

const Notes = () => {
  const store = useSelector((store: InitialState) => store);
  const { search, tasks, currentUserId } = store;
  const lowerSearch = search.toLowerCase();

  const filteredTasks = React.useMemo(() => {
    return tasks.filter((task) => {
      if (currentUserId && currentUserId !== task.userId) {
        return false;
      }
      if (!currentUserId && task.userId) {
        return false;
      }
      if (search && !task.title.toLowerCase().includes(lowerSearch)) {
        return false;
      }
      return true;
    });

    // return searchedTasks || tasks;
  }, [currentUserId, search, JSON.stringify(tasks)]);

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {filteredTasks.map((note) => {
        return <NoteItem note={note} key={note.id} />;
      })}
    </List>
  );
};

export default Notes;
