import React, { useState } from 'react';
import Form from 'react-formal';
import { object, string, number } from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { googleApiKey } from '../../../config.json';
import './Forms.scss';

const modelSchema = object({
  amount: number().required('please enter an amount'),
  currency: string().required('please enter a currency')
});

export default ({ onSubmit }) => {
  const [approved, setApproved] = useState(false);

  return (
    <Form
      schema={modelSchema}
      defaultValue={modelSchema.default()}
      className="Form__Wrapper"
      onSubmit={onSubmit}
    >
      <div>
        <label>Amount to loan</label>
        <Form.Field name="amount" placeholder="amount" />
        <Form.Message for={['amount']} className="validation-error" />
        <label>Currency</label>
        <Form.Field name="currency" placeholder="currency" />
        <Form.Message for={['currency']} className="validation-error" />
      </div>
      <ReCAPTCHA sitekey={googleApiKey} onChange={() => setApproved(true)} />
      <Form.Submit type="submit" disabled={!approved}>
        Submit
      </Form.Submit>
    </Form>
  );
};
