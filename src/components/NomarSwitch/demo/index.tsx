/**
 * title: 基础 开关控件
 * desc: 表单使用 demo
 */
import React, { FC } from 'react';
import { Button, WhiteSpace } from 'antd-mobile';
import { Field, useForm } from 'rc-field-form';
import { Store, ValidateErrorEntity } from 'rc-field-form/es/interface';
// 所有需要从 rc-field-form 中导出的字段都可以在 dform 中导出
import DynamicForm, { IFormItemProps } from '../../../DynamicForm';

const tailLayout = {
  wrapperCol: { offset: 2, span: 20 },
};

interface PageProps {}

const Page: FC<PageProps> = () => {
  const [form] = useForm();
  const onFinish = (values: Store) => {
    // eslint-disable-next-line no-console
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
    // eslint-disable-next-line no-console
    console.log(errorInfo);
  };

  const formsData = [
    {
      type: 'switch',
      fieldProps: 'off',
      placeholder: '选择',
      title: 'Off',
      required: true,
    },
    {
      type: 'switch',
      fieldProps: 'on',
      placeholder: '选择',
      title: 'On',
    },
    {
      type: 'switch',
      fieldProps: 'disabledOn',
      placeholder: '选择',
      title: 'Disabled On',
      required: true,
      disabled: true,
    },
  ] as IFormItemProps[];
  const formsValues = {
    off: false,
    on: true,
    disabledOn: true,
  };
  const formsProps = {
    form,
    onFinish,
    onFinishFailed,
    formsValues,
    data: formsData,
  };

  return (
    <DynamicForm {...formsProps}>
      <WhiteSpace size="sm" />
      <Field {...tailLayout}>
        <Button type="primary" onClick={() => form.submit()}>
          Submit
        </Button>
      </Field>
    </DynamicForm>
  );
};

export default Page;
