import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core';
import moment from 'moment';
import { calculateTimeDiff } from 'utils/helpers';
import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const actions = [
  { actionName: 'CSV', actionIcon: '/static/images/dashboard/actions/file.png' },
  { actionName: 'Report', actionIcon: '/static/images/dashboard/actions/statistics-report.png' },
  { actionName: 'Schedule Again', actionIcon: '/static/images/dashboard/actions/calendar.png' },
];

const CustomLink = styled('span')`
  width: 100%;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
const StyledTableRow = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'white',
    },
  },
}))(TableRow);

const StyledTableHead = withStyles(() => ({
  root: {
    backgroundColor: '#F1F1F4',
  },
}))(TableHead);

const StyledTableHeaderCell = withStyles(() => ({
  head: {
    color: '#556789',
    'text-transform': 'uppercase',
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const StyledTableCell = withStyles(() => ({
  head: {
    color: '#2B416C',
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const ItalicText = styled('em')`
  font-size: 14px;
  color: #9ca2b7;
`;

const Actiontext = styled('span')`
  font-size: 14px;
  color: #7788a3;
`;

export default function CustomTable({ handleClickOpen, tableData, setTableData }) {
  // const theme = useTheme();
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState([false, false, false, false]);

  /**
   * @description Function to handle Date picker date changes and update Store via dispatching action
   * @param {Date} date
   * @param {Number} id
   */
  function handleDateChange(date, id) {
    const seconds = date.getTime();
    setTableData({ data: seconds, id });
  }

  return (
    <Table className={classes.table} aria-label="customized table">
      <StyledTableHead>
        <TableRow>
          <StyledTableHeaderCell>Date</StyledTableHeaderCell>
          <StyledTableHeaderCell align="left">Campaign</StyledTableHeaderCell>
          <StyledTableHeaderCell align="left">View</StyledTableHeaderCell>
          <StyledTableHeaderCell align="left">Actions</StyledTableHeaderCell>
        </TableRow>
      </StyledTableHead>
      <TableBody>
        {tableData.map((row, index) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {moment(new Date(row.createdOn)).format('MMM YYYY, DD')}
              <br />
              <ItalicText>{calculateTimeDiff(row.createdOn)}</ItalicText>
            </StyledTableCell>
            <StyledTableCell align="left">
              <div style={{ display: 'flex' }}>
                <img style={{ height: '40px', marginRight: '5px', marginTop: '-2px' }} src={row.image_url}></img>
                <div
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginLeft: '10px' }}>
                  <span>{row.name}</span>
                  <ItalicText>{row.region}</ItalicText>
                </div>
              </div>
            </StyledTableCell>
            <StyledTableCell align="left">
              <div style={{ display: 'flex' }} onClick={() => handleClickOpen(row)}>
                <img
                  style={{ height: '24px', marginRight: '5px', marginTop: '-2px' }}
                  src="/static/images/dashboard/actions/Price.png"></img>
                <CustomLink href="#">
                  <Actiontext> View Pricing</Actiontext>
                </CustomLink>
              </div>
            </StyledTableCell>
            <StyledTableCell align="left">
              <div style={{ display: 'flex' }}>
                {actions.map(actionItem => (
                  <div
                    key={actionItem.actionName}
                    style={{ margin: '0 30px 0 0', display: 'flex' }}
                    onClick={() => {
                      if (actionItem.actionName === 'Schedule Again') {
                        let temp = [...isOpen];
                        temp[index] = true;
                        setIsOpen(temp);
                      }
                    }}>
                    <img
                      style={{ height: '24px', width: '18.88px', marginRight: '5px', marginTop: '-3px' }}
                      src={actionItem.actionIcon}></img>
                    {actionItem.actionName === 'Schedule Again' ? (
                      <CustomLink>
                        <Actiontext>{actionItem.actionName}</Actiontext>
                      </CustomLink>
                    ) : (
                      <Actiontext>{actionItem.actionName}</Actiontext>
                    )}
                    {actionItem.actionName === 'Schedule Again' && isOpen[index] && (
                      <DatePicker
                        selected={new Date(row.createdOn)}
                        onChange={date => handleDateChange(date, row.id)}
                        onClickOutside={() => {
                          let temp = [...isOpen];
                          temp[index] = false;
                          setIsOpen(temp);
                        }}
                        open={isOpen[index]}
                      />
                    )}
                  </div>
                ))}
              </div>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
}

CustomTable.propTypes = {
  tableData: PropTypes.array,
  setTableData: PropTypes.func,
  handleClickOpen: PropTypes.func,
};
