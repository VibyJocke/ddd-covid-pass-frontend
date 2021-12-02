import './App.css';
import { Button, Modal, Form, Input } from "antd";
import 'antd/dist/antd.css'
import { useState } from "react";
import axios from "axios"
function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    axios.post("/covid-pass/patient/register", {personal_number:"12333223-3223"})
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
          className="App-logo" alt="logo" />
        <h1>Covid pass</h1>
        Welcome to the future of smittspridningsfixande
        <Button onClick={showModal}>Register Patient</Button>
        <Modal title="Register patient" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <Form labelAlign="right" labelCol={{ span: 12 }}>
            <Form.Item name="name" label="Name">
              <Input type="text"></Input>
            </Form.Item>
            <Form.Item name="personal_number" label="Personal number">
              <Input type="text"></Input>
            </Form.Item>

          </Form>
        </Modal>
      </header>
    </div>
  );
}

export default App;
