import React from 'react';

const AccordionContent = ({ isOpen }) => {
  return (
  <div className={`accordion-content-wrapper ${isOpen ? '' : 'collapsed'}`}>
    {isOpen} content
  </div>
  );
}

export default AccordionContent;
