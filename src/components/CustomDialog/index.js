import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, withStyles } from '@material-ui/core/styles';
import styled from '@emotion/styled';

const PricingList = styled('div')`
  display: flex;
  flex-flow: column wrap;
`;

const PricingListContainer = styled('div')`
  grid-column: 1 / span 12;
`;

const PricingItem = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 22px;
`;

const Actiontext = styled('span')`
  font-size: 16px;
  color: #2b416c;
`;
const ActionSubtext = styled('span')`
  font-size: 14px;
  color: #9ca2b7;
`;

const Pricingtext = styled('span')`
  font-size: 16px;
  color: #7788a3;
`;

const Pricing = styled('span')`
  font-size: 16px;
  text-align: right;
  color: #556789;
`;

const StyledButton = withStyles(() => ({
  root: {
    border: ' 2px solid #181B34',
    color: ' #181B34',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    width: '84px',
    height: '48px',
  },
}))(Button);

export default function CustomDialog({ open, handleClose, campaign = {} }) {
  const { name, region, image_url } = campaign;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
      <DialogContent style={{ width: '400px' }}>
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <img src={image_url} style={{ height: '137px' }}></img>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginLeft: '10px' }}>
            <Actiontext>{name}</Actiontext>
            <ActionSubtext>{region}</ActionSubtext>
          </div>
        </div>
        <p style={{ color: '#2B416C', fontSize: '24px', fontWeight: '700' }}> Pricing </p>
        <PricingListContainer>
          <PricingList>
            <PricingItem>
              <Pricingtext>1 week - 1 month</Pricingtext>
              <Pricing>$ 100.00</Pricing>
            </PricingItem>
            <PricingItem>
              <Pricingtext>6 months</Pricingtext>
              <Pricing>$ 500.00</Pricing>
            </PricingItem>
            <PricingItem>
              <Pricingtext>1 year</Pricingtext>
              <Pricing>$ 900.00</Pricing>
            </PricingItem>
          </PricingList>
        </PricingListContainer>
      </DialogContent>
      <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
        <StyledButton onClick={handleClose} color="primary">
          Close
        </StyledButton>
      </DialogActions>
    </Dialog>
  );
}

CustomDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  campaign: PropTypes.object,
};
