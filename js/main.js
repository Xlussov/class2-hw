// //! 1 Інкапсуляція в ооп

// class Person {
//    #name
//    #age
//    constructor(name, age) {
//       this.#name = name
//       this.#age = age
//    }

//    #printData(){
//       console.log(`${this.#name} is ${this.#age} years old.`);
//    }

//    showData(){
//       this.#printData()
//    }
// }

// const person1 = new Person('Dan', 100)
// console.log(person1.name);

// // person1.#printData
// person1.showData()


// //! 2 Поліморфізм в ооп

// class Shape {
//    constructor(){
//       this.type = 'Shape'
//    }
//    printType(){
//       console.log(`This is a ${this.type}`);
//    }
// }


// class Circle extends Shape {
//    constructor(radius){
//       super()
//       this.type = 'Circle'
//       this.radius = radius
//    }

//    printType(){
//       super.printType()
//       console.log(`radius ${this.radius}`);
//    }
// }


// class Rectengular extends Shape {
//    constructor(width, height){
//       super()
//       this.type = 'Rectengular'
//       this.width = width
//       this.height = height
//    }

//    printType(){
//       super.printType()
//       console.log(`width ${this.width}, height ${this.height}`);
//    }
// }

// const circle = new Circle(5)
// const rectengular = new Rectengular(5,6)

// circle.printType()
// rectengular.printType()



// function printShapeType(shape){
//    shape.printType()
// }

// printShapeType(circle)


// //! 3 Наслідування в ооп

// class Animal {
//    constructor(name, type){
//       this.name = name
//       this.type = type
//    }

//    showType(){
//       console.log(this.type)
//    }
// }


// class Dog extends Animal{
//    constructor(name, type, breed){
//       super(name, type)
//       this.breed = breed || 'Unknown'
//    }
//    makeSound(){
//       console.log('Woof! Woof!');
//    }
// }

// class Shepherd extends Dog{
//    constructor(name, breed, type){
//       super(name, type, breed)
//    }
// }

// const Bob = new Shepherd('Bob', 'Shepherd', 'Dog')

// Bob.makeSound()
// Bob.showType()

// //! Абстракція в ооп
// class Animal{}



