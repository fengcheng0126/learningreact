import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter By Year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;