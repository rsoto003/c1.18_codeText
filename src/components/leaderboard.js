import React, {Component} from 'react';
import userData from '../data/profiles';
import axios from 'axios';

class Leaderboard extends Component{
    constructor(props){
        super(props)
        this.state={
            order: 'votes',
            upvotes:{
                style:{
                    color: '#007bff',
                    cursor: 'pointer'
                }
            },
            comments:{
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
    
    componentDidUpdate(){
        this.Order()
    }
    Order(){
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