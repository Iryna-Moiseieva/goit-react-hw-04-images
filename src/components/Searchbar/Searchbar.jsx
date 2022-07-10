import { useState } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AiOutlineSearch } from 'react-icons/ai';

import {
  SearchbarContainer,
  SearchbarForm,
  SearchFormButton,
  SearchButtonLabel,
  SearchFormInput,
} from './Searchbar.style';

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('Sorry, there are no images');
      return;
    }

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <SearchbarContainer>
      <SearchbarForm onSubmit={handleSubmit}>
        <SearchFormButton>
          <AiOutlineSearch size={24} />
          <SearchButtonLabel></SearchButtonLabel>
        </SearchFormButton>
        <SearchFormInput value={searchQuery} onChange={handleInputChange} />
      </SearchbarForm>
    </SearchbarContainer>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
