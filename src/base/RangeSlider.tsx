import React from 'react';

export interface RangeSliderProps {
  title?: string;
  min: string | number | undefined;
  max: string | number | undefined;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type1?: string;
  type2?: string;
}

export default function RangeSlider({
  max,
  min,
  onChange,
  title,
  type1,
  value,
  type2,
}: RangeSliderProps) {
  return (
    <>
      {title ? <h6 className="xsm">Leverage slider</h6> : ''}
      <div className="rangeSlider">
        <div className="rangeSlider__inner">
          <input
            type="range"
            min={min}
            max={max}
            defaultValue={value}
            onChange={onChange}
            className="rangeSlider__input"
          />
        </div>
        {type1 ? (
          <div className="rangeSlider__numbers">
            <span>2x</span>
            <span>5x</span>
            <span>10x</span>
            <span>15x</span>
            <span>20x</span>
            <span>25x</span>
            <span>30x</span>
          </div>
        ) : (
          ''
        )}
        {type2 ? (
          <div className="rangeSlider__numbers">
            <span>0%</span>
            <span>25%</span>
            <span>50%</span>
            <span>75%</span>
            <span>100%</span>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
}
