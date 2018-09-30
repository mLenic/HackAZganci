import { Injectable } from "@angular/core";

@Injectable()
export class Filter {
    public fkCnt = 0;
    public homeCnt = 0;

    public getCnt(){
        return this.fkCnt;
    }

    public setCnt(fkCnt) {
        this.fkCnt = fkCnt;
    }

    public getHomeCnt() {
        return this.homeCnt;
    }

    public setHomeCnt(cnt) {
        this.homeCnt = cnt;
    }
}