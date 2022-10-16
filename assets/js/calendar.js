'use strict';

const weeks = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const date = new Date() //今日の日付取得
let year = date.getFullYear()
let month = date.getMonth() +1 //ex getMonthだと今月より１小さい 
let day = date.getDate()
const thisyear = date.getFullYear()
const thismonth = date.getMonth() +1
const today = date.getDate()

const changeYearMonth = document.getElementById('js-changeMonth')
changeYearMonth.innerHTML = thisyear + "年" + (thismonth) + '月'

function showCalendar(year,month) {
  const calendarHtml = createCalendar(year,month)
  const sec = document.createElement('section')
  sec.innerHTML = calendarHtml
  document.querySelector('#calendar').appendChild(sec)
  changeYearMonth.innerHTML = year + '年' + month + '月'
  month ++
  if(month>12){
    year ++ 
    month = 1
  } 
} 
function createCalendar(year,month) {
  const startDate = new Date(year,month,1) //月の最初の日を取得
  const endDate = new Date(year,month,0)//月の最後の日を取得
  const endDayCount = endDate.getDate()//月の末日
  const lastMonthEndDate = new Date(year,month-1,0)//前月の最後の日の情報
  const lastMonthendDayCount = lastMonthEndDate.getDay()//前月の末日
  const startDay = startDate.getDay()//月の最初の日の曜日を取得
  let dayCount = 1 //日にちのカウント
  let calendarHtml = '' //HTMLを組み立てる変数

  calendarHtml += '<h1 class = "calendar-title">' + year + '年' + month + '月</h1>' //カレンダーの何月かの題名設定
  calendarHtml += '<table>'
  
  //曜日の行を作成
  for (let i = 0; i < weeks.length;i++) {
    calendarHtml += '<td class = "date">' + weeks[i] + '</td>'
  }

  for (let w = 0; w<6 ; w++) { 
    calendarHtml += '<tr>'

    for (let d = 0;d<7;d++) {
      if (w==0 && d < startDay) {
        //1行目で1日の曜日の前
        let num = lastMonthendDayCount - startDay + d + 1
        calendarHtml += '<td class="is-transparency">' + num +'</td>'
      } else if ((year<= thisyear && month<=thismonth) || (year < thisyear) || (month==thismonth && dayCount<today)){
        calendarHtml += '<td class="is-disabled">'+ dayCount +'</td>'
        dayCount++
      } else if (year==thisyear && month == thismonth && dayCount == today){
        calendarHtml += '<td class="is-today">' + dayCount+' </td>'
        dayCount ++ 
      }else {
        calendarHtml += '<td class = "is-available">' + dayCount + '</td>'
        dayCount++
      }
    }
    calendarHtml += '</tr>'
  }
  calendarHtml += '</table>'

  return calendarHtml
}



