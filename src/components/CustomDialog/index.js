import React from 'react';

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
  width: 500px;
  justify-content: space-between;
  margin-bottom: 22px;
`;

const StyledButton = withStyles(() => ({
  root: {
    border: '1px solid black',
    color: 'black',
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
}))(Button);

export default function CustomDialog({ open, handleClose, campaign = {} }) {
  const { name, region, image_url } = campaign;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
      <DialogContent>
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <img src={image_url} style={{ height: '150px' }}></img>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginLeft: '10px' }}>
            <span>{name}</span>
            <span>{region}</span>
          </div>
        </div>
        <p> Pricing </p>
        <PricingListContainer>
          <PricingList>
            <PricingItem>
              <span>1 week - 1 month</span>
              <span>$ 100.00</span>
            </PricingItem>
            <PricingItem>
              <span>6 months</span>
              <span>$ 500.00</span>
            </PricingItem>
            <PricingItem>
              <span>1 year</span>
              <span>$ 900.00</span>
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
