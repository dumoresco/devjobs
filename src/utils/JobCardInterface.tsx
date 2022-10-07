export interface JobCardInterface {
  id: number;
  postedAt: string;
  contract: string;
  location: string;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
}

export interface JobDetailsInterface {
  id: number;
  postedAt: string;
  contract: string;
  location: string;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  description: string;
  requirements: {
    content: string;
    items: [];
  };
  role: {
    content: string;
    items: [];
  };
}
