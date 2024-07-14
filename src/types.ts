

export interface Organization {
    callback_url: string
    email: string
    id: string
    name: string
    secrets_aggregate: {
      aggregate: {
        count: number
      }
    }
}