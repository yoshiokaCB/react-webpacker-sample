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


const react_dom_try_render = (component, selector_id) => {
  const selector = document.getElementById(selector_id);
  if(selector != null) ReactDOM.render(component, selector)
}

document.addEventListener("DOMContentLoaded", e => {
  react_dom_try_render(<BootstrapSample />,'react_bootstrap')
  react_dom_try_render(<ReactForm />, 'react_form')
  react_dom_try_render(<MatelialUi />, 'react_material_ui')
})
