import './App.css';
import {Button, Divider, Form, Input, Modal} from "antd"
import 'antd/dist/antd.css'
import {useState} from "react"
import axios from "axios"

function App() {
  const [registerForm] = Form.useForm();
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false)
  const handleRegisterOk = (data) => {
    axios.post("/covid-pass/patient/register", data)
      .then(() => setIsRegisterModalVisible(false))
      .catch((err) => alert(err))
  };

  const [vaccinateForm] = Form.useForm();
  const [isVaccinateModalVisible, setIsVaccinateModalVisible] = useState(false)
  const handleVaccinateOk = (data) => {
    axios.post("/covid-pass/patient/vaccinate", data)
      .then(() => setIsVaccinateModalVisible(false))
      .catch((err) => alert(err))
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Covid pass</h1>
        <img
          src={"https://www.lr.se/images/18.2868ebc21711e3a43527642/1586246865764/SARS-CoV-2_without_background-770px.png"}
          style={{margin: "100px", width: "300px", height: "auto"}}
          className="App-logo" alt="logo"/>
        <div style={{margin: "20px"}}>
          <Button type="primary" size="large" onClick={() => setIsRegisterModalVisible(true)}>Register patient</Button>
          <Divider type="vertical"/>
          <Button size="large" onClick={() => setIsVaccinateModalVisible(true)}>Register vaccination</Button>
        </div>

        <Modal title="Register patient"
               visible={isRegisterModalVisible}
               footer={null}
               onCancel={() => setIsRegisterModalVisible(false)}>
          <Form
            form={registerForm}
            name="register_form"
            labelAlign="right"
            labelCol={{span: 12}}
            onFinish={handleRegisterOk}
          >
            <Form.Item name="name" label="Name" rules={[{required: true}]}>
              <Input type="text"/>
            </Form.Item>
            <Form.Item name="personal_number" label="Personal number" rules={[{required: true}]}>
              <Input type="text"/>
            </Form.Item>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <Button type="primary" htmlType={"submit"}>
                Submit
              </Button>
            </div>
          </Form>
        </Modal>

        <Modal title="Register vaccination"
               visible={isVaccinateModalVisible}
               footer={null}
               onCancel={() => setIsVaccinateModalVisible(false)}>
          <Form
            form={vaccinateForm}
            name="vaccinate_form"
            labelAlign="right"
            labelCol={{span: 12}}
            onFinish={handleVaccinateOk}>
            <Form.Item name="personal_number" label="Personal number" rules={[{required: true}]}>
              <Input type="text"/>
            </Form.Item>
            <Form.Item name="vaccine_type" label="Vaccine type" rules={[{required: true}]}>
              <Input type="text"/>
            </Form.Item>
            <Form.Item name="injection_date" label="Date" rules={[{required: true}]}>
              <Input type="datetime-local"/>
            </Form.Item>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <Button type="primary" htmlType={"submit"}>
                Submit
              </Button>
            </div>
          </Form>
        </Modal>
      </header>
    </div>
  );
}

export default App;
