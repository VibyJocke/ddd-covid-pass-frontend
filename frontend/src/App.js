import './App.css';
import {Button, Modal} from "antd";
import 'antd/dist/antd.css'
import {useState} from "react";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={"https://www.lr.se/images/18.2868ebc21711e3a43527642/1586246865764/SARS-CoV-2_without_background-770px.png"}
          className="App-logo" alt="logo"/>
        <h1>Covid pass</h1>
        Welcome to the future of smittspridningsfixande
        <Button onClick={showModal}>Register Patient</Button>
        <Modal title="Register patient" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div>Hello modal</div>
        </Modal>
      </header>
    </div>
  );
}

export default App;
