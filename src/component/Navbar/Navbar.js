import React, { useState } from "react";
import "../Navbar/Navbar.css";
import { Typography, Button, Flex, Modal } from 'antd';

import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const { Title } = Typography;

function Navbar() {

    const [menuModal, setMenuModal] = useState(false);

    return (
        <div className="navbar-container">
            <div className="logo">
                <Title level={4}>Lagoonria</Title>
            </div>
            <div className="links">
                <Flex gap="small" align="center" wrap="wrap" justify="space-between" className="menu-list-container">
                    <Button type="link" className="link-buttons">Home</Button>
                    <Button type="link" className="link-buttons">About</Button>
                    <Button type="link" className="link-buttons">Galary</Button>
                    <Button type="link" className="link-buttons">Packages</Button>
                    <Button type="link" className="link-buttons">Feedback</Button>
                    <Button type="link" className="link-buttons">Contact Us</Button>
                </Flex>

                <Flex gap="small" align="center" wrap="wrap" className="menu-icon-container">
                    {menuModal ?
                        <CloseOutlined onClick={() => setMenuModal(false)} />
                        :
                        <MenuOutlined onClick={() => setMenuModal(true)} />
                    }
                </Flex>

                <Modal
                    title="Menu"
                    className="menu-modal"
                    open={menuModal}
                    onCancel={() => setMenuModal(false)}
                    footer={null}
                >
                    <div className="menu-modal-list">
                        <Button type="link" className="menu-modal-link-buttons menu-modal-link-buttons-top">Home</Button>
                        <Button type="link" className="menu-modal-link-buttons">About</Button>
                        <Button type="link" className="menu-modal-link-buttons">Galary</Button>
                        <Button type="link" className="menu-modal-link-buttons">Packages</Button>
                        <Button type="link" className="menu-modal-link-buttons">Feedback</Button>
                        <Button type="link" className="menu-modal-link-buttons">Contact Us</Button>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Navbar;