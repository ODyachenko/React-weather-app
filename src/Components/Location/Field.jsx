import { useState } from 'react';

function Field({ changeEditHandler, location, setLocation }) {
  const [value, setValue] = useState(location);

  function onBlurHandler() {
    if (value) {
      changeEditHandler();
      setLocation(value);
    }
  }

  return (
    <input
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onBlur={onBlurHandler}
      type="text"
      placeholder="Write your city"
      className="location__search--input"
    />
  );
}

export default Field;
