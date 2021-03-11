import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from "popper.js";
import 'bootstrap/dist/js/bootstrap'
import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './App.css'

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)

// Now we can render our application into it
render(<App />, document.getElementById('root'))
