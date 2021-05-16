type ConcatType = (p1: string, p2: string) => string;

const concat: ConcatType = (str1, str2) => str1.concat(str2);

concat('Hello ', 'World'); // -> Hello World;

// ============================================

type ArrayOfStringAndNumber = Array<string | number>;

interface IMyHomeTask {
  howIDoIt: string;
  someArray: ArrayOfStringAndNumber;
  withData: Array<{
    howIDoIt: string;
    someArray: ArrayOfStringAndNumber;
  }>;
}

const myHometask: IMyHomeTask = {
  howIDoIt: 'I Do It Wel',
  someArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', someArray: ['string one', 23] }],
};

// =============================================

interface MyArray<T> {
  [N: number]: T;

  reduce(cb: (prev: T, cur: T, curIndex: number, arr: T[]) => T): T;
}