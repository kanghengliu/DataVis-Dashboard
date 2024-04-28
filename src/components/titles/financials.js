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
    <div className="rounded text-gray-800 flex flex-col items-center justify-center text-3xl font-bold">
      <div style={{ textAlign: 'center', fontSize: '24px' }}>
        Total Budget: <span style={{ display: 'block', fontSize: '36px', color: '#E34546' }}>${financials.totalBudget.toLocaleString()}</span>
      </div>
      <div style={{ height: '50px' }}></div> {/* Spacer div */}
      <div style={{ textAlign: 'center', fontSize: '24px' }}>
        Total Revenue: <span style={{ display: 'block', fontSize: '36px', color: '#E34546' }}>${financials.totalBoxOffice.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default FinancialInfo;
