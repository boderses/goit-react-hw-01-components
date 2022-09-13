import PropTypes from 'prop-types';
import {StyledTable, StyledTitle, StyledColumn} from './TransactionHistory.styled.js'

const TransactionHistory = ({
    items,
}) => {
    return (
<StyledTable>
  <thead>
    <tr>
      <StyledTitle>Type</StyledTitle>
      <StyledTitle>Amount</StyledTitle>
      <StyledTitle>Currency</StyledTitle>
    </tr>
  </thead>

    <tbody>
    {items.map(item =>
        <tr key={item.id}>
            <StyledColumn>{item.type}</StyledColumn>
            <StyledColumn>{item.amount}</StyledColumn>
            <StyledColumn>{item.currency}</StyledColumn>
        </tr>)}          
  </tbody>
</StyledTable>
    )
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
}