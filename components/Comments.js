import React, { Component } from 'react'
import ParentComment from './ParentComment'
class Comments extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { data } = this.props
    let { comments } = data.discussion
    if(data){
        function commentText(html) { return {__html: html}; };
        return (
            <ul>
               {comments.map(function(commentObject) {
                return (
                    <ParentComment commentObject={commentObject} />
                )
               })}
            </ul>

        )
    } else {
        return <div>Loading</div>
    }
  }

}

export default Comments
