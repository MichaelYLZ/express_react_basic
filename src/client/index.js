import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Greet extends Component {
    
    state = {
        name: null
    }

    componentDidMount() {
        fetch('/api/name')
        .then(response => response.json())
        .then(data => this.setState({name:data.name}))
    }
    
    render() {
        const { name } = this.state;
        
        return (
            <div>
            {name ? <p>{`Hello ${name}`}</p>
            :
            <p>正在加载...</p>}
            </div>
        )
    }
    
}

ReactDOM.render(
	<Greet />,
	document.getElementById('root')
);