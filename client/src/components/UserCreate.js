import React from "react";
import { Create,SimpleForm, TextInput,ImageInput,NullableBooleanInput,PasswordInput,SelectInput } from "react-admin";
const UserCreate = (props) => {
    return (
        <Create title='Tạo mới tài khoản' {...props}>
            <SimpleForm>
                <TextInput label='Tên tài khoản' source="username" />
                <PasswordInput label='Mật khẩu' source="password" />
                <TextInput label='Họ Tên' source="name" />
                <NullableBooleanInput label='Giới tính' source="sex" nullLabel="Bê Đê" falseLabel="Nam" trueLabel="Nữ" />
                <TextInput label='Số điện thoại' source="phoneNumber" />
                <TextInput label='Email' source="email" />
                <SelectInput label='Chức vụ' source="role" choices={[
                    {id: 'Khách hàng' , name:'Khách hàng'},
                    {id: 'admin' , name:'admin'},
                    {id: 'Manager' , name:'Manager'},
                ]} 
                />
            </SimpleForm>
        </Create>
    )
}
export default UserCreate