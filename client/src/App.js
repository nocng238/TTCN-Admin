import React from 'react'
import {Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import UserList from './components/UserList.js'
import UserCreate from './components/UserCreate.js'
import UserEdit from './components/UserEdit.js'
import HotelList from './components/HotelList.js'
import HotelCreate from './components/HotelCreate.js'
import HotelEdit from './components/HotelEdit.js'
// import {Layout} from './Layout.js'
import BookIcon from '@material-ui/icons/Book';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PeopleIcon from '@material-ui/icons/People';
import HotelIcon from '@material-ui/icons/Hotel';


function App() {
  return <Admin label="HotelAdmin" title='HotelAdmin' dataProvider={restProvider('http://localhost:3000')}>
    <Resource icon={PeopleIcon} label='Khách hàng' name= 'Users' list={UserList} create={UserCreate} edit={UserEdit} />
    <Resource icon={HotelIcon} name= 'Hotels' list={HotelList} create={HotelCreate} edit={HotelEdit}  />
  </Admin>
}

export default App;
