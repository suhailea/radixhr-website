// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/login': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/login.post').default>>>>
    }
    '/api/register': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/register.post').default>>>>
    }
    '/api/user': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/user').default>>>>
    }
    '/hello': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/routes/hello').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
  }
}
export {}