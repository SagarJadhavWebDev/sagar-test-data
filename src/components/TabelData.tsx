import React from "react";

interface itemType {
  name: string;
}
export type AirlineDataType = {
  airline: Array<any>;
  name: string;
  country: string;
  slogan: string;
  website: string;
  head_quaters: string;
  logo: string;
};
export type DataType = {
  data: Array<AirlineDataType>;
};
interface TableDataProps {
  columns: Array<itemType>;
  data: DataType;
}
const TableData: React.FC<TableDataProps> = ({ columns, data }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {columns?.map((item, key) => {
            return (
              <th key={key} scope="col" className="py-3 px-6">
                {item?.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data?.data?.map((i, key) => {
          const airlineData: AirlineDataType = i?.airline?.[0];
          return (
            <tr
              key={key}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="py-4 px-6">{key + 1}</td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {airlineData?.name}
              </th>
              <td className="py-4 px-6">{airlineData?.country}</td>
              <td className="py-4 px-6">{airlineData?.slogan}</td>
              <td className="py-4 px-6">
                <a href={`https://${airlineData?.website}`} target="_blank">
                  {airlineData?.website}
                </a>
              </td>
              <td className="py-4 px-6">{airlineData?.head_quaters}</td>
              <td className="py-4 px-6">
                <img style={{ objectFit: "contain" }} src={airlineData?.logo} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableData;
