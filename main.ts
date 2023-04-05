import{Booklist} from './qlysachdoc'
let star: Booklist[]=[]
function sta(booklist: Booklist){
    console.log(booklist.title,booklist.author,booklist.alreadyRead);

}
star.push(new Booklist('đắc nhân tâm','gia phong',true))
star.push(new Booklist('không học là ngu','gia phong',false))
star.forEach(sta)