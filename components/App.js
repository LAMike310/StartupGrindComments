import React, { Component } from 'react'
import Comments from './Comments'
import moment from 'moment'

var discussionObject = {
  "discussion": {
      "id": 1,
      "title": "UI vs UX",
      "discussion": "What's the difference between UI and UX design?",
      "author": "Camille",
      "author_id": 1,
      "datetime": "2015-01-23T18:25:43.511Z",
      "comments": [
          {
              "id": 1,
              "author": "Dan",
              "author_id": 2,
              "datetime": "2016-02-20T18:31:43.511Z",
              "comment": "There are a lot of erroneous answers in this thread.<br><br>Simply put: UX is the <strong>overall</strong> experience one has with a product or service, which can include a UI. A UI is typically a combination of visual design (the look and feel) and the interaction design (how it works). UX, however, can encompass a wide range of disciplines, from industrial design to architecture to content.",
              "public": true,
              "deleted": false,
              "comments": [
                  {
                      "id": 2,
                      "author": "James",
                      "author_id": 3,
                      "datetime": "2015-01-24T10:15:03.511Z",
                      "comment": "I think this gets it right much more than other answers, but UX could also include other customer touchpoints I think. Where do those go here? I also disagree with how you've placed the HCI circle... anyone who works in HCI would disagree with that definition (e.g., that it ignores human factors, sound design, visual design, or even IA...)",
                      "public": true,
                      "deleted": false
                  },
                  {
                      "id": 3,
                      "author": "Brady",
                      "author_id": 4,
                      "datetime": "2015-02-10T11:42:41.511Z",
                      "comment": "+1 User Experience encompasses anything in the process that a user experiences; hence the name.",
                      "public": true,
                      "deleted": false
                  },
                  {
                      "id": 4,
                      "author": "Steven",
                      "author_id": 5,
                      "datetime": "2015-02-21T10:55:43.511Z",
                      "comment": "",
                      "public": true,
                      "deleted": true
                  }
              ]
          },
          {
              "id": 5,
              "author": "Todd",
              "author_id": 6,
              "datetime": "2016-05-10T11:25:43.511Z",
              "comment": "UI design is an activity/discipline that focuses on the way someone interfaces with the system—graphical, physical, or otherwise. UI is an activity/discipline that is part of the UX umbrella.<br><br>UX, or User Experience is an umbrella term that refers to pretty much any activity/discipline associated with product or service design.",
              "public": true,
              "deleted": false,
              "comments": []
          },
          {
              "id": 7,
              "author": "Jeff",
              "author_id": 8,
              "datetime": "2015-02-23T11:55:43.511Z",
              "comment": "UI Design is a component of UX design. In other words, the user interface is one part of the user experience. There are many other components that play into the experience therefore UX design is a more holistic view of a product's experience from the customer's perspective.",
              "public": true,
              "deleted": false,
              "comments": []
          },
          {
              "id": 8,
              "author": "Brady",
              "author_id": 4,
              "datetime": "2015-03-13T21:02:14.511Z",
              "comment": "User interface refers to what the user interacts and interfaces with, such as the buttons and forms and manner of control of the application. There are many more elements to user experience, such as information architecture -- how information is categorised and presented, usually to emphasise certain aspects or facilitate certain actions. There is also usability testing, which tests how easy to use and understand the application is. Then there's visual design, which deals with the look and feel. There are many other aspects to user experience because the user's experience is more than just what the user interacts with, it is anything and everything that you do to design the user's experience of your application.",
              "public": true,
              "deleted": false,
              "comments": [
                  {
                      "id": 6,
                      "author": "Andy",
                      "author_id": 7,
                      "datetime": "2015-03-20T16:55:43.511Z",
                      "comment": "I'd suggest that UX (and UI and several other acronyms) are part of service design, not the other way around. It depends on the project, though, as some SD projects are pretty much straight UX/CX projects. But many (the good ones!) are about organisational change, people, networks, etc. as much as they are about specific touchpoint or experience design.",
                      "public": true,
                      "deleted": false
                  }
              ]
          },
          {
              "id": 10,
              "author": "Chrys",
              "author_id": 9,
              "datetime": "2015-11-26T14:12:43.511Z",
              "comment": "It's like a restaurant. The utensils, plate, table, chair, that's user interface (which can contribute to experience). The food, service, ambience, that's user experience.",
              "public": true,
              "deleted": false,
              "comments": [
                  {
                      "id": 11,
                      "author": "Laís",
                      "author_id": 10,
                      "datetime": "2016-03-26T16:55:43.511Z",
                      "comment": "I think a better analogy may be UI = making sure the food is nutritionally complete, is the correct portion size, and is served at the right temperature. UX = making the food look & taste fantastic.",
                      "public": true,
                      "deleted": false
                  },
                  {
                      "id": 12,
                      "author": "Brady",
                      "author_id": 4,
                      "datetime": "2011-03-27T11:23:45.511Z",
                      "comment": "Can't one argue then that UI design is a subset of UX design since UI affects/contributes to UX? If the utensils, plate, etc. are trashy then the perceived food, service, etc. also suffers.",
                      "public": true,
                      "deleted": false
                    }
                ]
            }
      ]
    }
  }
