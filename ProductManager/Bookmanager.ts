import { Book } from "./book";
export class Bookmanager{
     books: Book[] = []
     constructor(){

     }
     add(book: Book){
        this.books.push(book)
     }
     getList(): Book[] {
return this.books
     }
     findBook(ID: string) {
        let i = -1;
        this.books.forEach((book,  index) => {
            if (book.ID === ID) {
                i = index;
            }
        })

        return i;
     }
     delete(ID: string){
        let indexBookdelete = this.findBook(ID)
        if(indexBookdelete !==-1){
            this.books.splice(indexBookdelete,1)
        }else {
            throw new Error('delete error')
        }
    }

    update(ID: string, name: string) {
        let indexBookUpdate = this.findBook(ID);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name);
        } else {
            throw new Error('update error')
        }
    }

   
}