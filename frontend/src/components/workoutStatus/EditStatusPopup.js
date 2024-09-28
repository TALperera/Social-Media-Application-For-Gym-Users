// EditStatusPopup.js
import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import axios from 'axios';

const EditStatusPopup = ({ visible, status, onClose }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      await axios.put(`http://localhost:8080/workoutStatus/update/${status._id}`, values);
      setLoading(false);
      Modal.success({ content: 'Workout status updated successfully' });
      onClose();
    } catch (error) {
      console.error('Error updating status:', error);
      setLoading(false);
      Modal.error({ content: 'Failed to update workout status' });
    }
  };

  return (
    <Modal
      title={`Edit ${status.fitnessDescription}`}
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>Cancel</Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleSubmit}>Update</Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item label="Run Distance" name="runDistance" initialValue={status.runDistance}>
          <Input />
        </Form.Item>
        <Form.Item label="Pushups" name="pushups" initialValue={status.pushups}>
          <Input />
        </Form.Item>
        <Form.Item label="Weight Lifted" name="weightLifted" initialValue={status.weightLifted}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditStatusPopup;
