import React, { useReducer, createContext } from 'react';

import en from '../i18n/en_US.json';
import es from '../i18n/es_ES.json';

const LangActionType = {
    SET_LANGUAGE: 'SET_LANGUAGE'
  }

const langReducer = (state, action) => {
  switch(action.type) {
    case LangActionType.SET_LANGUAGE:
      return {
        language: action.payload
      }
    default:
      return state;
  }
}

const initialState = {
  language: 'es_ES'
}

export const LangContext = createContext();

const LangState = ({ children }) => {
  const [state, dispatch] = useReducer(langReducer, initialState);

  const setLanguage = (lang) => {
    localStorage.setItem('language', lang);
    dispatch({
      type: LangActionType.SET_LANGUAGE,
      payload: lang
    });
  }

  const translate = (key) => {
    const { language } = state;
    let langData;

    if(language === 'en_US') {
      langData = en;
    }else if(language === 'es_ES') {
      langData = es;
    }

    return langData[key];
  }

  return(
    <LangContext.Provider value={{ state, dispatch: { setLanguage, translate }}}>
      {children}
    </LangContext.Provider>
  );
}

export default LangState;