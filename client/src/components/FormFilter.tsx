import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import filter from 'utils/filter';
import type { RootState } from '../store/store';
import { setFilteredData, setIsFiltered } from 'store/filterSlice';
import { ICity } from 'interfaces';

const FormFilter = ({ params, conditions }: { params: string[]; conditions: string[] }) => {
  const dispatch = useDispatch();
  const [paramValue, setParamValue] = useState('');
  const [conditionValue, setConditionValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const cities = useSelector((state: RootState) => state.filter.data);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = filter(cities, paramValue, conditionValue, inputValue);
    dispatch(setFilteredData(res));
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
        dispatch(setIsFiltered(true));
      }}
    >
      <label>
        Параметр
        <select value={paramValue} onChange={(e) => setParamValue(e.target.value)}>
          <option selected={true}>Выберите</option>
          {params.map((param, index) => (
            <option key={index}>{param}</option>
          ))}
        </select>
      </label>
      <label>
        Условие
        <select value={conditionValue} onChange={(e) => setConditionValue(e.target.value)}>
          <option selected={true}>Выберите</option>
          {conditions.map((condition, index) => (
            <option key={index} value={condition}>
              {condition}
            </option>
          ))}
        </select>
      </label>
      <label>
        Значение
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <input type="submit" value="Применить" />
    </form>
  );
};
export default FormFilter;
