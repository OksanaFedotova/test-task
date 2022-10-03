import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from 'store/filterSlice';
import Table from '../components/Table';
import FormFilter from 'components/FormFilter';
import request from '../utils/request';
import { ICity } from 'interfaces';
import { RootState } from 'store/store';

const Main = () => {
  const dispatch = useDispatch();
  const [cities, setCities] = useState<ICity[]>([]);
  const [params, setParams] = useState<string[]>([]);
  const isFiltered = useSelector((state: RootState) => state.filter.isFiltered);
  const filteredData = useSelector((state: RootState) => state.filter.filteredData);
  useEffect(() => {
    async function fetchData() {
      const citiesData: ICity[] = await request.getCities();
      setCities(citiesData);
      setParams(Object.keys(citiesData[0]).slice(2));
      dispatch(setData(citiesData));
    }
    fetchData();
  }, []);
  return (
    <Fragment>
      <FormFilter params={params} conditions={['=', 'содержит', '<', '>']} />
      <Table cities={isFiltered ? filteredData : cities} />
    </Fragment>
  );
};
export default Main;
