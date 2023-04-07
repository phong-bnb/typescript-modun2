import {Book} from "./book";
import {Bookmanager} from "./Bookmanager";

let book1 = new Book('B001', 'Lập trình Java');
let book2 = new Book('B002', 'Lập trình PHP');
let book3 = new Book('B003', 'Lập trình TypeScript');

let bookManager = new Bookmanager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);

bookManager.update('B003', 'lập trình MySQL')
console.table(bookManager.getList())

bookManager.delete("B002")
console.table(bookManager.getList())