// This file is will automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript, and only use these pack files to reference
// that code, so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react'
import ReactDOM from 'react-dom'

import ReactForm from "react_form"
import BootstrapSample from "react_bootstrap"
import MatelialUi from "material_ui"

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<ReactForm />, document.getElementById('react_form'))
})

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<BootstrapSample />, document.getElementById('react_bootstrap'))
})

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<MatelialUi />, document.getElementById('react_material_ui'))
})


// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton'
//
// const MyAwesomeReactComponent = () => (
//   <RaisedButton label="Default" />
// );
//
// const App = () => (
//   <MuiThemeProvider>
//     <MyAwesomeReactComponent />
//   </MuiThemeProvider>
// );
//
// document.addEventListener("DOMContentLoaded", e => {
//   ReactDOM.render(
//     <App />,
//     document.getElementById('react_material_ui')
//   );
// })
