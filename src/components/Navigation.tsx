import React from 'react';
import { Button, List, ListItemButton, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from 'redux/store';
import { exitUser } from 'redux/actions/users';

const StyledHeaderWrapper = styled('div')`
  background: lightblue;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0 30px;
`;

const StyledNavListt = styled(List)`
  display: flex;
  flex-direction: row;
`;

const Navigation = () => {
  const store = useSelector((store: InitialState) => store);
  const { currentUserId } = store;
  const dispatch = useDispatch();

  const name = React.useMemo(() => {
    const user = store.users.find((user) => user.id === currentUserId);
    if (user) return user.name;
  }, [currentUserId]);

  const onExitClick = () => {
    dispatch(exitUser());
  };

  return (
    <StyledHeaderWrapper>
      <h1>My ToDo</h1>
      <StyledNavListt>
        <ListItemButton>
          <Link to="/">Home</Link>
        </ListItemButton>

        <ListItemButton>
          <Link to="/registration">{name ? 'hello ' + name : 'Регистрация / Вход'}</Link>
        </ListItemButton>
        {name ? <ListItemButton onClick={onExitClick}> Выход </ListItemButton> : null}
      </StyledNavListt>
    </StyledHeaderWrapper>
  );
};

export default Navigation;
