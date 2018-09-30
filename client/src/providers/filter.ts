import { Injectable } from "@angular/core";

@Injectable()
export class Filter {
    public fkCnt = 0;

    public getCnt(){
        return this.fkCnt;
    }

    public setCnt(fkCnt) {
        this.fkCnt = fkCnt;
    }
}