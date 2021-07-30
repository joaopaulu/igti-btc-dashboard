export type currencyResponse = {
  data: Currency[];
};
export type Currency = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  price: number;
  market_cap: number;
  volume_24h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  max_supply: number;
  timeSeries: TimeSeries;
};

export type TimeSeries = {
  time: number;
  open: number;
  close: number;
  high: number;
  low: number;
};
