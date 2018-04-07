import React from 'react';
import userData from '../data/profiles'

const usersArray=[]
const users = Object.keys(userData).map( (item, index) => {
    usersArray.push(userData[item])
    console.log(usersArray)
    return(
        <tr key={index}>
            <th scope="row"> {index+1} </th>
            <td>{userData[item].firstName} {userData[item].lastName}</td>
            <td>{userData[item].upvotes} </td>
            <td>{userData[item].comments}  </td>
        </tr>
    )
} )
// const upvoteOrder = usersArray.map( (item,index) => {

// })

export default () => {

    return(
        <div className="col-9 mt-2" >
            <h1 className="text-center"> Leaderboards </h1>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col" >#</th>
                        <th scope="col" >Name</th>
                        <th scope="col" >Upvotes</th>
                        <th scope="col" >Comments</th>
                    </tr>
                    {users}
                </thead>
            </table>
        </div>
    )
}