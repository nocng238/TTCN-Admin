import React from "react";
import { Create,SimpleForm, TextInput,ImageInput,ImageField,NullableBooleanInput,PasswordInput,SelectInput } from "react-admin";
const HotelEdit = (props) => {
    return (
        <Create title='Chỉnh sửa Khách sạn' {...props}>
            <SimpleForm>
                <TextInput label='Tên khách sạn' source="name" />              
                <TextInput label='Địa chỉ' source="address" />
                <TextInput label='Thành Phố' source="city" />
                <TextInput label='Số điện thoại' source="phoneNumber" />
                <TextInput label='Email' source="email" />
                <TextInput label='Cách trung tâm' source="farFromCentre" />
                <ImageInput source="pictures" label="Related pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
                    <ImageField source="src" title="title" />
                </ImageInput>
                <TextInput label='Mô tả' mutiline source="description" />
                <TextInput label='Đánh giá' source="evaluate" />
            </SimpleForm>
        </Create>
    )
}
export default HotelEdit