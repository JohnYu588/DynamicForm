/**
 * title: 基础 文本展示框
 * desc: 表单使用 demo
 */
import React, { FC } from 'react';
import { Button, WhiteSpace } from 'antd-mobile';
import DynamicForm, {
  useForm,
  Store,
  ValidateErrorEntity,
  DformTextArea,
} from '@alitajs/dform';
import PhotoIcon from '../../../assets/photo.png';
import PositionIcon from '../../../assets/position_ico.png';
import DformText from '../';

const Page: FC = () => {
  const [form] = useForm();

  const photoImg = () => <img src={PhotoIcon} style={{ width: '1rem' }} />;

  const extraImg = () => <img src={PositionIcon} style={{ width: '0.5rem' }} />;

  const subTitle = () => <div style={{ color: 'red' }}>此为必填项(副标题)</div>;

  const onFinish = (values: Store) => {
    // eslint-disable-next-line no-console
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const formsValues = {
    userAge: '这里只读不可编辑',
    username5: 'disabled 为 true, 则 onClick 失效',
    userTitle: '点击获取表单全部数据',
    area: '欢迎使用 dform 动态表单欢迎使用 dform 动态表单欢迎使用 dform 动态表单欢迎使用 dform 动态表单欢迎使用 dform 动态表单欢迎使用 dform 动态表单',
  };
  const formProps = {
    onFinish,
    onFinishFailed,
    formsValues,
    form,
    isDev: true,
  };
  return (
    <>
      <DynamicForm {...formProps}>
        <DformText
          fieldProps="username"
          required
          placeholder="输入项居左"
          title="用户名"
          subTitle={subTitle()}
          coverStyle={{
            textAlign: 'left',
            color: 'blue',
          }}
          onClick={() => {
            console.log();
          }}
        />
        <DformText
          fieldProps="username5"
          required
          title="定位"
          extra={extraImg()}
          labelNumber={3}
          placeholder="暂无数据"
          disabled
          onClick={(vals: string) => {
            // eslint-disable-next-line no-console
            console.log(vals);
          }}
          defaultValue='disabled 为 true, 则 onClick 失效'
        />
        <DformText
          fieldProps="userTitle"
          required
          placeholder="点击获取表单全部数据"
          title="标题"
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log(form.getFieldsValue());
          }}
          defaultValue='点击获取表单全部数据'
        />
        <DformText
          fieldProps="titleTooLong"
          required
          placeholder="暂无数据"
          title="标题名称过长"
          labelNumber={7}
        />
        <DformText
          fieldProps="titleTooLong2"
          required
          placeholder="请输入身份证"
          title="身份证"
          positionType="vertical"
        />
        <DformText
          fieldProps="area"
          required
          title="控制显示行数"
          placeholder="暂无数据"
          // positionType="vertical"
          labelNumber={7}
          maxLine={2}
          defaultValue="欢迎使用 dform 动态表单欢迎使用 dform 动态表单欢迎使用 dform 动态表单欢迎使用 dform 动态表单欢迎使用 dform 动态表单欢迎使用 dform 动态表单"
        />
      </DynamicForm>
      <WhiteSpace size="sm" />
      <Button type="primary" onClick={() => form.submit()}>
        Submit
      </Button>
    </>
  );
};

export default Page;
