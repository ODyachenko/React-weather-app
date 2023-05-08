import { MdAddLocationAlt } from 'react-icons/md';
import { useState } from 'react';
import Field from './Field';
import './styles.css';

function Location({ location, setLocation }) {
  const [isEdit, setIsEdit] = useState(false);

  function changeEditHandler() {
    setIsEdit(!isEdit);
  }

  return (
    <div className="location">
      {isEdit ? (
        <Field
          location={location}
          setLocation={setLocation}
          changeEditHandler={changeEditHandler}
        />
      ) : (
        <>
          <h2 className={`location__city`}>{location}</h2>
          <MdAddLocationAlt
            onClick={changeEditHandler}
            className="location__search"
          />
        </>
      )}
    </div>
  );
}

export default Location;