let users = []
console.log(JSON.parse(localStorage.getItem('users')))
document.addEventListener('DOMContentLoaded', () => {
   const localUser = localStorage.getItem('users')
   localUser !== null ? users = JSON.parse(localUser) : 0
})
document.querySelector('#seeIsersStatustic').addEventListener('click', ()=>{
   if(users.length > 0){
      document.querySelector('.regestration').style.display = 'none'
      document.querySelector('#userStatisticBlock').style.display = 'flex'
      toLog(users)
   }else {
      alert('Немає зарегестрованих юзерів у системі')
   }
   
})
document.getElementById('registerUserFirstData').addEventListener('click', function () {
   let nowSelected   
   const userName = document.querySelector('#userName').value
   const userAge = document.querySelector('#userAge').value
   const userBir = document.querySelector('#userBir').value
   const userCity = document.querySelector('#userCity').value
   const userWork = document.querySelector('#userWork').value

   const registerUserSecondData = document.querySelectorAll('#registerUserSecondData')
   console.log(userAge);
   const register = () => {
      if(userName.length < 1){
         alert(`Поле 'Імя користувача' повино містити хоча б один символ`)
         return
      }
      if(userAge.length < 1){
         alert(`Поле 'Вік користувача' повино містити хоча б один символ`)
         return
      }
      if(userBir.length < 1){
         alert(`Поле 'Дата народження' є обовязковим`)
         return
      }
      if(userCity.length < 1){
         alert(`Поле 'Місто' є обовязковим`)
         return
      }
      if(userWork === 'none'){
         alert(`Будь ласка виберіть свою проф. орієнтацію`)
         return
      }
      return true
   }
   
   if(register()){
      const selectedProfession = document.getElementById('userWork').value;
      const allRegestrationBlocks = document.querySelectorAll('.regestration');
      allRegestrationBlocks.forEach(function (block) {
        block.style.display = 'none';
      });
      const selectedBlock = document.querySelector(`.${selectedProfession}`)
      selectedBlock.style.display = 'flex';
      nowSelected = selectedBlock
   }
   if(nowSelected.classList[1] === 'driver'){
      registerUserSecondData.forEach((item)=>{
         item.addEventListener('click',()=>{
            const valueCar = document.querySelector('#valueCar').value
            const save = document.querySelector('#save').value
            const go = document.querySelector('#go').value
            const typeCar = document.querySelector('#typeCar').value
            const userIsDriver = new Driver(userName,userAge,userBir,userCity,userWork, valueCar, save, go, typeCar)
            userIsDriver.register()
            users !== null ? users.push(userIsDriver) : 0
            localStorage.setItem('users', JSON.stringify(users))
            document.querySelector('.driver').style.display = 'none'
            document.querySelector('#userStatisticBlock').style.display = 'flex'
            toLog(users)
         })
      })
   }else if(nowSelected.classList[1] === 'doctor'){
      registerUserSecondData.forEach((item)=>{
         item.addEventListener('click',()=>{
            const specions = document.querySelector('#specions').value
            const helpfuls = document.querySelector('#helpfuls').value
            const go = document.querySelector('#go1').value
            const privat = document.querySelector('#privat').value
            const userIsDoctor = new Doctor(userName,userAge,userBir,userCity,userWork,specions, helpfuls, go, privat)
            userIsDoctor.register()
            users.push(userIsDoctor)
            document.querySelector('.doctor').style.display = 'none'
            document.querySelector('#userStatisticBlock').style.display = 'flex'
            toLog(users)
            localStorage.setItem('users', JSON.stringify(users))
         })
      })
   }else if(nowSelected.classList[1] === 'teacher'){
      registerUserSecondData.forEach((item)=>{
         item.addEventListener('click',()=>{
            const subject = document.querySelector('#subject').value
            const classes = document.querySelector('#classes').value
            const go = document.querySelector('#go2').value
            const exp = document.querySelector('#exp').value
            const userIsTeacher = new Teacher(userName,userAge,userBir,userCity,userWork,subject, classes, go, exp)
            userIsTeacher.register()
            users.push(userIsTeacher)  
            document.querySelector('.teacher').style.display = 'none'
            document.querySelector('#userStatisticBlock').style.display = 'flex'
            toLog(users)
            localStorage.setItem('users', JSON.stringify(users))
         })
      })
   }else if(nowSelected.classList[1] === 'salesperson'){
      registerUserSecondData.forEach((item)=>{
         item.addEventListener('click',()=>{
            const sfear = document.querySelector('#sfear').value
            const jobExp = document.querySelector('#jobExp').value
            const go = document.querySelector('#go3').value
            const education = document.querySelector('#education').value
            const userIsSalesperson = new Salesperson(userName,userAge,userBir,userCity,userWork,sfear, jobExp, go, education)
            userIsSalesperson.register()
            users.push(userIsSalesperson)
            document.querySelector('.salesperson').style.display = 'none'
            document.querySelector('#userStatisticBlock').style.display = 'flex'
            toLog(users)
            localStorage.setItem('users', JSON.stringify(users))
         })
      })
   }
});

class Datas {
   constructor(name,age,BirDay,city,profile){
      this.name = name
      this.age = age
      this.BirDay = BirDay
      this.city = city
      this.profile = profile
   }
}

class Driver extends Datas{
   constructor(name,age,BirDay,city,profile, valueCar, save, go, typeCar){
      super(name ,age ,BirDay ,city ,profile)
      this.valueCar = valueCar
      this.save = save
      this.go = go
      this.typeCar = typeCar
   }
   register(){
      if(this.valueCar.length < 1){
         alert(`Поле 'Водій якої машини ?' є обовязковим`)
         return
      }
      if(this.save.length < 1){
         alert(`Поле 'Чи є страховка ?' є обовязковим`)
         return
      }
      if(this.go.length < 1){
         alert(`Поле 'Досвід водіння ?' є обовязковим`)
         return
      }
      if(this.typeCar.length < 1){
         alert(`Поле 'Автомат / Механіка' є обовязковим`)
         return
      }
      alert('Регестрація успішна')
      return true
   }
}


class Doctor extends Datas {
   constructor(name,age,BirDay,city,profile, specions, helpfuls, go, privat){
      super(name ,age ,BirDay ,city ,profile)
      this.specions = specions   
      this.helpfuls = helpfuls   
      this.go = go   
      this.privat = privat
   }
   register(){
      if(this.specions.length < 1){
         alert(`Поле 'Ваша спеціальність ?' є обовязковим`)
         return
      }
      if(this.helpfuls.length < 1){
         alert(`Поле 'Скількома паціентам допомогли ?' є обовязковим`)
         return
      }
      if(this.go.length < 1){
         alert(`Поле 'Досвід роботи ?' є обовязковим`)
         return
      }
      if(this.privat.length < 1){
         alert(`Поле 'Ви працюете у часній больниці ?' є обовязковим`)
         return
      }
      alert('Регестрація успішна')
      return true
   }
}

