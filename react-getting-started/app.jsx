class HelloWorld extends React.Component {
    render(){
        return(
            <h1>HEllo World!</h1>
        );
    }
}

React.render(
    <HelloWorld />,
    document.getElementById('content')
);