import React, { FC, useState } from 'react';
import { Rule } from 'rc-field-form/es/interface';
import classnames from 'classnames';
import Field from '../Field';
import './index.less';

interface INomarCustomPorps {
  fieldProps: string;
  title: string;
  positionType?: 'horizontal' | 'vertical';
  required?: boolean;
  hasStar?: boolean;
  rules?: Rule[];
  onChange?: (currentActiveLink: any) => void;
  customDomProps?: any;
  CustomDom: any;
  subTitle?: string | React.ReactNode;
  hidden?: boolean;
  extra?: string | React.ReactNode;
  defaultValue?: string;
}

const NomarCustom: FC<INomarCustomPorps> = (props) => {
  const {
    defaultValue,
    fieldProps,
    required = false,
    rules,
    title,
    CustomDom,
    customDomProps,
  } = props;

  const dom = () => (
    <Field
      name={fieldProps}
      rules={rules || [{ required, message: `请选择${title}` }]}
      initialValue={defaultValue}
    >
      <CustomDom {...customDomProps} />
    </Field>
  );

  return (
    <div
      className={classnames({
        // 'alitajs-dform-dom': true,
        'alitajs-dform-vertical-dom': true,
      })}
    >
      {dom()}
    </div>
  );
};

export default NomarCustom;
