import React, { useState } from 'react';
import './CreateQuery.css';
import { Button,  Input,  Upload } from 'antd';
import { BackwardOutlined, DownOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';

const CreateQuery = () => {
 
    return (
    <form>
    {/* <div className='create-query'>
      <Button className='back-btn'><BackwardOutlined />Back</Button>
      </div> */}
      <div className='main-card'>
        <label className='card-lable'>Topic</label>
<label className='card-sublable'>Category</label>

      <select className='select-one'>
        <option label='---Select Category---'><DownOutlined className='downoutlined-icon'/></option>
        <option value='1' index='0' label='Zen-Class Doubt'></option>
        <option value='2' index='1' label='Placement Related'></option>
        <option value='3' index='2' label='Coordination Related'></option>
        <option value='4' index='3' label='Pre-Bootcamp Related'></option>
      </select>
      <div>
      <label className='card-sublable'>Prefered Voice Communication Language</label>

<select className='select-one'>
  <option label='---Select Language---'><DownOutlined className='downoutlined-icon'/></option>
  <option value='1' index='0' label='Tamil'></option>
  <option value='2' index='1' label='English'></option>
  <option value='3' index='2' label='Hindi'></option>
  </select>
      </div>
      <div>
      <label className='card-lable'>Details</label>
      <label className='card-sublable'>Query Title</label>
<Input placeholder='Enter the query title' className='query-input'></Input>
<label className='card-sublable'>Query Description</label>
<TextArea
    rows={4}
    placeholder="Enter your Query"
    maxLength={500}
    className="query-textarea"
  />
      </div>
      <div>
      <label className='card-lable'>
Your available Time ? ( Ours : 9:00 AM - 7:00 PM )</label>
<label className='card-sublable'>From</label>
<input class="formInputs" name="startTime" type="time" max="19:00" value="09:00"></input>
<label className='card-sublable'>From</label>   
<input class="formInputs" name="endTime" type="time" max="19:00" value="19:00"></input>
      </div>
      <div>
      <label className='card-lable'>Attachments (Optional)</label>
      
      </div>
      <div className="querybtn-flex">
 
    <Button className="querybtn-cancel">Cancel</Button>
 
  <Button className="querybtn-create">Confirm</Button>
</div>
      </div>
      </form>
  )
}

export default CreateQuery