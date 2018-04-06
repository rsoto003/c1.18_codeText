import React,{Component} from 'react';

class NewPost extends Component{
    constructor(props){
        super(props);
        this.state={
            titleInput:'',
            descriptionInput:'',
            JSBINLink:''
        }
        this.titleInputChange = this.titleInputChange.bind(this);
        this.descriptionInputChange = this.descriptionInputChange.bind(this);
        this.linkInputChange = this.linkInputChange.bind(this);
    }
    titleInputChange(event){
        this.setState({
            titleInput: event.target.value
        })
    }
    descriptionInputChange(event){
        this.setState({
            descriptionInput: event.target.value
        })
    }
    linkInputChange(event){
        this.setState({
            JSBINLink:event.target.value
        })
    }

    render(){
        return (
            <div className="col-8 mt-2" >
                <div className="text-center" >
                    <h1>New Post</h1>
                </div>
                <div>
                    <form className="form-group" >
                        <div className="input-group input-group-lg">
                            <input onChange={this.titleInputChange} type="text" className="form-control" id="pic" placeholder="Add a Title" value={this.state.titleInput} />
                        </div>
                            <label className="mt-4" htmlFor="post">Add a description</label>
                            <textarea onChange={this.descriptionInputChange} id="post" className="form-control" cols="30" rows="10" placeholder="Describe your problem" value={this.state.descriptionInput}></textarea>
                            <div className="input-group mt-5">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default" >JSBIN Link</span>
                                </div>
                                <input onChange={this.linkInputChange} type="text" className="form-control" id="jsbinLink" placeholder="attach a JSBIN link?" value={this.state.JSBINLink}/>
                            </div>
                            <button type="button" className="float-right mt-2 btn btn-primary" >Submit post</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default NewPost