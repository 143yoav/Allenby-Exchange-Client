import React, { useState, useCallback, useMemo } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ConvertForm from './Forms/ConvertForm';
import LoanForm from './Forms/LoanForm';
import { currencyConvert, currencyLoan } from '../../actions/api';
import './UsersPage.scss';

const UsersPage = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('');
  const [result, setResult] = useState('');

  const onSubmit = action => data => {
    handleClose();
    forms[action].action.call(null, data).then(res => {
      setResult(res);
    });
  };

  const forms = useMemo(
    () => ({
      loan: {
        component: <LoanForm onSubmit={onSubmit('loan')} />,
        action: currencyLoan
      },
      convert: {
        component: <ConvertForm onSubmit={onSubmit('convert')} />,
        action: currencyConvert
      }
    }),
    []
  );

  const handleOpen = useCallback(
    type => () => {
      setOpen(true);
      setType(type);
    },
    [open, type]
  );

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [open]);

  return (
    <div className="UsersPage__Wrapper">
      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={handleOpen('convert')}
      >
        Convert
      </Button>
      <Button
        size="large"
        variant="contained"
        color="secondary"
        onClick={handleOpen('loan')}
      >
        Loan
      </Button>
      <Dialog open={open} onClose={handleClose}>
        {forms[type] && forms[type].component}
      </Dialog>
      <div className="UsersPage__Result">{result}</div>
    </div>
  );
};

export default UsersPage;
