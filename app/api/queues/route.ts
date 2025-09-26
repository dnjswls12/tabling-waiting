import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { restaurant_id, customer_name, customer_phone, party_size } = body

    // 입력값 검증
    if (!restaurant_id || !customer_name || !customer_phone || !party_size) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // 현재 대기열 위치 계산
    const { count } = await supabase
      .from('queues')
      .select('*', { count: 'exact', head: true })
      .eq('restaurant_id', restaurant_id)
      .eq('status', 'waiting')

    const position = (count || 0) + 1

    // 대기열 추가
    const { data, error } = await supabase
      .from('queues')
      .insert({
        restaurant_id,
        customer_name,
        customer_phone,
        party_size,
        status: 'waiting',
        position
      })
      .select()
      .single()

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json({ data })
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}