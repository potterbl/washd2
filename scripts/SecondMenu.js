const notificationButton = document.querySelector('.notification__section')
const notifications = document.querySelector('.notification__off')
notificationButton.addEventListener('click', () => {
    notifications.classList.toggle('notifications__on')
    if(notifications.classList.contains('notifications__on')){
        localStorage.setItem('notifications', 'on')
    } else {
        localStorage.setItem('notifications', 'off')
    }
})

if(localStorage.getItem('notifications')){
    if(localStorage.getItem('notifications') === 'on'){
        notifications.classList.add('notifications__on')
    }
}

let languageQuery = localStorage.getItem('language')

const languageEn = document.querySelector('#flagEn')
const languageNor = document.querySelector('#flagNor')
const langChoose = document.querySelector('.lang__choose')
const languageChooseEn = document.querySelector('#language__choose__en')
const languageChooseNor = document.querySelector('#language__choose__nor')

languageEn.addEventListener('click', () => {
    langChoose.classList.toggle('lang__choose__enabled')
})
languageNor.addEventListener('click', () => {
    langChoose.classList.toggle('lang__choose__enabled')
})

updateLang()

languageChooseEn.addEventListener('click', () => {
    localStorage.setItem('language', 'en')
    languageQuery = localStorage.getItem('language')
    updateLang()
})
languageChooseNor.addEventListener('click', () => {
    localStorage.setItem('language', 'nor')
    languageQuery = localStorage.getItem('language')
    updateLang()
})

function updateLang() {
    if(languageQuery === 'en'){
        languageNor.style = 'display: none'
        languageEn.style = 'display: block'
        languageChooseEn.classList.add('lang__chosen')
        languageChooseNor.classList.remove('lang__chosen')
        langChoose.classList.remove('lang__choose__enabled')
    } else {
        languageEn.style = 'display: none'
        languageNor.style = 'display: block'
        languageChooseNor.classList.add('lang__chosen')
        languageChooseEn.classList.remove('lang__chosen')
        langChoose.classList.remove('lang__choose__enabled')
    }
}

function getMonthInfo(year, month) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const date = new Date(year, month - 1, 1);

    const currentDayOfWeek = date.getDay();

    const monthInfo = {
        name: monthNames[month - 1],
        year: year,
        days: []
    };


    while (date.getMonth() === month - 1) {
        monthInfo.days.push({
            date: date.getDate(),
            dayOfWeek: daysOfWeek[date.getDay()]
        });
        date.setDate(date.getDate() + 1);
    }

    return monthInfo;
}
const calendarButton = document.querySelector('.button__wrapper__calendar')
const calendarMonths = document.querySelector('.calendar__months')
const jan = document.querySelector('#January')
jan.addEventListener('click', () => {
    jan.classList.add('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(0)
})
const feb = document.querySelector('#February')
feb.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.add('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(1)
})
const mar = document.querySelector('#March')
mar.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.add('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(2)
})
const apr = document.querySelector('#April')
apr.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.add('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(3)
})
const may = document.querySelector('#May')
may.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.add('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(4)
})
const jun = document.querySelector('#June')
jun.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.add('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(5)
})
const jul = document.querySelector('#July')
jul.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.add('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(6)
})
const aug = document.querySelector('#August')
aug.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.add('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(7)
})
const sep = document.querySelector('#September')
sep.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.add('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(8)
})
const oct = document.querySelector('#October')
oct.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.add('active__card')
    nov.classList.remove('active__card')
    dec.classList.remove('active__card')
    updateCalendar(9)
})
const nov = document.querySelector('#November')
nov.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.add('active__card')
    dec.classList.remove('active__card')
    updateCalendar(10)
})
const dec = document.querySelector('#December')
dec.addEventListener('click', () => {
    jan.classList.remove('active__card')
    feb.classList.remove('active__card')
    mar.classList.remove('active__card')
    apr.classList.remove('active__card')
    may.classList.remove('active__card')
    jun.classList.remove('active__card')
    jul.classList.remove('active__card')
    aug.classList.remove('active__card')
    sep.classList.remove('active__card')
    oct.classList.remove('active__card')
    nov.classList.remove('active__card')
    dec.classList.add('active__card')
    updateCalendar(11)
})
calendarButton.addEventListener('click', (e) => {
    if(e.target !== calendarMonths){
        calendarMonths.classList.toggle('calendar__month__shown')
    }
})

