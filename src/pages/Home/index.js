import React, { useState } from 'react'; 
import { Drawer, Form, Button, Col, Row, Input, Table, Popconfirm, Space, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less' 
import { uuid } from 'uuidv4';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as userAction from '../../store/modules/users/actions'

export default function Home() {

    const dispatch = useDispatch();
    const users = useSelector(state => state.userReducer.users); 

    const [visible, setVisible] =  useState(false)
    const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) =>
        users.length >= 1 ? ( 
          <div>
            <Popconfirm title="Apagar esse registro ?" onConfirm={() => handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm> 
            <Space size="middle"> 
              <a onClick={() => handleStatus(record.key)}>Status</a>
            </Space>
          </div>
        ) : null,
    },
    ];

    const showDrawer = () => setVisible(true);
    const onClose = () => setVisible(false);
    
    const handleSubmit = (values) => { 
        values['key'] = uuid()
        values['status'] = 'ativo'
        if (values.name) { 
            dispatch(userAction.createUser(values))
            message.success('Adicionado com sucesso');
        } 
         
        setVisible(false)   
    };

    const handleDelete = key => { 
        dispatch(userAction.deleteUser(key)) 
        message.success('Excluido com sucesso');
    };

    const handleStatus = key => {  
      dispatch(userAction.handleStatus(key))
      message.success('Status atualizado com sucesso'); 
    } 

    return (
    <>  
      <section className="container-fluid bg-dark">
        <div className="container">
          <div className="row pt-4 pb-4">
            <div className="col-lg-4">
              <strong className="text-white">USER LIST</strong> 
            </div> 
            <div className="col-lg-8 text-right">
            <Button type="primary" onClick={showDrawer}>
              <PlusOutlined /> New account
            </Button>
            </div>
          </div>
        </div>
      </section>  
      <section className="container-fluid">
        <div className="container">
          <div className="row pt-4 pb-4">
            <div className="col-lg-12">
             <Table locale={{ emptyText: 'Sem Registro' }} dataSource={users} columns={columns} />
            </div> 
          </div>
        </div>
      </section>   
      <Drawer
          title="Create a new account"
          width={500}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }} 
        >
          <Form onFinish={handleSubmit} layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
              </Col> 
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="age"
                  label="Age"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user age" />
                </Form.Item>
              </Col> 
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user email" />
                </Form.Item>
              </Col> 
            </Row> 
            <Row gutter={16}>
              <Col span={24}>
              <Form.Item>
                <Button  
                  onClick={handleSubmit}
                  type="primary"
                  htmlType="submit" 
                  block
                  size="large"  
                  >
                  Submit
                </Button>
              </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>  
      </>
    );
}