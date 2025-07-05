export interface Theme {
  created_at: string;
  id: number;
  name: string;
  updated_at: string;
}

export interface Event {
  id: number;
  name: string;
  description: string;
  location: string;
  kind: string;
  max_people: number | null;
  nbr_subscribers: number;
  begin_at: string;
  end_at: string;
  campus_ids: number[];
  cursus_ids: number[];
  themes: Theme[];
  waitlist: any | null;
  prohibition_of_cancellation: number | null;
  created_at: string;
  updated_at: string;
}
