import './App.css';
import {Button, Form, Input, Modal} from "antd"
import 'antd/dist/antd.css'
import {useState} from "react"
import axios from "axios"

function App() {
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false)
  const handleRegisterOk = () => {
    axios.post("/covid-pass/patient/register", {personal_number: "12333223-3223", name: "Torkel"})
    setIsRegisterModalVisible(false)
  };

  const [isVaccinateModalVisible, setIsVaccinateModalVisible] = useState(false)
  const handleVaccinateOk = () => {
    axios.post("/covid-pass/patient/vaccinate", {
      personal_number: "12333223-3223",
      injection_date: "2021-12-04T17:45:55.9483536",
      vaccine_type: "spikevax"
    })
    setIsVaccinateModalVisible(false)
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={"https://www.lr.se/images/18.2868ebc21711e3a43527642/1586246865764/SARS-CoV-2_without_background-770px.png"}
          className="App-logo" alt="logo"/>
        <h1>Covid pass</h1>
        Welcome to the future of smittspridningsfixande
        <Button onClick={() => setIsRegisterModalVisible(true)}>Register Patient</Button>
        <Modal title="Register patient"
               visible={isRegisterModalVisible}
               onOk={handleRegisterOk}
               onCancel={() => setIsRegisterModalVisible(false)}>
          <Form labelAlign="right" labelCol={{span: 12}}>
            <Form.Item name="name" label="Name">
              <Input type="text"/>
            </Form.Item>
            <Form.Item name="personal_number" label="Personal number">
              <Input type="text"/>
            </Form.Item>
          </Form>
        </Modal>
        <Button onClick={() => setIsVaccinateModalVisible(true)}>Register Vaccination</Button>
        <Modal title="Register vaccination"
               visible={isVaccinateModalVisible}
               onOk={handleVaccinateOk}
               onCancel={() => setIsVaccinateModalVisible(false)}>
          <Form labelAlign="right" labelCol={{span: 12}}>
            <Form.Item name="personal_number" label="Personal number">
              <Input type="text"/>
            </Form.Item>
            <Form.Item name="vaccine_type" label="Vaccine type">
              <Input type="text"/>
            </Form.Item>
            <Form.Item name="injection_date" label="Date">
              <Input type="date"/>
            </Form.Item>
          </Form>
        </Modal>
      </header>
    </div>
  );
}

export default App;
