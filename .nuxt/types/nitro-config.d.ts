// Generated by nitro

// App Config
import type { Defu } from 'defu'

import type { default as appConfig0 } from "/workspace/EKS-Workshop/app.config";
import type { default as appConfig1 } from "/workspace/EKS-Workshop/node_modules/.pnpm/@nuxt+ui-pro@1.1.0_nuxt@3.11.1_vite@5.2.6_vue@3.4.21/node_modules/@nuxt/ui-pro/app.config";

type UserAppConfig = Defu<{}, [typeof appConfig0, typeof appConfig1]>

declare module 'nitropack' {
  interface AppConfig extends UserAppConfig {}
}
    
export {}