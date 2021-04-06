import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import styled from '@emotion/styled';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TableContainer from '@material-ui/core/TableContainer';
import CustomDialog from 'components/CustomDialog';
import CustomTable from 'components/CustomTable';
import { useTranslation } from 'next-i18next';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Container = styled('div')`
  width: 100%;
  margin: 0 auto;
  //padding: 6rem 1rem;
  max-width: 1024px;
`;

const FeaturesListContainer = styled('div')`
  grid-column: 1 / span 12;
`;

const StyledTabs = withStyles({
  root: {
    overflow: 'scroll',
  },
  indicator: {
    display: 'flex',
    backgroundColor: '#83A515',
    color: '#83A515',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      color: '#83A515',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ style: { background: '#83A515' } }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: '#556789',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: '18px',
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
      color: '#83A515',
    },
    '&$selected': {
      color: '#83A515',
      fontWeight: 500,
    },
  },
}))(props => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && (
        <>
          <>{children}</>
        </>
      )}
    </div>
  );
}

export function Features({ tableData, setTableData }) {
  const theme = useTheme();
  const classes = useStyles();
  const { t } = useTranslation('features');
  const [value, setValue] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [currentCampaign, setcurrentCampaign] = React.useState({});
  const [selectedDate, handleDateChange] = React.useState(new Date());

  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    setValue(0);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  /**
   * Modal Dialog open handler
   */
  const handleClickOpen = campaign => {
    setcurrentCampaign(campaign);
    setOpen(true);
  };

  /**
   * Modal Dialog close handler
   */
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container id="features">
      <>
        <FeaturesListContainer>
          <Paper className={classes.root} style={{ marginBottom: '20px' }}>
            <StyledTabs value={value} onChange={handleChange}>
              <StyledTab label={t('features.tab1')} />
              <StyledTab label={t('features.tab2')} />
              <StyledTab label={t('features.tab3')} />
            </StyledTabs>
          </Paper>
          <SwipeableViews
            style={{ overflow: 'visible' }}
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}>
            <TabPanel value={value} index={0} dir={theme.direction}>
              <TableContainer component={Paper}>
                <CustomTable
                  handleClickOpen={handleClickOpen}
                  tableData={tableData}
                  setTableData={setTableData}></CustomTable>
              </TableContainer>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <CustomTable
                handleClickOpen={handleClickOpen}
                tableData={tableData}
                setTableData={setTableData}></CustomTable>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <CustomTable
                handleClickOpen={handleClickOpen}
                tableData={tableData}
                setTableData={setTableData}></CustomTable>
            </TabPanel>
          </SwipeableViews>
        </FeaturesListContainer>
      </>
      <CustomDialog open={open} handleClose={handleClose} campaign={currentCampaign}></CustomDialog>
    </Container>
  );
}

Features.propTypes = {
  t: PropTypes.func,
};

export default Features;
