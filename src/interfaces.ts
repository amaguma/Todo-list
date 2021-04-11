export interface ITask {
    title: string;
    id: number;
    isComplete: boolean;
    dateCompleted?: Date;
}

export interface IButton {
    id: number;
    content: string;
    active: boolean;
}

