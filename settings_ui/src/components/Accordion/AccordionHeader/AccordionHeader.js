import React from 'react';

const AccordionHeader = ({ setOpen, isOpen }) => {

  const handleCheckboxClick = (evt) => {
    evt.stopPropagation();
    console.log("checkbox clicked")
    // Send SET_ACTIVE action
  }

  return (
    <div className="accordion-header" onClick={() => setOpen(!isOpen)}>
      <input type="checkbox" value="" onClick={(evt) => handleCheckboxClick(evt)}/>
      header title
    </div>
  );
}

export default AccordionHeader;
