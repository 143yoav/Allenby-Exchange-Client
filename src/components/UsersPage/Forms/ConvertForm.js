import React, { useState } from 'react';
import Form from 'react-formal';
import { object, string, number } from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { googleApiKey } from '../../../config.json';
import './Forms.scss';

const modelSchema = object({
  from: string().required('please enter a from currency'),
  to: string().required('please enter a to currency'),
  amount: number().required('Please enter an amount')
});

export default ({ onClick }) => {
  const [approved, setApproved] = useState(false);

  return (
    <Form
      schema={modelSchema}
      defaultValue={modelSchema.default()}
      className="Form__Wrapper"
    >
      <div>
        <label>From Currency</label>
        <Form.Field name="from" placeholder="from" />
        <Form.Message for={['from']} className="validation-error" />
        <label>To Currency</label>
        <Form.Field name="to" placeholder="to" />
        <Form.Message for={['to']} className="validation-error" />
        <label>Amount to exchange</label>
        <Form.Field name="amount" placeholder="amount" />
        <Form.Message for={['amount']} className="validation-error" />
      </div>
      <ReCAPTCHA sitekey={googleApiKey} onChange={() => setApproved(true)} />

      <Form.Submit type="submit" onClick={onClick} disabled={!approved}>
        Submit
      </Form.Submit>
    </Form>
  );
};
