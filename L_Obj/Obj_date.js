let Date = function (myDay, myMonth, myYear, nowDay, nowMonth, nowYear) {
    this.myDay = myDay;
    this.myMonth = myMonth;
    this.myYear = myYear
    this.nowDay = nowDay;
    this.nowMonth = nowMonth;
    this.nowYear = nowYear;


    this.getMyDate = () => {
        return this.myDay + "/" + this.myMonth + "/" + this.myYear;
    };
    this.getNowDate = () => {
        return this.nowDay + "/" + this.nowMonth + "/" + this.nowYear;
    };
    this.getShowYearLive = () => {
        console.log(` Bạn đã sống được : ${this.nowYear - this.myYear} năm`);
    };
    this.getShowMonthLive = () => {
        console.log(` Bạn đã sống được : ${(this.nowYear - this.myYear) * 12} tháng`);
    };
    this.getShowDayLive = () => {
        console.log(` Bạn đã sống được : ${((this.nowYear - this.myYear) * 365) + (Math.floor((this.nowYear - this.myYear) / 4))} ngày`)
    };
};

let myDay = +prompt("Nhập vào Ngày sinh");
let myMonth = +prompt("Nhập vào tháng sinh");
let myYear = +prompt("Nhập vào năm sinh");
let nowDay = 22;
let nowMonth = 9;
let nowYear = 2019;


let wasBorn = new Date(myDay, myMonth, myYear, nowDay, nowMonth, nowYear);
wasBorn.getShowYearLive();
wasBorn.getShowMonthLive();
wasBorn.getShowDayLive();