class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>{discussionObject.discussion.title} </h1>
        <h5>{ discussionObject.discussion.author } - {moment(discussionObject.discussion.datetime).format("M/DD/YY")}</h5>
        <hr/>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ratione consectetur facilis ullam impedit necessitatibus porro nam repellendus aliquam! Porro, dolorem. Quam enim id vel voluptatibus deleniti facere asperiores consequuntur.</div>
        <div>Fugiat distinctio quos aliquid non nobis vero reprehenderit, hic tempore quam veniam! Earum obcaecati sit facere deleniti, vel laborum illum! Rerum fuga veritatis mollitia similique modi, blanditiis consequatur ab, architecto!</div>
        <div>Nostrum, aliquam animi atque molestias vitae ipsa ex nihil totam blanditiis consequuntur placeat, possimus quas adipisci dolor repellat. Suscipit sunt quae excepturi ipsum vel adipisci consequuntur, modi optio temporibus consectetur?</div>
        <div>Saepe ut dicta eligendi sunt enim, labore repellat in. Eos ducimus illum doloremque sunt possimus. A, officiis deserunt odit ut natus sequi sapiente voluptates assumenda necessitatibus nobis ad omnis in.</div>
        <div>Ut id placeat perspiciatis ullam minima rerum blanditiis fuga porro quasi, iste expedita earum ad autem aliquam officia doloribus eum aperiam saepe modi voluptate. Quo repellendus cum natus fugiat tenetur.</div>
        <br/><br/>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ratione consectetur facilis ullam impedit necessitatibus porro nam repellendus aliquam! Porro, dolorem. Quam enim id vel voluptatibus deleniti facere asperiores consequuntur.</div>
        <div>Fugiat distinctio quos aliquid non nobis vero reprehenderit, hic tempore quam veniam! Earum obcaecati sit facere deleniti, vel laborum illum! Rerum fuga veritatis mollitia similique modi, blanditiis consequatur ab, architecto!</div>
        <div>Nostrum, aliquam animi atque molestias vitae ipsa ex nihil totam blanditiis consequuntur placeat, possimus quas adipisci dolor repellat. Suscipit sunt quae excepturi ipsum vel adipisci consequuntur, modi optio temporibus consectetur?</div>
        <div>Saepe ut dicta eligendi sunt enim, labore repellat in. Eos ducimus illum doloremque sunt possimus. A, officiis deserunt odit ut natus sequi sapiente voluptates assumenda necessitatibus nobis ad omnis in.</div>
        <div>Ut id placeat perspiciatis ullam minima rerum blanditiis fuga porro quasi, iste expedita earum ad autem aliquam officia doloribus eum aperiam saepe modi voluptate. Quo repellendus cum natus fugiat tenetur.</div>
        <br/><br/>
        <h5>{discussionObject.discussion.discussion}</h5>
        <hr/>

        <Comments data={discussionObject} />
      </div>
    )
  }

}

export default App
