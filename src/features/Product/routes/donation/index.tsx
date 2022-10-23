import { Divider, Form, Select } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import Dragger from "antd/lib/upload/Dragger";
import React from "react";

import "./index.scss";

type donationProps = {
  children?: React.ReactNode;
};

const deviceOptions = [
  { label: "iPhone 5C", value: 0 },
  { label: "iPhone 5S", value: 1 },
  { label: "Dell Inspiron 15-5000", value: 2 },
];

const conditionOptions = [
  { label: "Excelent", value: 0 },
  { label: "Very Good", value: 1 },
  { label: "Good", value: 2 },
  { label: "Poor", value: 3 },
];

const Donation: React.FC<donationProps> = () => {
  return (
    <div className="donation-page" style={{ padding: 30 }}>
      <div className="section-title">
        <h1>Donate Your Device</h1>
        <h4>Use the form below to create your donation!</h4>
      </div>

      <Divider />

      <Form layout="vertical">
        <Form.Item label="Select your device">
          <Select placeholder="Select your device" options={deviceOptions} />
        </Form.Item>

        <Form.Item label="Select the condition of your device">
          <Select
            placeholder="Select the condition of your device"
            options={conditionOptions}
          />
        </Form.Item>

        <Form.Item label="Elaborate on the condition of the device">
          <TextArea
            style={{ height: 150 }}
            placeholder="Elaborate on the condition of the device"
          />
        </Form.Item>

        <Form.Item label="Upload pictures of the device">
          <Dragger multiple name="file">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Dragger>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Donation;
