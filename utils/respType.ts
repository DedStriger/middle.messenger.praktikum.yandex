export type ResponseApi = {
    status: number;
    response: string;
    reason?: string;
}

export type ChatResponse = {
    id: string;
    title: string;
    avatar: string;
    unread_count: number;
    last_message: {
        time: string;
        content: string;
    }
}
