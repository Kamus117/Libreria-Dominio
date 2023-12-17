import React from 'react';

const FilterButtons = ({ categories, setFilteredCategory }) => {
    const handleFilterClick = (category) => {
        setFilteredCategory(category);
    };

    const handleResetClick = () => {
        setFilteredCategory(null);
    };

    return (
        <div className="filter-buttons">
            {categories.map((category) => (
                <button key={category} onClick={() => setFilteredCategory(category)}>
                    {category}
                </button>
            ))}
            <button onClick={handleResetClick}>Reset</button>
        </div>
    );
};

export default FilterButtons;