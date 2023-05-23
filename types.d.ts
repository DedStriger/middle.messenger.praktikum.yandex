import { WEvents } from "./utils/windowsEvents";

declare module '*.png' {
    const content: any;
    export default content;
  }

declare module '*.svg' {
    const content: string;
    export default content;
  }

  declare global {
    interface Window {
      events: WEvents
    }
  }
