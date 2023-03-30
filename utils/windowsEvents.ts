type WEvents = {
    events: {[key: string]: (...args: any) => void}
}

export const windowsEvents = ((window as any) as WEvents).events = {}
