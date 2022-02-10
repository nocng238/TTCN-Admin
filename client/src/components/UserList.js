import React from "react";
import { List,Datagrid,TextField,EditButton,DeleteButton,EmailField } from "react-admin";

const UserList = (props) =>{
    return <List {...props}>
        <Datagrid>
            {/* <TextField source="id" /> */}
            <TextField label='Tên tài khoản' source="username" title="Tài khoản" />
            <TextField label ='Tên Khách Hàng' source="name" />
            <TextField label='Giới tính' source="sex" />
            <TextField label = 'Số Điện Thoại' source="phoneNumber" />
            <EmailField source="email" />
            <TextField label='Chức vị' source="role" />
            <EditButton basePath="/users" />
            <DeleteButton basePath="/users" />
        </Datagrid>
    </List>
}
export default UserList