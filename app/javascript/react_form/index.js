import React, { PropTypes } from 'react'
import Form from "react-jsonschema-form";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};
const log = (type) => console.log.bind(console, type);

class ReactForm extends React.Component {
  render() {
    return (
      <Form schema={schema} onChange={log("changed")} onSubmit={log("submitted")} onError={log("errors")} />
    );
  }
}


export default ReactForm;
