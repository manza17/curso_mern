export interface Crud {
    getAll(): Promise<any[] | undefined>
    getById(): Promise<any | undefined>
    deleteById():Promise<boolean>
    create():Promise<number|boolean>
    updateById():Promise<boolean>
}