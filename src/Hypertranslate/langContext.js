import React, { useState, createContext, useContext } from "react";

const LangContext = createContext();

const Lang = ({ defaultLang, children, translations }) => {
  const [lang, setLang] = useState(defaultLang);

  const hyperTranslate = (text) => {
    // 처음에는 en === en
    if (lang === defaultLang) {
      return text;
    } else {
      // 버튼 클릭시 es === en
      return translations[lang][text]; // 객체안의 객체에 접근시 2차원의 배열 이용하고 그 이상도 다차원의 배열로 접근
    }
  };

  return (
    <>
      {/* t:hyperTranslate는 객체다 */}
      <LangContext.Provider value={{ setLang, t: hyperTranslate }}>
        {children}
      </LangContext.Provider>
    </>
  );
};

export const useSetLang = () => {
  const { setLang } = useContext(LangContext);
  return setLang;
};

export const useT = () => {
  const { t } = useContext(LangContext);
  return t;
};

export default Lang;
