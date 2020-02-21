export class User {
    constructor(
        public username: string,
        public password: string,
        public phone: string,
        public email: string,
        public category: string,
        public gender: string,
        public subscribe: boolean

    ) { }
}