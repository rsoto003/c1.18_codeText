import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

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
                isSpace: false,
                isJsin: true
            },
            inputDisplays: {display: 'block'}
        }
        this.titleInputChange = this.titleInputChange.bind(this);
        this.descriptionInputChange = this.descriptionInputChange.bind(this);
        this.linkInputChange = this.linkInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillMount(){
        if(!this.props.auth){
            this.setState({
                inputDisplays: {display:'none'}
            })
        }
    }
    titleInputChange(event){
        this.setState({
            titleInput: event.target.value
        });
    }
    descriptionInputChange(event){
        this.setState({
            descriptionInput: event.target.value
        });
    }
    linkInputChange(event){
        this.setState({
            JSBINLink:event.target.value
        });
    }

    onSubmit(event){
        event.preventDefault()
        const newTitleState={...this.state.titleState};
        newTitleState.display = this.state.titleInput.length===0 ? {display:'block'} : {display:'none'};
        this.setState({
            titleState: newTitleState
        });
        const newDescriptionState = {...this.state.descriptionState};
        newDescriptionState.display = this.state.descriptionInput.length===0 ? {display:'block'}:{display:'none'};
        this.setState({
            descriptionState: newDescriptionState
        });
        const newJsbinState = this.jsbinIsValid(event);
        this.sumbitToDatabase(newTitleState, newDescriptionState, newJsbinState);
    }
    jsbinIsValid(event){
        const jsbinLink = this.state.JSBINLink
        const newJsbinState = {...this.state.jsbinState}
        let isSpace = false;
        let isJsbin = true;
        for( var i =0; i< jsbinLink.length; i++ ){
            if (jsbinLink[i] === ' ' ){
                isSpace = true
                newJsbinState.display = isSpace ? {display:'block'} : {display:'none'}
                event.preventDefault();
            } 
        }if (jsbinLink.length > 0){

            if (jsbinLink.indexOf('jsbin.com/')===-1){
                isJsbin=false;
                this.setState
                event.preventDefault();
            } else {
                const dotComPos = jsbinLink.indexOf('.com')
                const subString = jsbinLink.substring( ( dotComPos+4 ),( jsbinLink.length ) )
                console.log('subString: ', subString);

                // http://jsbin.com/qatakap/1/edit?html,output
                axios.get ( `https://jsbin.com/oembed?url=http://jsbin.com${subString}`).then( (res)=>{
                    console.log('res.request: ', res.request);
                });  
            }
        }
        newJsbinState.display = isJsbin ? {display:'none'} : {display:'block'} ;
        this.setState({
            jsbinState: newJsbinState
        });
        return newJsbinState.display
    }

    sumbitToDatabase(title, description, jsbin){

        const displays = title.display.display + description.display.display + jsbin.display;
        if (displays == "nonenonenone"){
            console.log('sending the payload')
            const submittedData = {
                newTitleState: this.state.titleInput,
                newDescriptionState: this.state.descriptionInput,
                JsbinState: this.state.JSBINLink
            }
            axios.post('/posts/new', submittedData).then(res =>{
                console.log(res);
                this.props.history.push('/');
            })
        }
    }

    isNotSignedIn(){
        if(!this.props.auth){
            return(
                <div className="jumbotron">
                    <h1 className="text-center">You need to be signed in to post a question !</h1>
                    <a href="http://localhost:5000/auth/github" className="btn btn-dark text-white">
                        <i className="fab fa-github fa-2x text-white pr-2"></i> Sign in with gitHub!
                    </a>
                </div>
            )
        }
    }

    render(){

        return (
            <div className="col-md-10 col-sm-12 mt-2 offset-md-2 pl-5" >
                <div className="text-center" >
                    <h1>New Post</h1>
                </div>
                {this.isNotSignedIn()}
                <div style={this.state.inputDisplays}>
                    <form  onSubmit={this.onSubmit} className="form-group" >
                        <div className="input-group input-group-lg">
                            <input onChange={this.titleInputChange} type="text" className="form-control" placeholder="Add a Title" value={this.state.titleInput} />
                        </div>
                        <div style={this.state.titleState.display} className="alert alert-warning" role="alert"> Cannot leave title empty! </div>
                        <label className="mt-4" htmlFor="post">Add a description</label>
                        <textarea style={this.state.inputDisplays} onChange={this.descriptionInputChange} id="post" className="form-control" cols="30" rows="10" placeholder="Describe your problem" value={this.state.descriptionInput}></textarea>
                        <div style={this.state.descriptionState.display} className="alert alert-warning" role="alert"> Cannot leave description empty! </div>
                        <div className="input-group mt-5">
                            <div className="input-group-prepend">
                                <span className="input-group-text" >JSBIN</span>
                            </div>
                            <input  onChange={this.linkInputChange} type="text" className="form-control" id="jsbinLink" placeholder="attach a JSBIN link?" value={this.state.JSBINLink}/>
                            <div style={this.state.jsbinState.display} className="alert alert-warning" role="alert"> This JSBIN link is not valid! </div>
                        </div>
                        <button  className="float-right mt-2 btn btn-primary" >Submit post</button>
                    </form>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state){
    return{
        auth: state.user.auth
    }
}


export default connect(mapStateToProps)(NewPost);
