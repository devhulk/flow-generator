//Use Proxy and Reflect API as a handler for our action functions
const Flow = require('./flow')
const Node = require('./node')
const Register = require('./register')
const fs = require('fs')
const _ = require('lodash')

let messages
 fs.readFile('./data/messages.json','utf8',(err,data) => {
  if (err) {console.error}
  //console.log(data)
  messages = data
   getNodes()
  let reg = new Register
   if(
})

let getNodes = () => {
  //console.log(messages)
  let nodes  = JSON.parse(messages)
  nodes.forEach((action) => 
    {
      let reg = new Register
      let newAction = _.assignIn(new Node, action)  
      //console.log(newAction.name)
      if (newAction.nextNode  === 'status complete'){
        Flow.statusComplete(newAction, newAction.status)
        reg.node_id = newAction._id
      if(newAction.parent_id){
        reg.parent_id = newAction.parent_id
      }
        console.log(newAction)

      }
    })

}

//  let task = new Node;
//  console.log(task.status)
//  Flow.statusComplete(task, 'complete')
//  console.log(task.status)


