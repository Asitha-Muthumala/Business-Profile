import React from "react";
import '../About/About.css';

import aboutUs from '../../asset/Pictures/aboutUs.svg';

import { Typography, Col, Row, Flex } from 'antd';

const { Title, Text } = Typography;

function About() {
    return (
        <div className="about-container">

            <Row>
                <Col span={24}>
                    <Flex className="about-heading-container" justify="center">
                        <Title level={3}>About Us</Title>
                    </Flex>
                </Col>
            </Row>
            <Row justify="center">
                <Col style={{ display: "flex", alignItems: "center"}} span={10}>
                    <Text strong>Lagoonria Boat Service offers a serene escape into the tranquil waters, providing a seamless blend of luxury and adventure. Nestled amidst breathtaking lagoons, we pride ourselves on delivering unforgettable experiences, tailored to meet every traveler's desires. With a fleet of meticulously maintained boats and a team of experienced captains, we ensure safe and indulgent voyages, whether it's a romantic sunset cruise or an exhilarating exploration of hidden coves. At Lagoonria, we are passionate about crafting memories that last a lifetime, inviting you to embark on a journey of discovery and relaxation amidst nature's splendor.</Text>
                </Col>
                <Col justify="center" span={10}>
                    <Flex justify="center">
                        <img width="500px" src={aboutUs} alt="" />
                    </Flex>
                </Col>
            </Row>

        </div>
    );
}

export default About;