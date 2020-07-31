export interface AllLaunches {
  id: string;
  flight_number: number;
  date_utc: string;
  details: string;
  success: boolean;
  rocket: string;
  links: any;
  upcoming: boolean;
}
