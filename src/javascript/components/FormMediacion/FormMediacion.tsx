// ---Dependencys
import { Form, Input, Select, Button } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */
const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="52">+52</Option>
      <Option value="53">+53</Option>
    </Select>
  </Form.Item>
);

export default function FormMediacion(): React.ReactElement {
  return (
    <Form {...layout} className='FormMeadiaConten' name="nest-messages" validateMessages={validateMessages}>
      <Form.Item 
        name={['user', 'nombre']}
        label="NOMBRE"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="EMAIL"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="NUMERO TELEFONICO"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        name={['user', 'involucrados']}
        label="PERSONAS INVOLUCRADAS EN EL CONFLICTO"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'descripcion']}
        label="DESCRIPCIÓN DEL CONFLICTO:"
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name={['user', 'relacion']}
        label="PARENTESCO ENTRE LAS PARTES:"
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