updateCalendar(new Date().getMonth())
function updateCalendar(monthQuery) {
    let month = monthQuery;
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const buttonCalendar = document.querySelector('.button__wrapper__calendar button')
    const abbreviatedMonthName = monthNames[month];
    buttonCalendar.textContent = abbreviatedMonthName;

    const daysInMonth = new Date(2023, month + 1, 0).getDate();


    const calendarBody = document.querySelector('.body__wrapper')
    calendarBody.innerHTML = ''
    for (let i = 0; i < 35; i++) {
        if (i < daysInMonth) {
            const dayOfWeek = new Date(2023, month, i + 1).getDay();
            calendarBody.innerHTML +=
                `
                <div class="card__calendar">
                    <p>${daysOfWeek[dayOfWeek]}</p>
                    <p>${i + 1}</p>
                </div>
                `
        } else {
            calendarBody.innerHTML +=
                `
                <div class="card__calendar">
                </div>
                `
        }
    }
    let weekPage = 0
    const currentDay = new Date().getDate();
    if(new Date().getMonth() === month){
        if(currentDay <= 7){
            weekPage = 0
        } else if(currentDay > 7 && currentDay <=14){
            weekPage = 1
        } else if(currentDay > 14 && currentDay <= 21){
            weekPage = 2
        } else if(currentDay > 21 && currentDay <= 28){
            weekPage = 3
        } else if(currentDay > 28 && currentDay <= 31){
            weekPage = 4
        }
    }

    if(new Date().getMonth() === month){
        const cards = document.querySelectorAll('.card__calendar')
        for(let i = 0; i < cards.length; i++){
            if(i + 1 == currentDay){
                cards[i].classList.add('current__day')
            }
        }
    } else {
        const cards = document.querySelectorAll('.card__calendar')
    }

    moveCalendar()
    function moveCalendar() {
        if(weekPage === 0){
            calendarBody.style.transform = 'translateX(0)'
        } else if(weekPage === 1) {
            calendarBody.style.transform = 'translateX(-20%)'
        } else if(weekPage === 2) {
            calendarBody.style.transform = 'translateX(-40%)'
        } else if(weekPage === 3) {
            calendarBody.style.transform = 'translateX(-60%)'
        } else if(weekPage === 4) {
            calendarBody.style.transform = 'translateX(-80%)'
        }
    }
    const buttonNext = document.querySelector('#nextWeek')
    const buttonPrev = document.querySelector('#prevWeek')
    buttonNext.addEventListener('click', () => {
        if(weekPage < 4){
            weekPage += 1
        }
        moveCalendar()
    })
    buttonPrev.addEventListener('click', () => {
        if(weekPage > 0){
            weekPage -= 1
        }
        moveCalendar()
    })
}

const ordersPageQuery = JSON.parse(localStorage.getItem('ordersPage'))
let state = []
ordersPageQuery.forEach(listItem => {
    listItem.orders.forEach(order => {
        state.unshift(order)
    })
})
state.splice(2)
const latestRegistration = document.querySelector('.latest__registrations .list__wrapper')
latestRegistration.innerHTML = ''
state.forEach(order => {
    let orderId = order.id
    let customerId = ''
    ordersPageQuery.forEach(listItem => {
        if(listItem.orders.some(order => order.id === orderId)) {
            customerId = listItem.id
        }
    })
        latestRegistration.innerHTML +=
            `
        <div class="list__item">
            <div class="icon">
                <img src="../../src/SystemAdmin/listRegistration.png" alt="">
            </div>
            <div class="textarea">
                <div class="textarea__heading">
                    <p>${order.date}</p>
                </div>
                <div class="textarea__body">
                    <h2>${order.amount}</h2>
                    <div class="body__subarea">
                        <p>${order.item}</p>
                        <p class="caption">${ordersPageQuery[customerId].customer}</p>
                    </div>
                </div>
            </div>
        </div>
    `
})




state = []
ordersPageQuery.forEach(listItem => {
    listItem.orders.forEach(order => {
        if(order.status === 'Delivered'){
            state.unshift(order)
        }
    })
})
state.splice(2)
const latestDeliveries = document.querySelector('.latest__deliveries .list__wrapper')
latestDeliveries.innerHTML = ''
state.forEach(order => {
    let orderId = order.id
    let customerId = ''
    ordersPageQuery.forEach(listItem => {
        if(listItem.orders.some(order => order.id === orderId)) {
            customerId = listItem.id
        }
    })
    if(typeof order.item === 'Array'){
        latestDeliveries.innerHTML +=
            `
        <div class="list__item">
            <div class="icon">
                <img src="../../src/SystemAdmin/latestDeliveries.png" alt="">
            </div>
            <div class="textarea">
                <div class="textarea__heading">
                    <p>${order.date}</p>
                </div>
                <div class="textarea__body">
                    <h2>${order.amount[0]}</h2>
                    <div class="body__subarea">
                        <p>${order.item[0]}</p>
                        <p class="caption">${ordersPageQuery[customerId].customer}</p>
                    </div>
                </div>
            </div>
        </div>
        `
    } else {
        latestDeliveries.innerHTML +=
            `
        <div class="list__item">
            <div class="icon">
                <img src="../../src/SystemAdmin/latestDeliveries.png" alt="">
            </div>
            <div class="textarea">
                <div class="textarea__heading">
                    <p>${order.date}</p>
                </div>
                <div class="textarea__body">
                    <h2>${order.amount}</h2>
                    <div class="body__subarea">
                        <p>${order.item}</p>
                        <p class="caption">${ordersPageQuery[customerId].customer}</p>
                    </div>
                </div>
            </div>
        </div>
    `
    }
})