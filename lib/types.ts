export interface Restaurant {
  id: string
  name: string
  phone: string
  address: string
  cuisine_type: string
  max_capacity: number
  created_at: string
}

export interface Queue {
  id: string
  restaurant_id: string
  customer_name: string
  customer_phone: string
  party_size: number
  status: 'waiting' | 'called' | 'completed' | 'cancelled'
  position: number
  created_at: string
  called_at?: string
}

export interface User {
  id: string
  email: string
  role: 'owner' | 'customer'
  created_at: string
}