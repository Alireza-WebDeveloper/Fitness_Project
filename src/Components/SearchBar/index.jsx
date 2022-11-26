import { Box, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon_Search } from '../../Utils';
import { fetchGetExerciseSearch } from '../../feature/exerciseSearchSlice';
import { useDispatch } from 'react-redux';
import { ActiveBodyPartContext } from '../../Context/ActiveBodyPart';
import { useEffect } from 'react';
import { ActiveCurrentPageContext } from '../../Context/ActiveCurrentPage';
const SearchBar = () => {
  const { activeBodyPart, handleUpdateBodyPart } = ActiveBodyPartContext();
  const { handleUpdateCurrengPage } = ActiveCurrentPageContext();
  const [query, setQuery] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateQuery = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate('/');
    handleUpdateBodyPart(query.toLowerCase());
    dispatch(fetchGetExerciseSearch(query));
    setQuery('');
  };
  useEffect(() => {
    dispatch(fetchGetExerciseSearch(activeBodyPart));
  }, [activeBodyPart]);
  return (
    <>
      <form
        onSubmit={handleSubmitForm}
        style={{ display: 'flex', alignItems: 'center', position: 'relative' }}
      >
        <TextField
          inputProps={{ 'aria-label': 'searching query of excercies' }}
          placeholder="type to search..."
          sx={{
            width: '100%',
            input: {
              '::placeholder': {
                textTransform: 'capitalize',
              },
            },
          }}
          value={query}
          onChange={updateQuery}
        />
        <IconButton
          type="submit"
          style={{ position: 'absolute', right: 0, zIndex: '1' }}
        >
          {Icon_Search}
        </IconButton>
      </form>
    </>
  );
};

export default SearchBar;