class Teacher extends Datas {
   constructor(name,age,BirDay,city,profile, subject, classes, go, exp){
      super(name ,age ,BirDay ,city ,profile)
      this.subject = subject 
      this.classes = classes 
      this.go = go
      this.exp = exp
   }
   register(){
      if(this.subject.length < 1){
         alert(`Поле 'Вчитель якого предмету ?' є обовязковим`)
         return
      }
      if(this.classes.length < 1){
         alert(`Які класи ви навчаете?' є обовязковим`)
         return
      }
      if(this.go.length < 1){
         alert(`Поле 'Досвід роботи ?' є обовязковим`)
         return
      }
      if(this.exp.length < 1){
         alert(`Поле 'Ваш рівень знань ?' є обовязковим`)
         return
      }
      alert('Регестрація успішна')
      return true
   }
}

class Salesperson extends Datas {
   constructor(name,age,BirDay,city,profile, sfear, jobExp, go, education){
      super(name ,age ,BirDay ,city ,profile)
      this.sfear = sfear
      this.jobExp = jobExp
      this.go = go
      this.education = education
   }
   register(){
      if(this.sfear.length < 1){
         alert(`Поле 'У якій сфері ?' є обовязковим`)
         return
      }
      if(this.jobExp.length < 1){
         alert(`'Ви займеєте вищу довжність' є обовязковим`)
         return
      }
      if(this.go.length < 1){
         alert(`Поле 'Досвід роботи ?' є обовязковим`)
         return
      }
      if(this.education.length < 1){
         alert(`Поле 'Ви маєте вищу освіту?' є обовязковим`)
         return
      }
      alert('Регестрація успішна')
      return true
   }
}





function toLog(obj) {
   const tableList = document.querySelector('.tableList')
   const newTable =  document.createElement('table')
   tableList.after(newTable)
   const objKey = Object.keys(obj).length
   for (i = 0; i <= objKey - 1; i++) {
      const newTr = document.createElement('tr')
      newTable.append(newTr)
      const entries = Object.entries(obj[i])
      const entriesLenth = Object.entries(obj[i]).length
      console.log(obj[i]);
      for (r = 0; r <= entriesLenth - 1; r++) {
         const ent = Object.values(entries[r])
         const newTd = document.createElement('td')
         newTr.append(newTd)
         newTd.textContent = ent[0] === 'status' ? ent[1] === true || ent[1] === 'true' ? `${ent[0]} : У гаражі` : `${ent[0]} : Десь поїхала` : ent[1] === null || ent[1] == '' || ent[1] == ' '  ? `${ent[0]} : Немає значення` : `${ent[0]} : ${ent[1]}`
         ent[0] === 'name' ? newTd.textContent = `Імя: ${ent[1]}` : 0
         ent[0] === 'age' ? newTd.textContent = `Вік: ${ent[1]}` : 0
         ent[0] === 'BirDay' ? newTd.textContent = `День народження: ${ent[1]}` : 0
         ent[0] === 'city' ? newTd.textContent = `Місто проживання: ${ent[1]}` : 0
         ent[0] === 'profile' ? newTd.textContent = `Проф. орієнтація: ${ent[1] === 'doctor' ? 'Доктор' : ent[1] === 'driver' ? 'Водій' : ent[1] === 'teacher' ? 'Вчитель' : ent[1] === 'salesperson' ? 'Продавець' : 0}` : 0
         ent[0] === 'go' ? newTd.textContent = `Досвід: ${ent[1]}` : 0
         
         // Driver
         ent[0] === 'valueCar' ? newTd.textContent = `Водій: ${ent[1]}` : 0
         ent[0] === 'save' ? newTd.textContent = `Страховка: ${ent[1]}` : 0
         ent[0] === 'typeCar' ? newTd.textContent = `Коробка: ${ent[1]}` : 0

         //Doctor
         ent[0] === 'specions' ? newTd.textContent = `Спеціальність: ${ent[1]}` : 0
         ent[0] === 'helpfuls' ? newTd.textContent = `Кількість паціентів: ${ent[1]}` : 0
         ent[0] === 'privat' ? newTd.textContent = `Приватна: ${ent[1]}` : 0

         // Techer
         ent[0] === 'subject' ? newTd.textContent = `Предмет: ${ent[1]}` : 0
         ent[0] === 'classes' ? newTd.textContent = `Класи: ${ent[1]}` : 0
         ent[0] === 'exp' ? newTd.textContent = `Рівень знань: ${ent[1]}` : 0

         //Salesperson
         ent[0] === 'sfear' ? newTd.textContent = `Сфера: ${ent[1]}` : 0
         ent[0] === 'jobExp' ? newTd.textContent = `Довжність: ${ent[1]}` : 0
         ent[0] === 'education' ? newTd.textContent = `Вища освіта: ${ent[1]}` : 0
      }
   }
}




