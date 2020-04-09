import React, { useState, useEffect, useMemo } from 'react';

import { MdNotifications } from 'react-icons/md';
import { Container, Badge, Scroll, NotificationList, Notification } from './styles';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
// parseISO converte data em formato ISO 8601 para um objeto date do javascript
// formatDistance retorna o intervalo entre a data atual e a passa como parâmetro.
// ex: 12 às 10:00 até 14 às 10:00 = há 2 dias.
import { getData } from '../../services/apifake';

export default function Notifications() {

  const [ visible, setVisible ] = useState(false);
  const [ notifications, setNotifications ] = useState([]);

  const hasUnread = useMemo(
    () => !! notifications.find(notification => notification.read === false)
  , [notifications] );

  function handleListVisible(){
    setVisible(!visible);
  }
  
  useEffect(()=> {
    async function loadNotifications() {
      //const reponse = await api.get('/notifications');
      const response = await getData(true, '/notification');
      
      // HORA ATUAL DO USUÁRIO - HORÁRIO CRIADO + FUSO  DO USUÁRIO = (6:05 - 3:00 + 3:00) 

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(), // obtém a data atual
          { addSuffix: true, locale: pt } // há
        ),
      }))
      
      console.log(data);

      setNotifications(data);
    }

    loadNotifications();

  }, []);

  function handleMarkAsRead(id) {
    // seta ela como lida no backend
    //await api.put('notifications/${id}')

    setNotifications(
      notifications.map(notification => 
        notification.id === id ? {...notification, read: true } : notification
      )
    )
  }

  return (
    <Container>
     <Badge onClick={handleListVisible} hasUnread={hasUnread}>
      <MdNotifications color="#7159c1" size={20} />
     </Badge>
     <NotificationList visible={visible}>
      <Scroll>
        {notifications.map(notification => (
          <Notification key={notification.id} unread={!notification.read}>
          <p>{notification.content}</p>
          <time>{notification.timeDistance}</time>
          {!notification.read && 
            <button type="button" onClick={()=> handleMarkAsRead(notification.id)} >Marcar como lida</button>}
          </Notification>
        ))}
      </Scroll>
     </NotificationList>
    </Container>
  );
}
