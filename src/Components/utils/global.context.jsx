import { createContext, useMemo, useState } from "react";

export const initialState = {theme: "ligth", data: []}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState(initialState.theme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Utiliza useMemo para memoizar el valor del contexto y evitar renders innecesarios
  const contextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);
  
  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
