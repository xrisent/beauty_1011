// // const name: string = "awdawd";
// // const age: number = 'string';

// // type ServiceType = {
// //   id: number;
// //   title: string;
// //   price: number;
// // };

// // type FunctionType = (name: string) => string;

// // const service: ServiceType;

// // service.address;

// // const returnString = (name: string): string => {
// //   return name;
// // };

// // const fetchData = (queryString: string): undefined => {
// //   return undefined;
// // };

// interface ICategory {
//   id: number;
//   name: string;
// }

// // const array: string[] = [123]

// // const fetchData = (service: IService) => {
// //   if (typeof service.title === "string") {
// //     service.title.slice();
// //   }
// //   if (typeof service.title === "number") {
// //   }
// // };

// interface IService {
//   readonly id: number;
//   title: string | number;
//   category: ICategory;
//   price?: number;
//   sayHello: (name: string) => string;
// }

// const service: IService = {
//   id: 1,
//   title: "str",
//   sayHello: (name) => {
//     return name;
//   },
//   category: {
//     id: 2,
//     name: "name",
//   },
// };

// // type - позволяет создать кастомный тип данных
// // interface - также, но только для объектов

// // TypeScript нужен для типизации проекта и позволяет заранее предугадывать ошибки
// // Используется только в разработке, у клиента ничего не меняется
// // типизировать можно все

// // Union - позволяет указать несколько разных типов данных
// // any - любой тип данных
// // unknown - неизвестный тип данных (перед использованием нужно узнать его тип)

// // Generic - позволяет указывать тип данных при вызове

// // readonly - делает поле только для чтения
// // ? перед : - делает поле необязательным

// // создает новые типы на основе других
// // делает все поля обязательными
// type IServiceRequired = Required<IService>;
// // делает все поля необязательными
// type IServicePartial = Partial<IService>;
// // делает все поля только для чтения
// type IServicePartial = Readonly<IService>;
// // вытаскивает указанные поля
// type IServicePick = Pick<IService, "id" | "category">;
// // убирает указанные поля
// type IServiceOmit = Omit<IService, "id" | "category">;

// enum StatusEnum {
//   ERROR = "400",
//   NOT_FOUND = "404",
// }

// console.log(StatusEnum.ERROR);

// function func<T>(name: T): T {
//   return name;
// }

// func<string>("str");
// func<number>("str");
