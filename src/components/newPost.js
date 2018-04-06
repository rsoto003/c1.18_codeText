import React,{Component} from 'react';
import axios from 'axios';


class NewPost extends Component{
    constructor(props){
        super(props);
        this.state={
            titleInput:'',
            descriptionInput:'',
            JSBINLink:'',
            titleState: {
                display: {display: 'none'}
            },
            descriptionState:{
                display: {display:'none'}
            },
            jsbinState: {
                display: {display:'none'},
                // isSpace: '',
            }
        }
        this.titleInputChange = this.titleInputChange.bind(this);
        this.descriptionInputChange = this.descriptionInputChange.bind(this);
        this.linkInputChange = this.linkInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

    onSubmit(event){

        if (!this.state.titleInput.length || !this.state.descriptionInput.length) event.preventDefault()

        const newTitleState={...this.state.titleState};
        newTitleState.display = this.state.titleInput.length===0 ? {display:'block'} : {display:'none'};
        this.setState({
            titleState: newTitleState
        })

        const newDescriptionState = {...this.state.descriptionState};
        newDescriptionState.display = this.state.descriptionInput.length===0 ? {display:'block'}:{display:'none'};
        this.setState({
            descriptionState: newDescriptionState
        })

        this.jsbinIsValid(event)
    
    }
    jsbinIsValid(event){
        const jsbinLink = this.state.JSBINLink
        const newJsbinState = {...this.state.jsbinState}
        let isSpace = false;
        for( var i =0; i< jsbinLink.length; i++ ){
            if (jsbinLink[i] === ' ' ){
                isSpace = true
                newJsbinState.display = isSpace ? {display:'block'} : {display:'none'}
                this.setState({
                    jsbinState: newJsbinState
                })
                event.preventDefault();
            }
        }
        const dotComPos = jsbinLink.indexOf('.com')
        const subString = jsbinLink.substring( ( dotComPos+4 ),( jsbinLink.length ) )
        console.log(subString);
        // http://jsbin.com/qatakap/1/edit?html,output
        console.log(`http://jsbin.com${subString}`)
        axios.get ( `https://jsbin.com/oembed?url=http://jsbin.com${subString}`).then( (res)=>{
            console.log(res)
        })



    }


    render(){
        return (
            <div className="col-8 mt-2" >
                <div className="text-center" >
                    <h1>New Post</h1>
                </div>
                <div>
                    <form onSubmit={this.onSubmit} className="form-group" >
                        <div className="input-group input-group-lg">
                            <input onChange={this.titleInputChange} type="text" className="form-control" placeholder="Add a Title" value={this.state.titleInput} />
                        </div>

                            <div style={this.state.titleState.display} className="alert alert-warning" role="alert"> Cannot leave title empty! </div>

                            <label className="mt-4" htmlFor="post">Add a description</label>
                            <textarea onChange={this.descriptionInputChange} id="post" className="form-control" cols="30" rows="10" placeholder="Describe your problem" value={this.state.descriptionInput}></textarea>

                            <div style={this.state.descriptionState.display} className="alert alert-warning" role="alert"> Cannot leave description empty! </div>

                            <div className="input-group mt-5">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default" >JSBIN</span>
                                </div>
                                <input onChange={this.linkInputChange} type="text" className="form-control" id="jsbinLink" placeholder="attach a JSBIN link?" value={this.state.JSBINLink}/>
                                <div style={this.state.jsbinState.display} className="alert alert-warning" role="alert"> remove spaces in your link! </div>
                            </div>
                            <button className="float-right mt-2 btn btn-primary" >Submit post</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default NewPost