import React from 'react';
import { Table, Input } from 'antd';
import {
    CheckCircleFilled,
    CheckCircleTwoTone,
    SearchOutlined,
} from '@ant-design/icons';
import './themes/Content.scss';
import columns from './columns';


const generateData = () => {
    const statusOptions = ['Completed', 'Completed', 'Completed', 'Processing', 'Cancel'];

    const data = [];

    for (let i = 0; i < 6 * 4; i++) {
        const status = statusOptions[i % 5];

        data.push({
            key: i,
            customerName: 'Rida Talbi',
            date: '04/10/2021 ; 02:10 PM',
            jobNumber: 'ABC000006',
            mobileNumber: '0661425689',
            status,
        });
    }

    return data;
};

const Content = () => {
    const [data, setData] = React.useState(generateData);

    const handleCheckboxClick = (record) => {
        const newData = data.map((item) => {
            if (item.key === record.key) {
                return {
                    ...item,
                    checkboxColor: item.checkboxColor === '#f87060' ? '' : '#f87060',
                };
            }
            return item;
        });
        setData(newData);
    };

    return (
        <div className="content">
            <div className="content-header">
                <span className="content-header-text">Customer</span>
            </div>
            <div className="table-container">
                <div className='table-search-bar'>
                    <Input
                        className='search-bar'
                        placeholder="Search..."
                        prefix={<SearchOutlined />}
                    />
                </div>
                <Table
                // There has to be a gap between each of the rows
                    columns={[
                        {
                            title: '',
                            dataIndex: 'checkbox',
                            width: 10,
                            align: 'Center',
                            render: (_, record) => (
                                record.checkboxColor ? (
                                    <CheckCircleFilled
                                        style={{ color: record.checkboxColor }}
                                        onClick={() => handleCheckboxClick(record)}
                                    />
                                ) : (
                                    <CheckCircleTwoTone
                                        twoToneColor="#fff"
                                        style={{ border: '1.5px solid #E0E0E0', borderRadius: '50%' }}
                                        onClick={() => handleCheckboxClick(record)}
                                    />
                                )
                            ),
                        }, ...columns
                    ]}
                    dataSource={data}
                    pagination={{
                        className: 'pagination',
                        pageSize: 6,
                        showSizeChanger: false,
                        position: ['bottomCenter'],
                        // The color of the pagination text
                    }}
                    size="large"
                />
            </div>
        </div>
    );
};

export default Content;
