import React, { PropTypes } from 'react'
import Form from "react-jsonschema-form";

// const schema = {
//   title: "Todo",
//   type: "object",
//   required: ["title"],
//   properties: {
//     title: {type: "string", title: "Title", default: "A new task"},
//     done: {type: "boolean", title: "Done?", default: false}
//   }
// };

const schema = {
  type: "object",
  properties: {
    foo: {
      type: "object",
      properties: {
        bar: {type: "string"}
      }
    },
    baz: {
      type: "array",
      items: {
        type: "object",
        properties: {
          description: {
            "type": "string"
          }
        }
      }
    }
  }
}

const uiSchema = {
  foo: {
    bar: {
      // "ui:widget": "textarea"
      // "ui:widget": "file"
      "ui:widget": "email"
    },
    baz: {
      // note the "items" for an array
      items: {
        description: {
          "ui:widget": "textarea"
        }
      }
    }
  }
}



const log = (type) => console.log.bind(console, type);

class ReactForm extends React.Component {
  render() {
    return (
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
      />
    );
  }
}


export default ReactForm;
