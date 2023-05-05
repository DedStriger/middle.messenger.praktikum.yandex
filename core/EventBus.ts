type Listners = Record<string, Array<(...arg: any) => void>>

export default class EventBus{
    listeners: Listners = {}
    constructor() {
      this.listeners = {};
    }
  
    on(event: string, callback: () => void) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
  
      this.listeners[event].push(callback);
    }
  
    off(event: string, callback: () => void) {
          if (!this.listeners[event]) {
        throw new Error(`Нет события: ${event}`);
      }
  
      this.listeners[event] = this.listeners[event].filter(
        listener => listener !== callback
      );
    }
  
      emit(event: string, ...arg: any) {
      if (!this.listeners[event]) {
        throw new Error(`Нет события: ${event}`);
      }
      
      this.listeners[event].forEach(function(listener) {
        listener(...arg);
      });
    }
  }
