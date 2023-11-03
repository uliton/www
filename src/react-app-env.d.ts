/// <reference types="react-scripts" />

interface Winery {
  id: number,
  data: WineryData,
  catalog: Wine[],
}

interface WineryData {
  name: string,
  logo: string,
  address: WineryAddress,
  contacts: WineryContacts,
}

interface WineryAddress {
  city: string,
  street: string,
  number: number,
  zip: number,
}

interface WineryContacts {
  website: string,
  email: string,
  phone: string,
}

interface Wine {
  id: number,
  type: string,
  year: number,
  description: string,
  bottle_size: number,
  price: number,
  alcohol_content: number,
  taste: string[],
}