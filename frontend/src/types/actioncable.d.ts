declare module 'actioncable' {
  export interface Cable {
    subscriptions: {
      create: (channel: string | object, callbacks: object) => void;
    };
  }

  export function createConsumer(url: string): Cable;
}
