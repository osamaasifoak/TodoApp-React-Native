export class CommonStatusWrapper {
    status: boolean = false;
    message: string | undefined;
    constructor(status: boolean, message: string) {
        this.status = status;
        this.message= message
    }
}
