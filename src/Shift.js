import React from "react";

const Shift = ({ onChange, numOfShifts }) => {
    const options = Array(numOfShifts)
        .fill(0)
        .map((_, num) => (
            <option value={num + 1} key={num}>
                {num + 1}
            </option>
        ));

    return (
        <select onChange={onChange}>
            <option value=''>--Please choose a shift value--</option>
            {options}
        </select>
    );
};

Shift.defaultProps = {
    numOfShifts: 25
};

export default Shift;
