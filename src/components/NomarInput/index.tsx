import React, { FC } from 'react';
import { StringAndUdfEvent } from '../../PropsType';
import InputItem from '../InputItem';
import Field from '../Field';
import Title from '../Title';
import HorizontalTitle from '../../baseComponents/HorizontalTitle';
import { TextItem } from '../..';
import { INomarInputProps } from './interface';

const DformInput: FC<INomarInputProps> = (props) => {
  const {
    inputType = 'text',
    coverStyle,
    title = '',
    required = false,
    fieldProps,
    rules = [],
    positionType = 'horizontal',
    hasStar = true,
    extra,
    subTitle,
    hidden = false,
    onBlur,
    editable = true,
    className = '',
    disabled = false,
    defaultValue,
    placeholder,
    maxLine,
    onClick,
    labelNumber = 7,
    boxStyle,
    titleStyle,
    ...otherProps
  } = props;

  const isVertical = positionType === 'vertical';

  const inputOnBlur = (val: string | undefined) => {
    if (onBlur) onBlur(val);
  };

  const showTextFiled = () => {
    return (
      <TextItem
        value={defaultValue}
        placeholder={placeholder}
        extra={extra}
        coverStyle={{
          color: '#999',
          ...coverStyle,
        }}
        isVertical={isVertical}
        labelNumber={labelNumber}
        // @ts-ignore
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
          titleStyle={titleStyle}
        />
      </TextItem>
    );
  };

  const showFiled = () => {
    return (
      <InputItem
        value={defaultValue}
        {...otherProps}
        labelNumber={labelNumber > 7 ? 7 : labelNumber}
        onClick={onClick}
        placeholder={placeholder}
        fieldProps={fieldProps}
        extra={isVertical ? '' : extra}
        type={inputType}
        editable={editable}
        disabled={disabled}
        className={className}
        coverStyle={{
          textAlign: isVertical ? 'left' : 'right',
          ...coverStyle,
        }}
        onBlur={(val: StringAndUdfEvent) => {
          inputOnBlur(val);
        }}
        isVertical={isVertical}
      >
        <HorizontalTitle
          required={required}
          hasStar={hasStar}
          title={title}
          labelNumber={labelNumber}
          isVertical={isVertical}
          fieldProps={fieldProps}
          titleStyle={titleStyle}
        />
      </InputItem>
    );
  };

  return (
    <Title
      independentProps={props}
      type="input"
      style={boxStyle}
      titleStyle={titleStyle}
    >
      <Field
        name={fieldProps}
        rules={rules}
        title={title}
        required={required}
        initialValue={defaultValue}
        params={{
          hidden,
        }}
        type="input"
      >
        {editable && !disabled ? showFiled() : showTextFiled()}
      </Field>
    </Title>
  );
};

DformInput.displayName = 'dformInput';

export default DformInput;
