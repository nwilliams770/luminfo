import React, { useMemo } from 'react';
import AccordionContext from '../../context/Accordion';
import useAccordionContext from './hooks';

const Accordion = ({
  activeEventKey,
  onToggle,
  children,
  ...otherProps
}) => {
  const context = useMemo(() => {
    return { activeEventKey, onToggle };
  }, [activeEventKey, onToggle]);

  return (
    <AccordionContext.Provider value={context}>
      <Component {...otherProps}>{children}</Component>
    </AccordionContext.Provider>
  );
};

const Collapse = ({
  eventKey,
  children,
  ...otherProps
}) => {
  const activeEventKey = useAccordionContext();

  return activeEventKey === eventKey ? (
    <Component {...otherProps}>{children}</Component>
  ) : null;
};

const useAccordionClick = (eventKey, onClick) => {
  const { onToggle, activeEventKey } = useAccordionContext();
  return (evt) => {
    onToggle(eventKey === activeEventKey ? null : eventKey);

    if (onClick) {
      onClick(evt);
    }
  };
};

const Toggle = ({
  eventKey,
  onClick,
  children
}) => {
  const accordionClick = useAccordionClick(eventKey, onClick);

  return (
    <Component onClick={accordionClick} {...otherProps}>
      {children}
    </Component>
  )
};

Accordion.Toggle = Toggle;
Accordion.Collapse = Collapse;

export default Accordion;
