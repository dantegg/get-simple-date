(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) : (global.getSimpleDate = factory())
})(this, function () {
    class getSimpleDate {
        constructor() {
            this.currentDate = new Date()
        }
        // 当月的年份
        get currentYear() {
            return this.currentDate.getFullYear()
        }
        // 当月月份
        get currentMonth() {
            return this.currentDate.getMonth() + 1
        }
        // 上月月份
        get lastMonth() {
            return this.currentDate.getMonth() === 0 ? 12 : this.currentDate.getMonth()
        }
        // 上月年份
        get lastYear() {
            let _year = this.currentYear
            if (this.formerMonth === 12) {
                _year = _year - 1
            }
            return _year
        }
        // 下月年份
        get nextYear() {
            let _year = this.currentYear
            if (this.laterMonth === 1) {
                _year = _year + 1
            }
            return _year
        }
        // 下月月份
        get nextMonth() {
            return this.currentDate.getMonth() + 2 === 13 ? 1 : this.currentDate.getMonth() + 2
        }
        // 拼装当前月份1号完整日期 例如 2018-01-01
        // get current month first day
        // example: 2018-01-01
        get currentCompleteMonth() {
            return this.currentYear + '-' + (this.currentMonth < 10 ? '0' + this.currentMonth : this.currentMonth) + '-01'
        }
        // 拼装上个月1号完整日期
        // get last moth first day
        // example: 2017-12-01
        get lastCompleteMonth() {
            let _currentYear = this.currentYear
            if (this.formerMonth === 12) {
                _currentYear = _currentYear - 1
            }
            return _currentYear + '-' + (this.formerMonth < 10 ? '0' + this.formerMonth : this.formerMonth) + '-01'
        }
        // 拼装下个月1号完整日期
        // get next month first day
        // example: 2018-02-01
        get nextCompleteMonth() {
            let _currentYear = this.currentYear
            if (this.laterMonth === 1) {
                _currentYear = _currentYear + 1
            }
            return _currentYear + '-' + (this.laterMonth < 10 ? '0' + this.laterMonth : this.laterMonth) + '-01'
        }
    }
})