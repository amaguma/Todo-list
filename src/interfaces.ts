export interface ITask {
    title: string;
    id: number;
    isComplete: boolean;
    dataCompleted?: Date;
}

export interface Button {
    id: number;
    content: string;
    active: boolean;
}

