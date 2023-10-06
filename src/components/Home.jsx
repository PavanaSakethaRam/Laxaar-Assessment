import React, { useState } from "react";
import { Layout } from 'antd';
import HeaderComponent from './HeaderComponent';
import SidebarComponent from './SidebarComponent';
import ContentComponent from './ContentComponent';

const Home = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggleCollapse = () => {
        setCollapsed(!collapsed);
    }

    return (
        <>
            <HeaderComponent collapsed={collapsed} onToggleCollapse={handleToggleCollapse} />
            <Layout>
                <SidebarComponent collapsed={collapsed} />
                <Layout>
                        <ContentComponent />
                </Layout>
            </Layout>
        </>
    );
}

export default Home;
