import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';
import { useDispatch } from 'react-redux';

import InputField from 'components/InputField';
import { Task } from 'redux/store';
import { delTask, editTask, onChecked } from 'redux/actions/tasks';

const StyledListItem = styled(ListItem)`
  border: 1px solid gray;
  margin-top: -1px;
`;

interface Props {
  note: Task;
}

const NoteItem: React.FC<Props> = ({ note }) => {
  const [toggleDescription, setToggleDescription] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(note.title);

  const [description, setDescription] = useState<string | ''>(note.description);
  const dispatch = useDispatch();

  const onToggleDescription = (id: number) => () => {
    if (isEdit) return;
    setToggleDescription(!toggleDescription);
  };

  const onDelClick = () => {
    dispatch(delTask(note.id));
  };

  function handleToggle(id: number) {
    return undefined;
  }

  const onToggleEdit = (e: any) => {
    setToggleDescription(false);
    setIsEdit(!isEdit);
  };

  const onTextChange = (e: any) => {
    const { value, name } = e.target;
    name === 'title' ? setTitle(value) : setDescription(value);
  };

  const onDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const onEditSubmit = () => {
    dispatch(editTask({ ...note, title, description }));
    setIsEdit(false);
  };

  const onCheckedClick = () => {
    dispatch(onChecked(note.id));
  };

  return (
    <>
      <StyledListItem
        key={note.id}
        secondaryAction={
          <>
            <IconButton edge="end" style={{ margin: 0 }} onClick={onToggleEdit}>
              <img src={'/pencil-square.svg'} />
            </IconButton>
            <IconButton edge="end" style={{ margin: 0 }} onClick={onDelClick}>
              <img src={'/trash.svg'} />
            </IconButton>
          </>
        }
        disablePadding>
        <ListItemButton onClick={handleToggle(note.id)}>
          <ListItemIcon>
            <Checkbox checked={note.checked} onChange={onCheckedClick} />
          </ListItemIcon>
          {isEdit ? (
            <InputField value={title} variant="standard" onChange={onTextChange} name={'title'} />
          ) : (
            <ListItemText>
              <div
                onClick={onToggleDescription(note.id)}
                style={{ width: '100%', textDecoration: note.checked ? 'line-through' : 'none' }}>
                {note.title}
              </div>
            </ListItemText>
          )}
        </ListItemButton>
      </StyledListItem>
      {toggleDescription ? <StyledListItem>{note.description}</StyledListItem> : null}
      {isEdit ? (
        <div style={{ position: 'relative' }}>
          <InputField
            value={description}
            onChange={onDescriptionChange}
            style={{ marginTop: '-1px', marginBottom: '15px' }}>
            {note.description}
          </InputField>
          <Button
            onClick={onEditSubmit}
            variant={'contained'}
            style={{ position: 'absolute', bottom: '18px', right: '2px' }}>
            Сохранить
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default NoteItem;
