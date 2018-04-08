import React, {Component} from 'react';
import userData from '../data/profiles'


class Leaderboard extends Component{
    constructor(props){
        super(props)
        this.state={
            order: 'upvotes',
            upvotes:{
                // selected: true,
                style:{
                    color: '#007bff',
                    cursor: 'pointer'
                }
            },
            comments:{
                // selected: false,
                style:{
                    color: 'black',
                    cursor: 'pointer'
                }
                
            }
        }

        this.upvoteClick=this.upvoteClick.bind(this);
        this.commentClick=this.commentClick.bind(this);
    }

    Order = (orderSelect)=>{
        const usersArray=[]
        const users = Object.keys(userData).map( (item, index) => {
            usersArray.push(userData[item])
        } )
        const upvoteArray=usersArray.slice();
        const output=[];
        let isOrdered=false;
        while ( upvoteArray.length !== 0 ){
            let highest = null;
            let highestIndex = null;
            let reorder = false;
            for ( let i =0; i<upvoteArray.length; i++){
                highest = upvoteArray[0];
                if ( highest[orderSelect] < upvoteArray[i][orderSelect] ){
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

    upvoteClick(){
        const newUpvoteState = this.state.upvotes;
        newUpvoteState.style= {
            color: '#007bff',
            cursor: 'pointer'
        }
        const newCommentState = this.state.comments;
        newCommentState.style={
            color:'black',
            cursor:'pointer'
        }
        this.setState({
            upvotes: {newUpvoteState},
            comments: {newCommentState}
        })


    }
    commentClick(){
        const newCommentState = this.state.comments;
        newCommentState.style= {
            color: '#007bff',
            cursor: 'pointer'
        }
        const newUpvoteState = this.state.upvotes;
        newUpvoteState.style={
            color:'black',
            cursor:'pointer'
        }
        this.setState({
            upvotes: {newUpvoteState},
            comments: {newCommentState}
        })
    }

    render(){

        
        const upvoteUser =this.Order(this.state.order).map( (item, index) => {
            return (
                <tr key={index}>
                    <th scope="row" >{index+1}</th>
                    <td>{item.firstName} {item.lastName}</td>
                    <td>{item.upvotes}</td>
                    <td>{item.comments}</td>
                </tr>
            )
        })

        return(
            <div className="col-sm-12 col-md-9 mt-2" >
                <h1 className="text-center"> Leaderboards </h1>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col" >#</th>
                            <th scope="col" >Name</th>
                            <th scope="col" style={this.state.upvotes.style} onClick={this.upvoteClick} >Upvotes</th>
                            <th scope="col" style={this.state.comments.style} onClick={this.commentClick} >Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {upvoteUser}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default Leaderboard