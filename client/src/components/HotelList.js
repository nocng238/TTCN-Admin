import React from "react";
import { List,Datagrid,TextField,EditButton,DeleteButton, EmailField} from "react-admin";

const HotelList = (props) =>{
    return <List {...props}>
        <Datagrid>
            {/* <TextField source="id" /> */}
            <TextField label='Tên Khách Sạn' source="name"/>
            <TextField label ='Địa chỉ' source="address" />
            <TextField label='Thành Phố' source="city" />
            <TextField label = 'Số Điện Thoại' source="phoneNumber" />
            <EmailField source="email" />
            <TextField label='Mô tả' source="description" />
            <TextField label='Đánh giá' source='evaluate' />
            <EditButton basePath="/hotels" />
            <DeleteButton basePath="/hotels" />
        </Datagrid>
    </List>
}
export default HotelList