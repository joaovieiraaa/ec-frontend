import i18n from '@/i18n/i18n';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $i18n: typeof i18n;
    $t: typeof i18n.t;
  }
}

declare global {
  interface Window {
    session: any;
  }
}
