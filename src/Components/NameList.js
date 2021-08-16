import React, { Fragment } from 'react'
import Person from './Person'

function NameList() {
    const array=['Ram' ,'Shyam','John','','','1234']
    const persons=
    [
       

    ]
    const ParentList = persons.map(person=><Person person={person}/> )
    return (
        <React.Fragment>
        <div>
            {array.map(name=><div>Hi {name}</div>)}
          <h1> Hi { persons[6].age/0}</h1>
            <div>{ParentList}</div>
        </div>
     <h1>ABC</h1>
     
     </React.Fragment>
    )
}

export default NameList






