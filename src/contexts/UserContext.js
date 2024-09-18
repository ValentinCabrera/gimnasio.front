import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [example, setExample] = useState([]);

  function exampleFunction() {
    return "example";
  }

  return (
    <UserContext.Provider
      value={{
        example,
        setExample,
        exampleFunction
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
