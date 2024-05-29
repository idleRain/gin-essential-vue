/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, any>;
  export default component;
}

// 环境变量类型
declare interface ImportMetaEnv {
  readonly VITE_NODE_ENV: 'dev' | 'prod' | 'test' | 'preview';
  readonly VITE_BASE_URL: string
}
