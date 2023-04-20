import {Button, Divider, Form, Input, Typography, message ,} from "antd"
import { FacebookFilled, GoogleOutlined, TwitterOutlined } from "@ant-design/icons"
import './App.css';


function App() {
  const login=()=>{
    message.success('Login Sucessfull!')
  }
  return (
  <div className="App">
    <div className="background">
      <Form className="form" onFinish={login}>
       <Typography.Title style={{fontFamily:'sans-serif'}}>Welcome Back!</Typography.Title>
         <Form.Item  rules={[
             {
              required:true,
              type:"email",
              message:"please enter valid email",
             },
           ]}
              name={"myEmail"}>
              <Input  placeholder="Email"/>
         </Form.Item>

         <Form.Item rules={[
              {
               required:true,
               message:"please enter password",
              },
            ]}
               name={"myPassword"}>
              <Input.Password  placeholder="Passsword"/>
          </Form.Item>

        <Button style={{backgroundColor:"rgba(13,59,67)"}} type='primary' htmlType="submit" block> Login</Button>
        <Divider style={{borderColor:"black"}}>or Login with</Divider>

        <div className="social">
          <GoogleOutlined className="icons" onClick={login}/>
          <FacebookFilled className="icons" onClick={login}/>
          <TwitterOutlined className="icons" onClick={login}/>
        </div>

      </Form>
    </div>
  </div>

  );
}

export default App;
