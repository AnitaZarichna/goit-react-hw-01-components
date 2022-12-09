import PropTypes from 'prop-types';
import {Statistic,Title,StatList,Item,Label,Percentage} from './Statistics.styled';


export const Statistics = ({ stats, title}) => {
    return (
  <Statistic>
{title && <Title>Upload stats</Title>}
<StatList>
{stats.map(data => (
    <Item key={data.id}>
    <Label>{data.label}</Label>
    <Percentage>{data.percentage}%</Percentage>
     </Item>
    ))}
</StatList>
  </Statistic>)
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};