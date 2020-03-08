import React from 'react';

class Init extends React.Component {
    async componentDidMount() {
        const response = await fetch("/init?api=true");
        const data = await response.json();
        this.props.oninit(data);
    }

    login() {
        fetch("/login?api=true", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: "test1",
                password: "testing123"
            })
        })
    }

    logout() {
        fetch("/logout?api=true", {
            method: "POST",
        })
    }

    apilist() {
        fetch("/files?api=true");
    }

    render() { 
        return (
        // https://reactjs.org/docs/fragments.html#short-syntax
        <>
            <button onClick={this.login}>Login</button>
            <button onClick={this.logout}>logout</button>
            <button onClick={this.apilist}>listtest</button>
        </>
    )}
}

export default Init;
