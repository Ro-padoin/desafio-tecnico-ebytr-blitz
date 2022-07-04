import PropTypes from 'prop-types';
import { createContext, useRef, useState } from 'react';

export const MyContext = createContext();

function MyContextProvider({ children }) {
  const [token, setToken] = useState([]);
  const [references, setReferences] = useState({
    firstNameRef: useRef(),
    lastNameRef: useRef(),
    emailRef: useRef(),
    passwordRef: useRef(),
    titleRef: useRef(),
    descriptionRef: useRef(),
  });

  const clearFields = () => {
    const {
      firstNameRef,
      lastNameRef,
      emailRef,
      passwordRef,
      titleRef,
      descriptionRef,
    } = references;
    if (emailRef.current) emailRef.current.value = '';
    if (passwordRef.current) passwordRef.current.value = '';
    if (firstNameRef.current) firstNameRef.current.value = '';
    if (lastNameRef.current) lastNameRef.current.value = '';
    if (titleRef.current) titleRef.current.value = '';
    if (descriptionRef.current) descriptionRef.current.value = '';
  };

  const contextValue = {
    token,
    setToken,
    references,
    setReferences,
    clearFields,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

MyContextProvider.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default MyContextProvider;
