




const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function checkForCopyItem(array, item) {

    for (let i = 0; i < array.length; i++) {

        if (array[i]-- - item) {





            return ` есть  ${item} `





        }

    }




    return 'нету'

}

console.log(checkForCopyItem(numbers, 11 ))