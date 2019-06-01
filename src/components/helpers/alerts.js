import React, {Component} from 'react';
import {NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default class Alerts  extends Component {

    /* create information alerts*/
    info( message, title ){
      NotificationManager.info( message, title );
    }

    /* create warning alerts*/
    warning( message, title ){
      NotificationManager.warning( title, message );
    }

    /* create success alerts*/
    success( message, title ){
      NotificationManager.success( title, message );
    }

    /* create error alerts*/
    error( message, title ){
      NotificationManager.error( message, title );
    }
}
