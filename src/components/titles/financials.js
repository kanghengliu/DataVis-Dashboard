import React, { useState, useEffect } from 'react';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

const FinancialInfo = ({ tconst }) => {
  const { data, error } = useSWR('/data/financial_info.json', fetcher);
  const [financials, setFinancials] = useState({ totalBudget: 0, totalBoxOffice: 0 });

  useEffect(() => {
    if (data) {
      const filmData = data.find(item => item.tconst === tconst);
      if (filmData) {
        setFinancials({
          totalBudget: filmData.budget,
          totalBoxOffice: filmData.box_office
        });
      }
    }
  }, [data, tconst]);

  if (error) return <div>Failed to load the data.</div>;
  if (!data) return <div>Loading info...</div>;

  return (
    <div className="bg-gray-700 p-4 rounded text-white flex flex-col items-center justify-center text-xl">
      <div>
        Total Budget: <span className="block text-3xl" style={{ color: '#F1AFE1' }}>${financials.totalBudget.toLocaleString()}</span>
      </div>
      <div>
        Total Revenue: <span className="block text-3xl" style={{ color: '#F1AFE1' }}>${financials.totalBoxOffice.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default FinancialInfo;
