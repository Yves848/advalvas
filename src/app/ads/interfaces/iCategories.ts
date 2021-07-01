export interface iCateg  {
  id? : number,
  name: string,
  subCateg?: iCateg[]
  parent? : iCateg;
}

export interface iCateg2 {
  id: string,
  name: string
}

