export interface Emoji {
    title: string;
    symbol: string;
    keywords: string;
  }

export interface Items {
  title: string;
  text: string;
  active:boolean;
}

export interface state <T>{
  value : T;
  OnChange : React.Dispatch<React.SetStateAction<T>>
}

export interface Params{
  key:string,
  value:string | number
}

export interface Photo {
  id?:       string;
  owner?:    string;
  secret?:   string;
  server?:   string;
  farm?:     number;
  title?:    string;
  ispublic?: number;
  isfriend?: number;
  isfamily?: number;
}