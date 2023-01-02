import React from "react"
import ReactDOM from 'react-dom/client'

const heading1 = React.createElement('h1',{key:1},'Hello from React Parcel...')
const heading2= React.createElement('h2',{key:2},'Hello from React...')
const container = React.createElement('div',{
    className:"container"
},[heading1,heading2])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)