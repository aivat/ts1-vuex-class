export interface IRootState {
    todos: ITodoState,
    anyOtherModule: IAnyOtherModule
}
export interface IAnyOtherModule {
    anyOtherModule: string
}
export interface ITodoState {
    todos: ITodo[]
}
  
export interface ITodo {
    text: string,
    done: boolean
}

export interface ITodoGetter {
    (done: boolean): ITodoState
}

export interface IAddTodoAction {
    (text: string): void
}