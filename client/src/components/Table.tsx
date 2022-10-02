import React, { Fragment, useEffect, useState } from "react";
import request from "../utils/request";
interface ICity {
  date: string,
  name: string,
  amount: string,
  distance: string
}
const HEADS = ['Дата', 'Название', 'Количество', 'Расстояние']
const Table = () => {
  const [cities, setCities] = useState<ICity[]>([]);
  useEffect(() => {
    async function fetchData() {
      const citiesData: ICity[] = await request.getCities();
      setCities(citiesData)
    }
    fetchData();
  }, [])
  return (
    <table>
       <caption>Города</caption>
   <tr>
    {HEADS.map(head => <th>{head}</th>)}
   </tr>
    {cities.map((city) => 
    <tr>
      {
      Object.values(city).slice(1).map((val: string) =>  <td>{val}</td>)
      }
    </tr>
    )}
    </table>
  )
}
export default Table;
