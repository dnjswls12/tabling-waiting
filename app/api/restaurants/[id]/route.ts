import { supabase } from '@/lib/supabase'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    if (!data) {
      return Response.json({ error: 'Restaurant not found' }, { status: 404 })
    }

    return Response.json({ data })
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}