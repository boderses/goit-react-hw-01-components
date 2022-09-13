import PropTypes from 'prop-types';
import { StyledUl, StyledLi, StyledSpanLabel } from './Statistics.styled.js';

const Statistics = ({
    title,
    stats,
}) => {
    return (
<section>
  {title && (
        <h2>{title}</h2>
      )}

    <StyledUl>         
        {stats.map(stat => <StyledLi key={stat.id}>
        <StyledSpanLabel>{stat.label}</StyledSpanLabel>
        <span>{stat.percentage}%</span>
    </StyledLi>)}             
  </StyledUl>
  
</section>
    )
}

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
}