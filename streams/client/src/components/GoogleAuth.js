import React from 'react'

export class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '273945838064-epkb398r77rdkfl15909brankeo80gdg.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return (<div> GoogleAuth</div>)
    }
}