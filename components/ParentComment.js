
import React, { Component } from 'react'
import ChildComment from './ChildComment'
import moment from 'moment'
 class ParentComment extends Component {

   constructor(props) {
     super(props)
     this.editComment = this.editComment.bind(this)
     this.saveComment = this.saveComment.bind(this)
     this.handleCommentEdit = this.handleCommentEdit.bind(this)
     this.cancelEdit = this.cancelEdit.bind(this)
     // Randomly allow comments to be edited
     this.state = {
     	comment: '',
     	showEdit: false,
     	newComment: '',
     	viewedChildComments: false,
     	days: ""
     }
   }
   componentDidMount() {
   	let { comment, datetime } = this.props.commentObject
   	var timeText = moment(datetime).format("M/DD/YYYY")
   	this.setState({
   		comment: comment,
   		newComment: comment,
   		days: timeText
   	});
   }
   editComment(commentObject){
   		this.setState({
   			showEdit: true 
   		});
   }
   handleCommentEdit(e){
   	console.log(e.target.value)
   	this.setState({
   		newComment: e.target.value 
   	});
   }
   cancelEdit(e) {
   	e.preventDefault()
   	this.setState({
   		showEdit: false,
   		newComment: this.state.comment
   	});
   }
   saveComment(e){
   	e.preventDefault()
   	this.setState({
   		comment: this.state.newComment,
   		showEdit: false 
   	});
   }
   render() {
   	let styles = {
   	 	hide: {
   	 		display: "none" 
   	 	},
   	 	show: {
   	 		display: "inline-block"
   	 	},
   	 	showEditStyle: {
   	 		marginTop: "10px",
   	 		marginBottom: "10px",
   	 	},
   	 	showEditBox: {
   	 		border: "1px solid black",
   	 		padding: "15px"
   	 	},
   	 	badge: {
   	 		padding: "3px",
   	 		height: "45px",
   	 		borderRadius: "50%",
   	 		background: "green",
   	 		cursor: "pointer",
   	 		position: "absolute",
   	 		bottom: "10px"
   	 	},
   	 	editCommentStyle: {
   	 		textDecoration: "underline",
   	 		cursor: "pointer",
   	 	},
   	 	showTextEditor: {
   	 		height: "150px",
   	 		marginTop: "20px",
   	 		padding: "10px"
   	 	},
   	 	showSave: {
   	 		marginLeft: "10px",
   	 		marginBottom: "10px"
   	 	},
   	 	commentIcon: {
   	 		fontSize: "21px",
   	 		marginTop: "9px",
   	 		color: "white"
   	 	},
   	 	cardContainer: {
   	 		minHeight: "120px"
   	 	}
   	 }
     let { comments, author, id } = this.props.commentObject
     let { comment, showEdit, newComment, viewedChildComments, days } = this.state
     // randomly show edit comment text to 1 in 3 comments
     let editable = Math.floor(Math.random() * 3) + 1  == 1
     function commentText(html) { return {__html: comment}; }
     let validComments = comments.filter(function(c) {return c.comment != "" })
     return (
		<div className="card" style={styles.cardContainer}>
		  <div className="card-image waves-effect waves-block waves-light"></div>
		  <div className="card-content">
		  	<div className="chip right">
		  	    <img src="http://materializecss.com/images/yuna.jpg" alt={author} />
		  	    {author} - {days}
		  	</div>
		    <span dangerouslySetInnerHTML={commentText(comment)}></span>
		    <form onSubmit={this.saveComment.bind(this)}>
		    	<textarea 
		    		style={ showEdit ? styles.showTextEditor : styles.hide } 
		    		onChange={this.handleCommentEdit.bind(this)}
		    		value={newComment.replace(/(<([^>]+)>)/ig, " ")}
		    	>
		    	</textarea>
		    	<div style={editable ? styles.show : styles.hide}>
		    		<span 
		    			style={!showEdit  ? styles.editCommentStyle : styles.hide } 
		    			onClick={this.editComment.bind(this)}>
		    			Edit
		    		</span>
		    	</div>
		    	<a className="btn blue right waves-effect waves-light"
		    		style={ showEdit ? styles.showSave : styles.hide }
		    		onClick={ this.saveComment.bind(this) }
		    		
		    	>Save</a>
		    		
		    	<a className="btn orange right waves-effect waves-light"
		    		style={ showEdit ? styles.show : styles.hide }
		    		onClick={ this.cancelEdit.bind(this) }
		    	>Cancel</a>
		    </form>
		    <span 
		    	className={ 
		    	validComments.length == 0 ? "hide" : "activator badge"} 
		    	style={showEdit ? styles.hide : styles.badge }
		    	>
		    	<i className="material-icons" style={styles.commentIcon}>comment</i>
		    </span>
		  </div>
		  <div className="card-reveal function">
		    <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
		    <div>
		    	<div className="row">
		    		<div className="col s12">
		    			<ul style={ validComments.length >= 1 ? styles.show : styles.hide }>
		    				{validComments.map(function(childData) {
		    				 	return (
		    				 	    <ChildComment childCommentObject={childData} />
		    				 	)
		    				})}
		    			</ul>
		    		</div>
		    	</div>
		    </div>
		  </div>
		</div>
     )
   }
 }

 export default ParentComment
