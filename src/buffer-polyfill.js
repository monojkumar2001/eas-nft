import { Buffer } from 'buffer';

if (typeof window !== 'undefined') {
  // In a browser environment, assign the Buffer polyfill to the global scope
  window.Buffer = Buffer;
}