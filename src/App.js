import Test from './components/Test.js';
import Test2 from './components/Test2.js';
import State from './components/State.js';
import './App.css';
import Props from './components/Props.js';
import StateChange from './components/StateChange.js';
import CompUnmount from './components/CompUnmount.js';
import InvokeCompUnmount from './components/InvokeCompUnmount.js';
import LifeCyc1 from './components/LifeCyc1.js';
import LifeCyc2 from './components/LifeCyc2.js';

const App = () => {
  return (
    <>
      <h1>Welcome to the World</h1>
      <Test />
      <Test2 />
      <Props name="PierceProps" />
      <State />
      <StateChange />
      <CompUnmount />
      <InvokeCompUnmount />
      <LifeCyc1 />
      <LifeCyc2 />
    </>
  );
};

export default App;
