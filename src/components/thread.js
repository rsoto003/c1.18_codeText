import React, { Component } from 'react';

class Thread extends Component {
        constructor(props){
            super(props);
        }

        render(){
            return (
                <div key={this.props.key}>
                    <h3>{this.props.data.title}</h3>
                    <p><small className="text-muted" > {this.props.data.author} - post ID: {this.props.data.id} </small></p>
                    <p>{this.props.data.description}</p>
    
                    <small className="text-muted">Comments</small>
                    <div className="row">
                        <div className="col">
                            <span><i className="fas fa-user-circle mr-2"></i>{this.props.data.comments[0].name}</span>
                            <p><small>{this.props.data.comments[0].comment}</small></p>
                        </div>
                    </div>
                    <div className="dropdown-divider mb-5"></div>
                </div>
            )
        }
}

export default Thread;