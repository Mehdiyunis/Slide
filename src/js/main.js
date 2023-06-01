const faqBtn = document.querySelectorAll('.faq-btn');
const slideItem = document.querySelectorAll('.slide-item')
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
slideItem[index].classList.add('opacity');
console.log(index);

next.addEventListener('click', () => {
    removeOpacity()
    index++;

    if (index >= slideItem.length) {
        index = 0;
    }  /* if aşaqıda olanda işləmir */

    slideItem[index].classList.add('opacity');
    const bgImg = slideItem[index].children[0].getAttribute('src');
    document.body.style.backgroundImage = `url("${bgImg}")`
    console.log(index);
})

prev.addEventListener('click', () => {
    removeOpacity()

    index--;

    if (index < 0) {
        index = slideItem.length - 1;
    }

    slideItem[index].classList.add('opacity');
    const bgImg = slideItem[index].children[0].getAttribute('src');
    document.body.style.backgroundImage = `url("${bgImg}")`
    console.log(index);
})


function removeOpacity() {
    slideItem.forEach((sItem) => {
        sItem.classList.remove('opacity');
    })
}




/* ______________________________________________________________________________________________________ */





faqBtn.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.parentElement.classList.contains('active')) {
            remove()
        }

        else {
            remove()
            item.parentElement.classList.add('active')
        }
    })
})


function remove() {
    faqBtn.forEach((item2) => {
        item2.parentElement.classList.remove('active')
    })
}


/* _________________________________________________________________________________________________ */


function Person(a) {
    this.b = function (b) {
        return b + a;
    }
    this.c = function (c) {
        return c * a;
    }
    this.d = function (d) {
        return d / a;
    }
    this.e = function (e) {
        return e - a;
    }
};

let num = new Person(32);

console.log(num.e(38));




/* ________________________________________________________________________________________________________ */






const nums = []
const target = Math.floor(Math.random() * 100);
const indexs = {};



const arrValuesLength = Math.floor(Math.random() * 98 + 2)


for (let i = 1; i <= arrValuesLength; i++) {
    nums.push(Math.floor(Math.random() * arrValuesLength));
}

for (const num1 of nums) {
    for (const num2 of nums) {
        if (Object.keys(indexs).length > 0) {
            break;
        }

        else if (num1 + num2 == target) {
            indexs[nums.indexOf(num1)] = num1;
            indexs[nums.indexOf(num2)] = num2;
        }
    }
}

if (indexs.length == 0) {
    console.log('No Solution');
}
else {
    console.log(target, indexs)
}




/* ______________________________________________________________________________________________________ */






const arrLast = (nums) => {
    if (nums.length == 0) {
        return "Because there are no elements, return -1."
    }

    else {
        return "Calling nums.last() should return the last element: " + nums[nums.length - 1]
    }
}



/* _______________________________________________________________________________________________________ */







const ParkingSystem = function (big, medium, small) {

    this.big = big;
    this.medium = medium;
    this.small = small;
    this.answer = [];

    this.addCar = function (...carType) {

        for (const iterator of carType) {

            switch (iterator) {
                case 1:
                    if (this.big > 0) {
                        this.big--
                        this.answer.push(true)
                    }
                    else {
                        this.answer.push(false)
                    }
                    break;
                case 2:
                    if (this.medium > 0) {
                        this.medium--
                        this.answer.push(true)
                    }
                    else {
                        this.answer.push(false)
                    }
                    break;
                case 3:
                    if (this.small > 0) {
                        this.small--
                        this.answer.push(true)
                    }
                    else {
                        this.answer.push(false)
                    }

                    break;
            }
        }
        return console.log(this.answer)
    }
};





/* const obj = new ParkingSystem(3, 1, 0)



const param_1 = obj.addCar(1, 1, 2, 2, 3)

console.log(param_1) */





/* _____________________________________________________________________________________________________ */





var ParkingSystemm = function (big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};


ParkingSystemm.prototype.addCar = function (carType) {
    switch (carType) {
        case 1:
            return this.big-- > 0;
        case 2:
            return this.medium-- > 0;
        case 3:
            return this.small-- > 0;
    }
};


const obj = new ParkingSystem(3, 1, 0)

const param_1 = obj.addCar(1, 1, 2, 2, 3)

console.log(param_1)


