import React, { Component } from 'react';

import firebase, { auth, provider } from './firebase.js';
import * as firebaseui from 'firebaseui';

class Login extends Component {
  constructor() {
    super();
    // FirebaseUI config.
    var uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ]
    };
    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    this.state = {
      user: null,
      ui: ui,
      uiConfig: uiConfig
    }
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.attachLoginUI();

    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });

    this.callApi()
      .then((res) => {
        this.setState({ response: `${res.field1} ${res.field2} ${res.field3 }`});
      })
      .catch(err => console.log(err));
  }

  attachLoginUI() {
    this.state.ui.start('#firebaseui-auth-container', this.state.uiConfig);
  }

  handleInputChange = event => {
    this.setState({
        query: event.target.value
    })
  }

  callApi = async () => {
    const response = await fetch('/api/firebase/read');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  logout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
    this.attachLoginUI();
  }

  render() {
    console.log(this.state.user);
    console.log(this.state);

    return (
      <div className="App">
        {this.state.user ?
          <button onClick={this.logout}>Logout</button>
          :
          <div id="firebaseui-auth-container"></div>
        }
      </div>
    );
  }
}

export default Login;



// import React, { Component } from 'react';

// class Login extends Component {
//     componentDidMount() {
//         ui.start('#firebaseui-auth-container', {
//             signInOptions: [
//                 firebase.auth.EmailAuthProvider.PROVIDER_ID
//             ],
//             // Other config options...
//         });
//     }

//     render() {
//         return (
//             <div class="login">
//                 <div id="firebaseui-auth-container">
//                 </div>
//             </div>
//         )
//     }
// }

// export default Login;