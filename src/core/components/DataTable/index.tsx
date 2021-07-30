import axios from 'axios';
import { currencyResponse } from 'core/types/cripto';
import { BASE_URL } from 'core/utils/requests';
import { useEffect, useState } from 'react';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
    price,
  );
};


const DataTable = () => { 
  const [currencyResponse, setCurrencyResponse] = useState<currencyResponse>();

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then(response => {
        setCurrencyResponse(response.data);
        console.log(response.data);
      });
  }, []);


  return (
    <>
      
      <div className="table-responsive">     
        {currencyResponse?.data.map(currency =>(
          <>
          <h1>{currency.name} - {currency.symbol}</h1>
         
          <p>Preço Atual: ${formatPrice(currency.price)}</p>
          <p>Marcket Cap: ${formatPrice(currency.market_cap)}</p>
          </>
        ))}
      </div>
    </>
  );
};

export default DataTable;
