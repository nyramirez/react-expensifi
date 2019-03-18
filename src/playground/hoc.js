// Higher Order Component (HOC)

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: { props.info }</p>
    </div>
);

const withAdmindWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please do not share!</p>}
            <WrappedComponent { ...props } />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated && <p> This user is AUTHENTICATED </p>}
            {props.isAuthenticated ? <WrappedComponent { ...props } /> : <p> User NOT AUTHENTICATED </p>}
        </div>
    );
};

const AdminInfo = withAdmindWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));