export type currencyResponse = {
  data: Currency[];
}
export type Currency = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  price: number;
  market_cap: number;  
};

