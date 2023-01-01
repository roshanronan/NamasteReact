const heading1 = React.createElement('h1',{},'Hello from React...')
    const heading2= React.createElement('h2',{},'Hello from React...')

    const container = React.createElement('div',{
        className:"container"
    },[heading1,heading2])

    const root = ReactDOM.createRoot(document.getElementById('root'))

    root.render(container)