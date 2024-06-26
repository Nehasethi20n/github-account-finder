export type UserDataType = {
  login: string;
    avatar_url: string;
    id:number;
    name: string;
    bio: string;
    html_url:string;
    repos_url:string;
    location: string;
    followers: number;
    following: number;
    public_repos: number;

  };
  
  export type RepositoriesDataType = {
    id: number;
    name: string;
    html_url: string;
  };