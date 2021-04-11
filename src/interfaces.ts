export interface ITask {
    title: string;
    id: number;
    isComplete: boolean;
    dateCompleted?: number;
}

export interface IButton {
    id: number;
    content: string;
    active: boolean;
}

