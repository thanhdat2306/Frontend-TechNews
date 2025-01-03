import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { API_ENDPOINTS } from '../../config';

const Filter = ({ onApplyFilters }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortField, setSortField] = useState('createdAt');
  const [sortType, setSortType] = useState('desc');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [tagOptions, setTagOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);

  const fetchTags = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.TAGS);
      const result = await response.json();
      if (result.success) {
        setTagOptions(result.data.map(tag => ({ value: tag._id, label: tag.name })));
      } else {
        console.error('Error fetching tags:', result.message);
      }
    } catch (error) {
      console.error('Error fetching tags:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.CATEGORIES);
      const result = await response.json();
      if (result.success) {
        setCategoryOptions(result.data.map(category => ({ value: category._id, label: category.name })));
      } else {
        console.error('Error fetching categories:', result.message);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchTags();
    fetchCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onApplyFilters({
      sortField,
      sortType,
      startDate,
      endDate,
      selectedTags,
      selectedCategories,
      searchQuery,
    });
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#2d3748' : '#1a202c',
      borderColor: state.isFocused ? '#4a5568' : '#2d3748',
      color: '#e2e8f0',
      '&:hover': {
        borderColor: '#3b82f6',
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#1a202c',
      color: '#e2e8f0',
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#2d3748',
      color: '#e2e8f0',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: '#e2e8f0',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: '#e2e8f0',
      ':hover': {
        backgroundColor: '#3b82f6',
        color: '#e2e8f0',
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#a0aec0',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#e2e8f0',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#3b82f6' : '#1a202c',
      color: state.isFocused ? '#e2e8f0' : '#e2e8f0',
      '&:hover': {
        backgroundColor: '#3b82f6',
        color: '#e2e8f0',
      },
    }),
  };

  return (
    <div className='relative'>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className='bg-blue-500 text-white px-4 py-2 rounded flex items-center'
      >
        <FontAwesomeIcon icon={faFilter} className='mr-2' />
        Filter
        <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} className='ml-2' />
      </button>
      {isDropdownOpen && (
        <div className='absolute bg-white dark:bg-gray-800 dark:text-white shadow-lg rounded p-4 mt-2 w-full z-50 max-w-[300px]'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-[20px]'>
            <div className='flex flex-col gap-[10px]'>
              <select onChange={(e) => setSortField(e.target.value)} value={sortField} className='p-2 border rounded dark:bg-gray-700 dark:border-gray-600'>
                <option value="createdAt">Most Recent</option>
                <option value="views">Most Viewed</option>
                <option value="oldest">Oldest</option>
              </select>
              <div className='flex flex-col gap-[10px]'>
                <label className='text-gray-700 dark:text-gray-300'>Start Date</label>
                <input type="date" onChange={(e) => setStartDate(e.target.value)} value={startDate} className='p-2 border rounded dark:bg-gray-700 dark:border-gray-600' />
                <label className='text-gray-700 dark:text-gray-300'>End Date</label>
                <input type="date" onChange={(e) => setEndDate(e.target.value)} value={endDate} className='p-2 border rounded dark:bg-gray-700 dark:border-gray-600' />
              </div>
              <input type="text" placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} className='p-2 border rounded dark:bg-gray-700 dark:border-gray-600' />
              <Select
                isMulti
                options={tagOptions}
                onChange={setSelectedTags}
                value={selectedTags}
                placeholder="Select Tags"
                styles={customStyles}
                className='w-full'
              />
              <Select
                isMulti
                options={categoryOptions}
                onChange={setSelectedCategories}
                value={selectedCategories}
                placeholder="Select Categories"
                styles={customStyles}
                className='w-full'
              />
            </div>
            <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded mt-4 self-center'>
              Apply Filters
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Filter;