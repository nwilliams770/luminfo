import React, { useState } from 'react';
import AccordionHeader from './AccordionHeader/AccordionHeader';
import AccordionContent from './AccordionContent/AccordionContent';
import { parseConfig } from '../../helpers';

const Accordion = () => {
  const [isOpen, setOpen] = useState(false);

    return (
      <div className="accordion-wrapper">
        <AccordionHeader setOpen={setOpen} isOpen={isOpen}/>
        <AccordionContent isOpen={isOpen} />
      </div>
    )

}

export default Accordion;
