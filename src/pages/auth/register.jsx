import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, DatePicker, Form, Input, message, Modal, Select } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import '../../assets/css/Register.css';
import video from "../../assets/videos/univclip1.mp4"

export default function Register() {
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

  const onFinish = (values) => {
    if (values.password !== values.confirmPassword) {
      message.error('Password does not match');
      return;
    }
    
    setIsModalVisible(true); // Show modal directly for demonstration purposes
  };

  return (
    <>
      <section className="signUp">
      <h2>Welcome, New User!</h2>
      <p>We're excited to have you on board. Please fill in your details below:</p>
      <video className="video-bg" autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>

        <div className="signup-container">
          <Form
            name="normal_login"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
                {
                  type: 'email',
                  message: 'Please input a valid email!',
                },
              ]}
            >
              <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
                {
                  type: 'string',
                  message: 'Must not contain numbers and special characters',
                },
                {
                  min: 3,
                  message: 'Name must be at least 3 characters',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="birthDate"
              rules={[
                {
                  required: true,
                  message: 'Please input your Birth date!',
                },
              ]}
            >
              <DatePicker format="DD-MM-YYYY" placeholder="Birth Date" />
            </Form.Item>

            <Form.Item
              name="gender"
              rules={[
                {
                  required: true,
                  message: 'please select you gender!',
                },
                {
                  type: 'enum',
                  enum: ['Male', 'Female', 'Other'],
                  message: 'Please select from given options',
                },
              ]}
            >
              <Select placeholder="Gender">
                <Select.Option value="Male">Male</Select.Option>
                <Select.Option value="Female">Female</Select.Option>
                <Select.Option value="Other">Other</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="phone_number"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
                {
                  len: 10,
                  message: 'Phone number must be 10 digits',
                },
              ]}
            >
              <Input addonBefore="+91" placeholder="Phone number" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
                {
                  min: 8,
                  message: 'Password must be at least 8 characters',
                },
                {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    'Password must contain at least one uppercase, one lowercase, one number and one special character',
                },
              ]}
            >
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
                {
                  min: 8,
                  message: 'Password must be at least 8 characters',
                },
                {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    'Password must contain at least one uppercase, one lowercase, one number and one special character',
                },
              ]}
            >
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Confirm Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Sign Up
              </Button>{' '}
              Or{' '}
              <Link to="/educonnect/login">Already, an user ?.. Login</Link>
            </Form.Item>
          </Form>
        </div>
      </section>
    </>
  );
}
