import React from "react";
import Userfind from "./component/Userfind";

const App = () => {
  React.useEffect(() => {
    gitHubusers();
  }, []);
  const [state, setstate] = React.useState([]);

  const gitHubusers = async () => {
    try {
      let response = await fetch("https://api.github.com/users");
      let user = await response.json();
      //console.log(user);
      setstate(user);
    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div>
      <h1
        style={{ textAlign: "center" }}
        className="animated bounce delay-2s red-text"
      >
        React hooks app
      </h1>
      {state.map(login => {
        return (
          <Userfind
            name={login.login}
            image={login.avatar_url}
            key={login.id}
          />
        );
      })}
    </div>
  );
};

export default App;
