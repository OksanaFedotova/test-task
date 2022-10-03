import React from 'react';
import { ICity } from 'interfaces';

const HEADS = ['Дата', 'Название', 'Количество', 'Расстояние'];
const Table = ({ cities }: { cities: ICity[] }) => {
  return (
    <table>
      <caption>Города</caption>
      <tr>
        {HEADS.map((head, index) => (
          <th key={index}>{head}</th>
        ))}
      </tr>
      {cities.map((city, index) => (
        <tr key={index}>
          {Object.values(city)
            .slice(1)
            .map((val: string) => (
              <td key={index}>{val}</td>
            ))}
        </tr>
      ))}
    </table>
  );
};
export default Table;
