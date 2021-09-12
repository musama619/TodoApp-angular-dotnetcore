export interface Todo {
    id: number;
    title: string;
    description: string;
    dateAdd: Date;
    dueDate: Date;
    dateComplete: Date;
    status: boolean
}