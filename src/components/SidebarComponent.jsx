import React from 'react';
import { Layout, Menu } from 'antd';
import {
    AppstoreOutlined,
    StockOutlined,
    ProfileOutlined,
    ShoppingCartOutlined,
    StarOutlined,
    PercentageOutlined,
    UploadOutlined,
    ExclamationCircleOutlined,
    TeamOutlined,
    CheckSquareOutlined,
    UserOutlined,
    MailOutlined,
    FileTextOutlined,
    MessageOutlined,
    PictureOutlined,
    WalletOutlined,
    SwapOutlined,
    PieChartOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import './themes/SideBar.scss';

const { Sider } = Layout;

const menuItems = [
    { key: '1', icon: <AppstoreOutlined />, label: 'Dashboard', },
    { key: '2', icon: <StockOutlined />, label: 'Service Jobs', },
    { key: '3', icon: <ProfileOutlined />, label: 'Invoices', },
    { key: '4', icon: <ShoppingCartOutlined />, label: 'Customers', },
    { key: '5', icon: <StarOutlined />, label: 'Products', },
    { key: '6', icon: <PercentageOutlined />, label: 'Offered Services', },
    { key: '7', icon: <UploadOutlined />, label: 'Parts', },
    { key: '8', icon: <ExclamationCircleOutlined />, label: 'Enquires', },
    { key: '9', icon: <TeamOutlined />, label: 'Users', },
    { key: '10', icon: <CheckSquareOutlined />, label: 'Permissions', },
    { key: '11', icon: <UserOutlined />, label: 'Roles', },
    { key: '12', icon: <MailOutlined />, label: 'Email Templates', },
    { key: '13', icon: <FileTextOutlined />, label: 'PDF Templates', },
    { key: '14', icon: <MessageOutlined />, label: 'SMS Templates', },
    { key: '15', icon: <PictureOutlined />, label: 'Theming', },
    { key: '16', icon: <WalletOutlined />, label: 'Payment Gateways', },
    { key: '17', icon: <SwapOutlined rotate={90} />, label: 'Backup', },
    { key: '18', icon: <PieChartOutlined />, label: 'Configuaration', },
    { key: '19', icon: <SettingOutlined />, label: 'Settings', },
];

const Sidebar = ({ collapsed }) => {
    return (
        <Sider
            theme='light'
            trigger={null}
            width={224}
            collapsible
            collapsed={collapsed}
            className="sidebar"
        >
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                {menuItems.map(item => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <div className="vertical-line" />
                        <div className="menu-item-content">
                            <span className="menu-label">{item.label}</span>
                        </div>
                    </Menu.Item>
                ))}
            </Menu>
        </Sider>
    );
};

export default Sidebar;