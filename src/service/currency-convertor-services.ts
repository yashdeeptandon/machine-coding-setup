import { FETCH_LIVE_RATES } from "@/utils/api";
import axios from "axios";

export type LiveRateProperties = {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: Date;
  time_next_update_unix: number;
  time_next_update_utc: Date;
  base_code: string;
  target_code: string;
  conversion_rate: number;
  conversion_result: number;
};

export const fetchLiveCurrencyRates = async (
  currencyFrom: string,
  currencyTo: string,
  amount: number
) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `${FETCH_LIVE_RATES}/${apiKey}/pair/${currencyFrom}/${currencyTo}/${amount}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
