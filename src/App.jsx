import classes from "./components/styles/main.module.scss";
import Form from "./components/Form/Form";
// import ModalWindow from "./components/UI/Modal/ModalWindow";

const App = (props) => {
  return (
    <div className={classes.app} style={{ width: "100%" }}>
      {/* <ModalWindow></ModalWindow> */}
      <Form title="JavaScript Posts" />
    </div>
  );
};

export default App;
