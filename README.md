# get-simple-date
a JavaScript module which provides some simple date . 
## example 
### install  
```
npm install get-simple-date -S
```
### methods 
1. get current year  
``` 
import getSimpleDate from 'get-simple-date';  
var _date = new getSimpleDate;  
var currentYear = _date.currentYear();  
```
2. get next year  
```
var nextYear = _date.nextYear();
```  
3. get last year  
```
var lastYear = _date.lastYear();
```
4. get current month  
```
var currentMonth = _date.currentMonth()
```  
5. get next month  
```
var nextMonth = _date.nextMonth()
```  
6. get last month  
```
var lastMonth = _date.lastMonth()
```  
7. get complete date String such as '2018-01-01'  
```
var _current = _date.currentCompleteMonth()  // return first day of current month, e.g. '2018-01-01'
var _last = _date.lastCompleteMonth()       // return first day of last month, e.g. '2017-12-01'
var _next = _date.nextCompleteMonth()       // return first day of next month, e.g. '2018-02-01'
```