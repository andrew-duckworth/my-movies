export type FamilyActions = { type: 'LOAD_FAMILY'; payload: number }

// ACTION CREATORS

export default function loadFamily(id: number): FamilyActions {
  return {
    type: 'LOAD_FAMILY',
    payload: id,
  }
}
