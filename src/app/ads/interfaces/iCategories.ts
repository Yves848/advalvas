export interface iCateg  {
  id? : number,
  name: string,
  subCateg?: iCateg[]
  parent? : iCateg;
}

