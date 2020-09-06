// 1. Работа с простыми типами

function concat(left: string, right: string): string {
    return left + ' ' + right;
}

concat('Hello', 'World'); // -> Hello World

// 2. Работа с интерфейсами

interface IMyHomeTask {
    howIDoIt: string;
    sameArray: Array<string | number>;
    withData:  Array<object>;
}

const MyHomeTask: IMyHomeTask = {
    howIDoIt: "I Do It Wel",
    sameArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", sameArray: ["string one", 23] }],
}

console.log(MyHomeTask.sameArray[0]);

// 3. Типизация функций, используя Generic

interface IMyArray<T> {
    [N: number]: T;
    reduce<U>(fn: (accumulator: T, value: T, index: T, array: Array<number>) => U, initialValue: T): U;
}
const arrayNumber: IMyArray<number> = [1, 2, 3];
const initialValue: number = 0;
const resultArrayNumber = arrayNumber.reduce((accumulator, value) => accumulator + value, initialValue); // -> 6
console.log(resultArrayNumber);

// 4. Работа с MappedTypes

interface IHomeTask {
    data: string;
    numericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}

console.log(homeTask);
