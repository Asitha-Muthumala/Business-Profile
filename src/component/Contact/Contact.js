import React from "react";
import '../Contact/Contact.css';

import {
    PhoneFilled,
    EnvironmentFilled,
    ClockCircleFilled
} from '@ant-design/icons';

import { Col, Row, Flex, Typography, Button, Form, Input } from 'antd';
const { Title, Text } = Typography;
const { TextArea } = Input;

function Contact() {
    return (
        <div className="contact-container">

            <Row justify="center">
                <Col span={10} className="details-main-container" style={{ backgroundColor: "blue", paddingTop: "4vh", paddingBottom: "5vh" }}>

                    <Flex justify="center">

                        <Col span={18}>
                            <div className="details-container">
                                <div className="details-header">
                                    <PhoneFilled className="icon" />
                                    <Title level={4}>Call Us</Title>
                                </div>
                                <Text strong>+94 711027389, +94 712578798</Text>
                            </div>

                            <div className="details-container">
                                <div className="details-header">
                                    <EnvironmentFilled className="icon" />
                                    <Title level={4}>Location</Title>
                                </div>
                                <Text strong>NO 63, Doowawaththa, Moraketiara, Nakulugamuwa.</Text>
                            </div>

                            <div className="details-container">
                                <div className="details-header">
                                    <ClockCircleFilled className="icon" />
                                    <Title level={4}>Business Hours</Title>
                                </div>
                                <Text strong>Every Day.</Text>
                            </div>
                        </Col>

                    </Flex>

                </Col>

                <Col span={10} style={{ backgroundColor: "red", paddingTop: "4vh", paddingBottom: "5vh" }}>
                    <Flex justify="center">
                        <Title level={3}>Contact Us</Title>
                    </Flex>
                    <Flex justify="center">

                        <Col span={18}>

                            <Form.Item
                                label="Enter Your Name"
                                name="username"
                                className="form-label"
                            >
                            </Form.Item>
                            <Input />

                            <Form.Item
                                label="Enter Your Email"
                                name="username"
                                className="form-label"
                            >
                            </Form.Item>
                            <Input />

                            <Form.Item
                                label="Enter Your Message"
                                name="password"
                                className="form-label"
                            >
                            </Form.Item>

                            <TextArea rows={4} />

                            <Button className="submit-button" type="primary" htmlType="submit">
                                Submit
                            </Button>

                        </Col>

                    </Flex>
                </Col>
            </Row>

        </div>
    );
}

export default Contact;