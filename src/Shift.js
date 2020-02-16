import React from "react";

const Shift = ({ onChange, numOfShifts }) => {
    const options = Array(numOfShifts + 1)
        .fill(0)
        .map((_, num) => (
            <option value={num} key={num} className={`Option Option-${num}`}>
                {num}
            </option>
        ));

    return (
        <select onChange={onChange} className='Shift'>
            <option value={0}>--Please choose a shift value--</option>
            {options}
        </select>
    );
};

Shift.defaultProps = {
    numOfShifts: 25
};

export default Shift;
