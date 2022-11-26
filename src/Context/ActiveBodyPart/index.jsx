import React, { useState } from 'react';
import { useContext } from 'react';
const Context = React.createContext();

const ActiveBodyPartStore = (props) => {
  const [activeBodyPart, setActiveBodyPart] = useState('all');
  const handleUpdateBodyPart = (StringOfBodyPart) => {
    console.log(StringOfBodyPart);
    setActiveBodyPart(StringOfBodyPart);
  };
  return (
    <Context.Provider value={{ activeBodyPart, handleUpdateBodyPart }}>
      {props.children}
    </Context.Provider>
  );
};

const ActiveBodyPartContext = () => {
  const { activeBodyPart, handleUpdateBodyPart } = useContext(Context);
  return { activeBodyPart, handleUpdateBodyPart };
};

export { ActiveBodyPartContext, ActiveBodyPartStore };
