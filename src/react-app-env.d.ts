/// <reference types="react-scripts" />

interface Winery {
  id: number,
  data: WineryData,
  catalog: Wine[],
}

interface WineryData {
  name: string,
  logo: string,
  info: WineryInfo,
}

interface WineryInfo {
  city: string,
  street: string,
  number: number,
  zip: number,
  website: string,
  email: string,
  phone: string,
}

interface Wine {
  id: number,
  name: string
  type: string,
  is_muscat: boolean,
  year: number,
  description: string,
  bottle_size: number,
  price: number,
  alcohol_content: number,
  taste: string[],
  img: string,
}