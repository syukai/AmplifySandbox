/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface CreateTodoInput {
    id?: string | null;
    name: string;
    description?: string | null;
}

export interface UpdateTodoInput {
    id: string;
    name?: string | null;
    description?: string | null;
}

export interface DeleteTodoInput {
    id?: string | null;
}

export interface ModelTodoFilterInput {
    id?: ModelIDFilterInput | null;
    name?: ModelStringFilterInput | null;
    description?: ModelStringFilterInput | null;
    and?: (ModelTodoFilterInput | null)[] | null;
    or?: (ModelTodoFilterInput | null)[] | null;
    not?: ModelTodoFilterInput | null;
}

export interface ModelIDFilterInput {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: (string | null)[] | null;
    beginsWith?: string | null;
}

export interface ModelStringFilterInput {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: (string | null)[] | null;
    beginsWith?: string | null;
}

export interface CreateTodoMutationVariables {
    input: CreateTodoInput;
}

export interface CreateTodoMutation {
    createTodo: {
        __typename: 'Todo';
        id: string;
        name: string;
        description: string | null;
    } | null;
}

export interface UpdateTodoMutationVariables {
    input: UpdateTodoInput;
}

export interface UpdateTodoMutation {
    updateTodo: {
        __typename: 'Todo';
        id: string;
        name: string;
        description: string | null;
    } | null;
}

export interface DeleteTodoMutationVariables {
    input: DeleteTodoInput;
}

export interface DeleteTodoMutation {
    deleteTodo: {
        __typename: 'Todo';
        id: string;
        name: string;
        description: string | null;
    } | null;
}

export interface GetTodoQueryVariables {
    id: string;
}

export interface GetTodoQuery {
    getTodo: {
        __typename: 'Todo';
        id: string;
        name: string;
        description: string | null;
    } | null;
}

export interface ListTodosQueryVariables {
    filter?: ModelTodoFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
}

export interface ListTodosQuery {
    listTodos: {
        __typename: 'ModelTodoConnection';
        items: ({
            __typename: 'Todo';
            id: string;
            name: string;
            description: string | null;
        } | null)[] | null;
        nextToken: string | null;
    } | null;
}

export interface OnCreateTodoSubscription {
    onCreateTodo: {
        __typename: 'Todo';
        id: string;
        name: string;
        description: string | null;
    } | null;
}

export interface OnUpdateTodoSubscription {
    onUpdateTodo: {
        __typename: 'Todo';
        id: string;
        name: string;
        description: string | null;
    } | null;
}

export interface OnDeleteTodoSubscription {
    onDeleteTodo: {
        __typename: 'Todo';
        id: string;
        name: string;
        description: string | null;
    } | null;
}
