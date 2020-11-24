export class Form {
    constructor(
        public _id: string,
        public gender: string,
        public age: number,
        public address: string,
        public postalCode: string,
        public job: string,
        public symptons: Array<any>,
        public diagnosis: Array<any>,
        public smoke: string,
        public test: String,
        public date: String,
        public where: String,
        public infection: String
    ) { }
}