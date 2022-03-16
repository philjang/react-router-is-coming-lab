import { Link, useParams } from 'react-router-dom'

export default function House ({gotData}) {
    const { id } = useParams()
    const house = gotData.find(house => house.id.toString() === id)
    if(!house) return <h1> house {id} not found</h1>

    const allMembers = house.people.map((member,idx) => {
        return <li key={`${member.name}-${member.id}`}><Link to={`/houses/${id}/members/${member.id}`}>{member.name}</Link></li>
    })
    return (
        <div className="page">
            <div className="header">
                <h2>Members of {house.name}</h2>

                {/* bonus: */}
                <a
                href={`https://awoiaf.westeros.org/index.php/${house.wikiSuffix}`}
                target="_blank"
                >more info</a>
            </div>

            <ul className="list">
                {allMembers}
            </ul>
        </div>
    )
}