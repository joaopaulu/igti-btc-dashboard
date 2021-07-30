import axios from 'axios';
import { currencyResponse } from 'core/types/cripto';
import { BASE_URL } from 'core/utils/requests';
import { useEffect, useState } from 'react';
import './style.scss';

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
      <div className="row">
      {currencyResponse?.data.map(currency =>(        
        <>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card">
              <div className="card-body">
                  <h5 className="text-muted">Preço Atual</h5>
                  <div className="metric-value d-inline-block">
                      <h1 className="mb-1">${formatPrice(currency.price)}</h1>
                  </div>
                  <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                      <span>
                        <i className="fa fa-fw fa-arrow-up"></i>
                      </span>                      
                      <span className={(currency.percent_change_24h < 0) ? 'price-down' : 'price-up'}>
                        {currency.percent_change_24h}%
                      </span>
                  </div>
              </div>
              <div id="sparkline-revenue"></div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card">
              <div className="card-body">
                  <h5 className="text-muted">Marketcap</h5>
                  <div className="metric-value d-inline-block">
                      <h1 className="mb-1 txt-price">${formatPrice(currency.market_cap)}</h1>
                  </div>
                  <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                      
                  </div>
              </div>
              <div id="sparkline-revenue"></div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card">
              <div className="card-body">
                  <h5 className="text-muted">Volume de 24 horas</h5>
                  <div className="metric-value d-inline-block">
                      <h1 className="mb-1 txt-price">${formatPrice(currency.volume_24h)}</h1>
                  </div>
                  <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                      
                  </div>
              </div>
              <div id="sparkline-revenue"></div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="card">
              <div className="card-body">
                  <h5 className="text-muted">Supply</h5>
                  <div className="metric-value d-inline-block">
                      <h1 className="mb-1 txt-price">${formatPrice(currency.max_supply)}</h1>
                  </div>
                  <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                      
                  </div>
              </div>
              <div id="sparkline-revenue"></div>
          </div>
        </div>
        </>
        ))}
      </div>


    </>
  );
};

export default DataTable;
