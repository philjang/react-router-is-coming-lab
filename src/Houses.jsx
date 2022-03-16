import { Link } from 'react-router-dom'

export default function Houses ({gotData}) {
    const allHouses = gotData.map((house) => {
        return <li key={`${house.name}-${house.id}`}><Link to={`/houses/${house.id}`} >{house.name}</Link></li>
    })
    return (
        <div>
            <div className="header">
                <h2>Game of Thrones Houses</h2>
            </div>
            <ul className="list">
                {allHouses}
            </ul>
        </div>
    )
}