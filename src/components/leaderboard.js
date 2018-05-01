import React, {Component} from 'react';
import userData from '../data/profiles';
import axios from 'axios';

class Leaderboard extends Component{
    constructor(props){
        super(props)
        this.state={
            order: 'votes',
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
                
            },
            data:[],
            oldOrder:''
        }

        this.upvoteClick=this.upvoteClick.bind(this);
        this.commentClick=this.commentClick.bind(this);
    }

    componentWillMount(){
        this.Order()
    }
    
    // shouldComponentUpdate(){
    //     if(this.state.order !== this.state.oldOrder){

    //         this.setState({
    //             oldOrder: this.state.order
    //         })
    //         return true
    //     }
    //     else return false
    // }
    componentDidUpdate(){
        this.Order()
    }
    Order = ()=>{
        if(this.state.order !== this.state.oldOrder){

            axios.post('http://localhost:5000/leaderboardSort', {query: this.state.order}).then(res => {
                this.setState({
                    data: res.data,
                    order: this.state.order,
                    oldOrder:this.state.order
                })
            })
        }
    }
       
        // const usersArray=[]
        // const users = Object.keys(userData).map( (item, index) => {
        //     usersArray.push(userData[item])
        // } )
        // const upvoteArray=usersArray.slice();
        // const output=[];
        // let isOrdered=false;
           
        // while ( upvoteArray.length !== 0 ){
            
        //     let highest = null;
        //     let highestIndex = null;
        //     let reorder = false;
        //     highest = upvoteArray[0];

        //     for ( let i =0; i<upvoteArray.length; i++){
        //         if ( highest[orderSelect] <= upvoteArray[i][orderSelect] ){
        //             highest = upvoteArray[i];
        //             reorder = true;
        //             highestIndex = i;
        //         }
        //     }
        //     if (reorder === false){
        //         upvoteArray.splice(0,1)
        //     } else {
        //         upvoteArray.splice(highestIndex,1)
        //     }
            
        //     output.push(highest)
    
        // }
        // return output
    // }

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
            upvotes: newUpvoteState,
            comments: newCommentState,
            order: 'votes'
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
            upvotes: newUpvoteState,
            comments: newCommentState,
            order: 'comments'
        })
        this.forceUpdate()
    }

    render(){

        const upvoteUser =this.state.data.map( (item, index) => {
            return (
                <tr key={index}>
                    <th scope="row" ></th>
                    <td>{item.title} </td>
                    <td>{item.rating}</td>
                    <td>{item.__v}</td>
                </tr>
            )
        })
        // const commentsUser = this.state.data.map( ( item, index ))
        

        return(
            <div className="col-sm-9 col-md-10 mt-4 offset-md-2" >
                <h1 className="text-center display-3"> Leaderboards </h1>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col" >#</th>
                            <th scope="col" >Name</th>
                            <th scope="col"> <span  style={this.state.upvotes.style} onClick={this.upvoteClick}  >Upvotes</span></th>
                            <th scope="col"> <span style={this.state.comments.style} onClick={this.commentClick} >Comments</span></th>
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