export interface ProjectUser {
  status: string;
  final_mark: number | null;
  project: {
    name: string;
  };
  'validated?': boolean;
}

export interface CursusUser {
  id: number;
  user_id: number;
  cursus_id: number;
  level: number;
  skills: {
    id: number;
    name: string;
    level: number;
  }[];
}

export interface UserProfile {
  id: number;
  email: string;
  login: string;
  first_name: string;
  last_name: string;
  usual_full_name: string;
  usual_first_name: string;
  url: string;
  phone: string;
  displayname: string;
  kind: string;
  image: {
    link: string;
    versions: {
      large: string;
      medium: string;
      small: string;
      micro: string;
    };
  };
  staff: boolean;
  correction_point: number;
  pool_month: string;
  pool_year: string;
  location: string | null;
  wallet: number;
  anonymize_date: string;
  data_erasure_date: string | null;
  created_at: string;
  updated_at: string;
  alumnized_at?: string | null;
  alumni: boolean;
  active: boolean;
  projects_users: ProjectUser[];
  cursus_users: CursusUser[]; 
}