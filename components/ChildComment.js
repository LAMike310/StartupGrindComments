import React, { Component } from 'react'
class ChildComment extends Component {
  constructor(props) {
    super(props)
  }
  render() {
  	let { comment, author } = this.props.childCommentObject
    return (
        <li>
        	<p>{comment} - <strong><i>{author}</i></strong></p>
        	<hr/>
        </li>
    )
  }
}
export default ChildComment
