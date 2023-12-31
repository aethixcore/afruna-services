export interface ICategory {
  _id: string;
  name: string;
  children: [];
  options: [];
}

export interface ICategoriesResponse {
  success: boolean;
  message: string;
  data: ICategory[];
  limit: number;
  totalDocs: number;
  page: number;
  totalPages: number;
}
