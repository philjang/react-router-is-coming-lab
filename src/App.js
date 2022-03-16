import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom'

import Houses from './Houses'
import House from './House'
import Member from './Member'
import gameOfThrones from './gameOfThrones'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
              exact path='/houses'
              element={<Houses gotData={gameOfThrones}/>}
          />
          
          <Route
              exact path='/houses/:id'
              element={<House gotData={gameOfThrones}/>}
          />
          
          <Route
              exact path='/houses/:houseId/members/:memberId'
              element={<Member gotData={gameOfThrones}/>}
              // render={(props) => {
              //   const member = gameOfThrones.find(house => house.id.toString() === props.match.params.houseId).people.find(person => person.id.toString() === props.match.params.memberId)
              //   props = {...props, member}
              //   return <Member {...props} />
              // }}
          />

        </Routes>
      </Router>
    </div>
  )
}