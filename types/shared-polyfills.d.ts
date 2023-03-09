declare module 'shared-polyfills' {
  const internalWindow: Window & typeof globalThis;
  const internalDocument: Document;
  export { internalWindow as window, internalDocument as document };
}
