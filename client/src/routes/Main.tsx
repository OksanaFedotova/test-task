import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { setData } from 'store/filterSlice';
import getPages from 'utils/getPages';
import request from '../utils/request';
import Table from '../components/Table';
import FormFilter from 'components/FormFilter';
import Pagination from 'components/Pagination';
import { ICity } from 'interfaces';
import { RootState } from 'store/store';

const Main = () => {
  let { currentPage } = useParams();
  if (currentPage == undefined) currentPage = '0';
  //const currentPage = 0;
  const dispatch = useDispatch();
  const [cities, setCities] = useState<ICity[][]>([[]]);
  const [params, setParams] = useState<string[]>([]);
  const isFiltered = useSelector((state: RootState) => state.filter.isFiltered);
  const filteredData = useSelector((state: RootState) => state.filter.filteredData);
  useEffect(() => {
    async function fetchData() {
      const citiesData: ICity[] = await request.getCities();
      const pages = getPages(citiesData, 10);
      setCities(pages);
      setParams(Object.keys(citiesData[0]).slice(2));
      dispatch(setData(citiesData));
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <FormFilter params={params} conditions={['=', 'содержит', '<', '>']} />
      <Table cities={isFiltered ? filteredData : cities[+currentPage]} />
      <Pagination currentPage={+currentPage} lastPage={cities.length} />
    </Fragment>
  );
};
export default Main;
