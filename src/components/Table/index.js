import { TableContent } from "../TableContent"
import './Table.css'

export const Table = (props) => { 

    const columns = [
        {
            id: 1,
            title: 'Catch Me If You Can',
            movieLength: 141,
            rating: 8.1,
            genre: ['Drama', 'Crime'],
            awards: 2
        },
        {
            id: 2,
            title: 'Die Hard',
            movieLength: 132,
            rating: 8.2,
            genre: ['Action', 'Crime', 'Thriller'],
            awards: 1
        },
        {
            
        }
    ]

    return (
        <>
        <table>
			<thead>
				<tr>
					<th>{props.title1}</th>
					<th>{props.title2}</th>
					<th>{props.title3}</th>
					<th>{props.title4}</th>
					<th>{props.title5}</th>
				</tr>
			</thead>
            { columns.length > 0 && columns.map(column => {
                return (
                <TableContent title={column.title} movieLength={column.movieLength} rating={column.rating} genre={column.genre} awards={column.awards}/>
                )
            })}
        </table>
        </>
    )
}