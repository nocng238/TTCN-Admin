import React from "react";
import { Edit,SimpleForm, TextInput,ImageInput,NullableBooleanInput,PasswordInput,SelectInput } from "react-admin";
const UserEdit = (props) => {
    return (
        <Edit title='Chỉnh sửa tài khoản' {...props}>
            <SimpleForm>
                <TextInput disabled label='Tên tài khoản' source="username" />
                <PasswordInput label='Mật khẩu' source="password" />
                <TextInput label='Họ Tên' source="name" />
                <NullableBooleanInput label='Giới tính' source="sex" nullLabel="Bê Đê" falseLabel="Nam" trueLabel="Nữ" />
                <TextInput label='Số điện thoại' source="phoneNumber" />
                <TextInput label='Email' source="email" />
                <SelectInput label='Chức vụ' source="role" choices={[
                    {id: 'Khách hàng' , name:'Khách hàng'},
                    {id: 'admin' , name:'Admin'},
                    {id: 'Manager' , name:'Manager'},
                ]} 
                />
            </SimpleForm>
        </Edit>
    )
}
export default UserEdit