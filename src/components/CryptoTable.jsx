import { useState, useEffect } from "react";
import CryptoEntry from "./CryptoEntry";
import SearchBar from "./SearchBar";
import { useCryptoDataContext } from "../content/CryptoDataContext";

const CryptoTable = () => {
  const { data, loading } = useCryptoDataContext();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredData(data.result);
    }
  }, [data]);

  const handleFilter = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(data.result);
      return;
    }

    const filteredResults = data.result.filter((entry) =>
      entry.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filteredResults);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-slate-500 p-4">
        <SearchBar onFilter={handleFilter} />
        <div className="overflow-x-auto w-full sm:w-4/6">
          <table className="w-full">
            <thead className="bg-slate-900">
              <tr>
                <th className="p-2 sm:p-3 lg:p-2 text-sm sm:text-sm lg:text-lg">
                  Token
                </th>
                <th className="p-2 sm:p-3 lg:p-4 text-sm sm:text-sm lg:text-lg">
                  Total Supply
                </th>
                <th className="p-2 sm:p-3 lg:p-4 text-sm sm:text-sm lg:text-lg">
                  Available Supply
                </th>
                <th className="p-2 sm:p-3 lg:p-4 text-sm sm:text-sm lg:text-lg">
                  Price
                </th>
                <th className="p-2 sm:p-3 lg:p-4 text-sm sm:text-sm:text-lg">
                  Price Change 1h
                </th>
                <th className="p-2 sm:p-3 lg:p-4 text-sm sm:text-sm lg:text-lg">
                  Price Change 1d
                </th>
                <th className="p-2 sm:p-3 lg:p-4 text-sm sm:text-sm lg:text-lg">
                  Market Cap
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((entry, i) => (
                <CryptoEntry
                  key={i}
                  entry={{
                    ...entry,
                    rowBackgroundColor:
                      i % 2 === 0 ? "bg-slate-800" : "bg-slate-700",
                  }}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CryptoTable;
