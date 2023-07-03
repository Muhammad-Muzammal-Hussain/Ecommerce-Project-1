import React, { useState, useRef } from 'react';
// import { FaTshirt, FaShoePrints, FaChartLine, FaAngleDown, FaAngleUp, FaSocks } from 'react-icons/fa';

const options = [
  { value: 'Clothes', label: 'Clothes',    },
  { value: 'Shoes', label: 'Shoes',  },
  { value: 'Stocks', label: 'Socks',    },
];

export default function CustomDropdown() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Attach click event listener to handle outside clicks
  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative inline-block text-left' ref={dropdownRef}>
      <div>
        <button
          type='button'
          className='w-[18rem] h-[3.5rem] flex items-center justify-between px-3 py-2 border border-gray-300 bg-white rounded-t-lg shadow-sm text-sm focus:outline-none   mb-[-5px] transition'
          onClick={toggleDropdown}
        >
          {selectedOption ? (
            <>
              {/* <span className=''>{selectedOption.icon}</span> */}
              <span className='text-lg'>{selectedOption.label}</span>
            </>
          ) : (
            <span className='text-gray-400 text-xl'>All Categories</span>
          )}
          <span>
            {/* <FaAngleDown size={20}  /> */}
          </span>
        </button>
      </div>
      {/* Dropdown list */}
      {isOpen && (
        <div className='absolute z-[100] mt-2 w-[17rem] bg-white rounded-md shadow-lg'>
          <ul
            tabIndex='-1'
            role='listbox'
            aria-labelledby='listbox-label'
            aria-activedescendant='listbox-item-3'
            className='max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'
          >
            {options.map((option) => (
              <li
                key={option.value}
                id={`listbox-item-${option.value}`}
                role='option'
                onClick={() => handleOptionSelect(option)}
                className='cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-gray-100'
              >
                <div className='flex items-center '>
                  <span className='mr-2'>{option.icon}</span>
                  <span className='text-lg'>{option.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
