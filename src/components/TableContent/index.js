import PropTypes from 'prop-types'
import '../Table/Table.css'

export const TableContent = ({ title, movieLength, rating, genre, awards}) => {
    return (
        <tbody>
            <tr>
                <td>{title}</td>
                <td>{movieLength}</td>
                <td>{rating}</td>
                <td>
                    <ul className='genres'>
                            {
                             typeof genre == 'string' ? 
                                <li>{genre}</li> : 
                                (genre.map(g => {
                                    return <li> { g } </li> 
                                }))
                            } 
                    </ul>
                </td>
                <td>{awards}</td>
                </tr>
        </tbody>
    )
}

TableContent.propTypes = {
    title: PropTypes.string.isRequired,
    movieLength: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    awards: PropTypes.number.isRequired
}

TableContent.defaultProps = {
    title: 'MOVIE NAME',
    movieLength: 0,
    rating: 0,
    genre: 'MOVIE GENRE',
    awards: 0
}