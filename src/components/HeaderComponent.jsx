import React from "react";
import { Button, Dropdown, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, GlobalOutlined, FileTextOutlined, UploadOutlined, DownOutlined } from '@ant-design/icons';
import logo from "../assets/logo.svg"
import "./themes/Header.scss"
import userLogo from "../assets/Аватар.png"

const HeaderComponent = ({ collapsed, onToggleCollapse }) => {
    const languageMenu = (
        <Menu>
            <Menu.Item key="1">German</Menu.Item>
            <Menu.Item key="2">French</Menu.Item>
            <Menu.Item key="3">Spanish</Menu.Item>
        </Menu>
    );
    return (
        <div className="header">
            <div className="left">
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined width={22} height={16.718} style={{ flexShrink: 0 }} /> : <MenuFoldOutlined width={22} height={16.718} style={{ flexShrink: 0 }} />}
                    onClick={onToggleCollapse}
                    style={{ fontSize: '16px', width: 64, height: 64 }}
                />
                <img src={logo} alt="Logo" style={{ marginLeft: 20 }} />
                <div style={{
                    display: "flex", marginTop: "10px",
                    flexDirection: "column",
                    color: "#292929",
                    marginBottom: "0px",
                    fontFamily: "Roboto",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "900",
                    lineHeight: "normal",
                }}>
                    arivaa
                    <div style={{
                        marginTop: "0px",
                        padding: "0px",
                        marginLeft: "30px", // Adjust this value as needed for proper alignment
                        color: "#292929",
                        fontFamily: "Roboto",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                    }}>
                        Service job
                    </div>
                </div>
            </div>
            <div className="right">
                <Button type="primary" danger style={{ width: '202px', height: '44px', marginRight: 30 }}>
                    <FileTextOutlined />
                    Documentation</Button>
                <Dropdown overlay={languageMenu} >
                    <Button style={{ width: '148px', height: '44px', color: '#F87060', background: '#FFF2F1',
                    border: '1px solid #aba2a25b', borderRadius: '4px', marginRight: 30
                      }} danger>
                        <GlobalOutlined /> English
                        <DownOutlined/>
                    </Button>
                </Dropdown>
                <div className="user-info">
                    <div className="circle"></div>
                    <div className="user-popout">
                        <div className="user-full-details">
                            <img src={userLogo} alt="User" className="user-image" />
                            <div className="user-details">
                                <div className="user-name">User15432</div>
                                <div className="user-id">User15432@gzp.ru</div>
                            </div>
                        </div>
                        <hr style={{ opacity: 0.2 }} />
                        <div className="logut-btn">
                            <Button type="primary" danger>
                                <UploadOutlined style={{ rotate: "90deg" }} />
                                Signout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;
