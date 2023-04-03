export interface Family {
  id: number
}
export interface FamilyDetails extends Family{
  name: string
  nicknames: string
  position: string
  image: string
}
