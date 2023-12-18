import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/scss/argon-dashboard-react.scss';

import AdminLayout from './layouts/Admin.js';
import AuthLayout from './layouts/Auth.js';
import { AuthProvider } from './providers/authProvider';
import ProtectedRoute from './providers/protectedProvider.js';

ReactDOM.render(
	<BrowserRouter>
		<AuthProvider>
			{/* <Switch> */}
			<ProtectedRoute path="/admin" component={AdminLayout} />
			{/* <Route path="/admin" render={(props) => <AdminLayout {...props} />} /> */}
			<Route path="/auth" render={(props) => <AuthLayout {...props} />} />
			{/* <Redirect from="/" to="/admin/dashboard" /> */}
			{/* </Switch> */}
		</AuthProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
