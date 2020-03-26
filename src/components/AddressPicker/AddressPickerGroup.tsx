import React, { FC, useState } from 'react';
import { IAddressPickerProps } from './interface';
import '../../styles/index.less';

const AddressPickerGroup: FC<IAddressPickerProps> = props => {
  const { placeholder = '请选择', positionType = 'horizontal' } = props;

  const [inputLabel, setInputLabel] = useState<string>('');

  const isVertical = positionType === 'vertical';

  const openMoal = () => {};

  return (
    <>
      <div className="am-list-item am-list-item-middle alitajs-dform-address">
        <div className="am-list-line">
          {!isVertical && <div className="alitajs-dform-multiple-tltle">{props.children}</div>}
          <div
            className="alitajs-dform-multiple-value"
            style={{
              width: isVertical ? '100%' : '60%',
            }}
          >
            <input
              type="text"
              value={inputLabel}
              readOnly
              style={{
                textAlign: isVertical ? 'left' : 'right',
              }}
              className="alitajs-dform-multiple-input"
              placeholder={placeholder}
              onClick={() => {
                openMoal();
              }}
            />
            <img
              className="alitajs-dform-right"
              src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2216%22%20height%3D%2226%22%20viewBox%3D%220%200%2016%2026%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cg%20id%3D%22UI-KIT_%E5%9F%BA%E7%A1%80%E5%85%83%E4%BB%B6%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%229.9%E5%9F%BA%E7%A1%80%E5%85%83%E4%BB%B6%22%20transform%3D%22translate(-5809.000000%2C%20-8482.000000)%22%20fill%3D%22%23C7C7CC%22%3E%3Cpolygon%20id%3D%22Disclosure-Indicator%22%20points%3D%225811%208482%205809%208484%205820.5%208495%205809%208506%205811%208508%205825%208495%22%3E%3C%2Fpolygon%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt=""
              onClick={() => {
                openMoal();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressPickerGroup;
