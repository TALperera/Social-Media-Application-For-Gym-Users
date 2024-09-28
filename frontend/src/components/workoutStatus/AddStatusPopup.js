import React, { useState } from 'react';
import { Modal, Input, Button, Form, message } from 'antd';
import axios from 'axios';

const AddStatusPopup = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const values = await form.validateFields();
      await addWorkoutStatus(values);
      form.resetFields();
      setIsSubmitting(false);
      message.success('Workout status added successfully.');
    } catch (error) {
      console.error('Validation Error:', error);
      message.error('Please fill in all fields correctly.');
      setIsSubmitting(false);
    }
  };

  const addWorkoutStatus = async (data) => {
    try {
      await axios.post('http://localhost:8080/workoutStatus/add', data);
    } catch (error) {
      console.error('Error adding workout status:', error);
      message.error('Failed to add workout status. Please try again later.');
    }
  };

  return (
    <Modal
      visible={isOpen}
      title="Add New Status"
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Close
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit} loading={isSubmitting}>
          Publish
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="runDistance"
          label="Run Distance (Meters)"
          rules={[{ required: true, message: 'Please enter run distance in meters.' }]}
        >
          <Input type="number" placeholder="Enter run distance" />
        </Form.Item>
        <Form.Item
          name="pushups"
          label="Pushups"
          rules={[{ required: true, message: 'Please enter number of pushups.' }]}
        >
          <Input type="number" placeholder="Enter number of pushups" />
        </Form.Item>
        <Form.Item
          name="weightLifted"
          label="Weight Lifted (in kg)"
          rules={[{ required: true, message: 'Please enter weight lifted in kg.' }]}
        >
          <Input type="number" placeholder="Enter weight lifted" />
        </Form.Item>
        <Form.Item
          name="fitnessDescription"
          label="Fitness Description"
          rules={[{ required: true, message: 'Please enter fitness description.' }]}
        >
          <Input.TextArea rows={4} placeholder="Enter fitness description" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddStatusPopup;
