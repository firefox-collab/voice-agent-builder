export const supabase = {
  from: (table) => ({
    insert: () => ({
      select: () => ({
        single: () => Promise.resolve({
          data: { id: 'mock-id', created_at: new Date().toISOString() },
          error: null
        })
      })
    }),
    select: () => ({
      eq: () => ({
        single: () => Promise.resolve({ data: null, error: null })
      })
    })
  }),
  auth: {
    signUp: () => Promise.resolve({ data: { user: null }, error: null }),
    signInWithPassword: () => Promise.resolve({ data: { user: null }, error: null }),
    signOut: () => Promise.resolve({ error: null }),
    getSession: () => Promise.resolve({ data: { session: null }, error: null })
  }
}
