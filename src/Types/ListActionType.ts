export type ActionType = {
    type: string;
    payload?: {
        task?: string;
        complete?: boolean
        id?: string;
    }
}