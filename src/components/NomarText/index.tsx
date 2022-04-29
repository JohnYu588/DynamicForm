import React, { FC } from 'react';
import { Rule } from 'rc-field-form/es/interface';
import Field from '../Field';
import Title from '../Title';
import { TextItem } from '../..';
import HorizontalTitle from '../../baseComponents/HorizontalTitle';

export interface INomarTextProps {
  positionType?: 'vertical' | 'horizontal';
  coverStyle?: React.CSSProperties;
  title?: string;
  required?: boolean;
  hasStar?: boolean;
  subTitle?: string | React.ReactNode;
  hidden?: boolean;
  extra?: string | React.ReactNode;
  fieldProps: string;
  rules?: Rule[];
  placeholder?: string;
  labelNumber?: number;
  onClick?: (val: string) => void;
  disabled?: boolean;
  maxLine?: number;
  className?: string;
  defaultValue?: string;
  renderHeader?: string | React.ReactNode;
  renderFooter?: string | React.ReactNode;
}

const DformText: FC<INomarTextProps> = (props) => {
  const {
    positionType = 'horizontal',
    coverStyle,
    title = '',
    required = false,
    fieldProps,
    hasStar = true,
    rules = [],
    extra,
    placeholder = '',
    labelNumber = 7,
    disabled = false,
    maxLine,
    onClick,
    className = '',
    defaultValue,
    hidden = false,
  } = props;

  const isVertical = positionType === 'vertical';

  return (
    <Title independentProps={props} type="text">
      <Field
        title={title}
        required={required}
        rules={rules}
        name={fieldProps}
        initialValue={defaultValue}
        params={{
          hidden,
        }}
        type="text"
      >
        <TextItem
          placeholder={placeholder}
          value="123"
          extra={extra}
          coverStyle={{
            color: '#999',
            ...coverStyle,
          }}
          isVertical={isVertical}
          labelNumber={labelNumber}
          onClick={onClick}
          disabled={disabled}
          maxLine={maxLine}
          fieldProps={fieldProps}
          className={className}
          ellipsis={false}
          arrow={false}
        >
          <HorizontalTitle
            required={required}
            hasStar={hasStar}
            title={title}
            labelNumber={labelNumber}
            isVertical={isVertical}
            fieldProps={fieldProps}
          />
        </TextItem>
      </Field>
    </Title>
  );
};

DformText.displayName = 'dformText';
export default DformText;
