import PropTypes from 'prop-types';

export const Statistics = ({ stats, title}) => {
    return (
  <section>
{title && <h2>Upload stats</h2>}
<ul>
{stats.map(data => (
    <li key={data.id}>
    <span>{data.label}</span>
    <span>{data.percentage}%</span>
     </li>
    ))}
</ul>
  </section>)
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