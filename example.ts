// JS Types                //typeof

const str = 'string';      // typeof str   -> 'string'
const num = 2;             // typeof num   -> 'number'
const nan = NaN;           // typeof nan   -> 'number'
const obj = {};            // typeof obj   -> 'object'
const arr = [];            // typeof arr   -> 'object'
const nul = null           // typeof nul   -> 'object'
const sym = Symbol();      // typeof sym   -> 'symbol'
const und = undefined;     // typeof und   -> 'undefined'
const _void = void 0;      // typeof _void -> 'undefined'
const bool = true;         // typeof bool  -> 'boolean'
const fn = () => {};       // typeof fn    -> 'function'

let tsStr: string = 'asd';

function sumTS(arr: number[]) {
    return arr.reduce((a, v) => a + v);
}

sumTS([1, 2, 3]);

// Union types
const strOfNumber: string | number = 2;


// Type alias
type StrOrNumber = string | number;

const strOrNumber1: StrOrNumber = '2';
const strOrNumber2: StrOrNumber = '2';
const strOrNumber3: StrOrNumber = '2';
const strOrNumber4: StrOrNumber = '2';

type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;

// Array
const tsArray: number[] = [1, 2, 3];
const tsArrayGeneric: Array<number> = [];

const unionArray1: (string | number)[] = [1, 2, '3'];
const unionArray2: Array<string | number> = [1, 2, '3'];

// Tuple
const myTuple: [number, string] = [1, '2'];
const [val1, val2] = myTuple;

//const [state, setState] = useState();

// Object
type MyObjType = { a: number, b: string };
const myObj: MyObjType = { a: 1, b: '2' };

interface MyFirstInterface {
    readonly a: number;
    b: string;
    c?: Array<number>;
}

const myObj2: MyFirstInterface = {
    a: 1,
    b: '2',
}
if (myObj2.c) {
    const val = myObj2.c;
}

const ApiAnswer: IndexInterface =  { key: 'asd', key1: 'asd' }
const val3 = ApiAnswer.randomkey;

interface IndexInterface {
    [key: string]: string;
}

enum Methods {
    add,
    sub,
}

function calculate(method: Methods, left:number, right:number):number {
    switch (method) {
        case Methods.add: return left + right;
        case Methods.sub: return left - right;
    }
}

const sum = calculate(Methods.add, 5, 10);

const ArrowFn: TypeFn = () => 2;

type TypeFn = () => number;

interface FnInterface {
    (a: number): void;
}


type StrangeTsTypes = any | unknown | never;

const some: any = 2;

const un: unknown = '2';
if (typeof un === 'string') {
    un.concat();
}

// Generic

const myArray: Array<number> =  [1, 2, 3];

interface MyArray<T> {
    [key: number]: T
}

let varible = myArray[1]

// Встроенные Generics

interface IExample<T> {
    type: string;
    value: T;
    isEmpty: boolean;
}

const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {
    type: 'asd'
};

const picked: Pick<IExample<number>, 'isEmpty'> = {
    isEmpty: true
}

const partial: Partial<IExample<object>> = {

}

// Class

/*
* public
* protected
* private
*
* .TSX
*
* class MyComponent extends React.Component<{ prop1: number }, { state1: string }> {
*   constructor(props: { prop1: number}) {
*       super(props);
*       this.state = {
*           state1
*       }
*   }
*   public render() {
*       return (
*           <div>{this.props.prop1}</div>
*       )
*   }
* }
*
* */