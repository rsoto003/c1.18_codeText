import React from 'react';
import userData from '../data/profiles'

const usersArray=[]
const users = Object.keys(userData).map( (item, index) => {
    usersArray.push(userData[item])
    // console.log(usersArray)
    return(
        <tr key={index}>
            <th scope="row"> {index+1} </th>
            <td>{userData[item].firstName} {userData[item].lastName}</td>
            <td>{userData[item].upvotes} </td>
            <td>{userData[item].comments}  </td>
        </tr>
    )
} )


const upvoteOrder = ()=>{
    const upvoteArray=usersArray.slice();
    let highest = null;
    const output=[];
    let isOrdered=false;
    
    while ( upvoteArray.length !== 1 ){
        let highestIndex = null;
        let reorder = false;
        for ( let i =0; i<upvoteArray.length; i++){
            highest = upvoteArray[0];
            if ( highest.upvotes < upvoteArray[i].upvotes ){
                highest = upvoteArray[i];
                upvoteArray.splice(i,1);
                reorder = true;
                highestIndex = i;
            }
        }
        if (reorder === false){
            upvoteArray.splice(0,1)
        }
        
        output.push(highest)

    }
    console.log(output)
    return output
}
const upvoteUser = upvoteOrder().map( (item, index) => {
    return (
        <tr key={index}>
            <th scope="row" >{index+1}</th>
            <td>{item.firstName} {item.lastName}</td>
            <td>{item.upvotes}</td>
            <td>{item.comments}</td>
        </tr>
    )
})


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
                    {upvoteUser}
                </thead>
            </table>
        </div>
    )
}