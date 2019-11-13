import loginReducer from "./loginReducer";
import peopleReducer from "./peopleReducer";

const appReducer = ({ login, people }, action) => ({
  login: loginReducer(login, action),
  people: peopleReducer(people, action)
});

export default appReducer;
