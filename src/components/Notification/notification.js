import React from 'react';
import { Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import moment from 'moment';
import 'moment/locale/fr';


const Notifications = ({notifications}) => {  

  if (!isLoaded(notifications)) {
    return <div>Loading...</div>
  }
  return (
    <div>
      {notifications && notifications.map(notification => {        
        return(
          <Message
          key={notification.id}
          header= {moment(notifications[0].createdAt.toDate()).format('LL') + ' ' + moment(notifications[0].createdAt.toDate()).format("LT")}
          content={notification.content}  
          color= {notification.color}              
          />
        )
      })}
    </div>
  )
}

const MapStateToProps = (state) =>{
  return {
    notifications: state.firestore.ordered.notifications,
    uid: state.firebase.auth.uid
  }
}

export default compose(
  connect(MapStateToProps, null),
  firestoreConnect ((props) => {
    return [
      {
        collection: 'notifications', 
        where: ['authorId', '==', props.uid], 
        limit: 7, 
        orderBy: ['createdAt', 'desc']
      } 
    ]
    }),
)(Notifications)

