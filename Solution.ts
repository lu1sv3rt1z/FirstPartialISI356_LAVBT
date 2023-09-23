/*Solution

SOLID Principles:
Single Responsibility Principle: La clase LibraryManager se ocupa únicamente de la lógica de la biblioteca, mientras que el servicio EmailService se ocupa del envío de correos electrónicos.
Open/Closed Principle: Las clases están abiertas para extensión (por ejemplo, añadiendo más tipos de notificaciones) pero cerradas para modificación.
Liskov Substitution Principle: User implementa la interfaz IObserver, lo que significa que se puede sustituir por cualquier otro objeto que también implemente la interfaz.
Dependency Inversion Principle: Se inyecta IEmailService en LibraryManager, lo que significa que LibraryManager no depende de una implementación concreta.

Inyección de Dependencias:
Inyectar IEmailService en LibraryManager.

Lambda Expressions:
Usar expresiones lambda en funciones como find y forEach.

Singleton Pattern:
Garantizar que solo haya una instancia de LibraryManager con el método getInstance.

Observer Pattern:
Los usuarios (User) se registran como observadores y son notificados cuando se añade un nuevo libro.

Builder Pattern:
Se utiliza para construir instancias de Book de una manera más limpia y escalable.

Refactorización:
eliminar el uso de ANY mejorar el performance

Aspectos (Opcional)
Puedes anadir logs de info, warning y error en las llamadas, para un mejor control

Diseño por Contrato (Opcional):
Puedes anadir validaciones en precondiciones o postcondiciones como lo veas necesario*/

////////////comenzamos

interface IUser{
    loan(userID:string):void;
}


interface search{
    search(query: string):void;
}

interface loan{
    loan(ISBN: string, userID: string):void;
}



interface IEmailService{
    sendEmail(userID: string, message: string):void;
}
//                                  ^
//                                  |
//interfaces para utilizar arrriba 
 class LibraryManager{
    books: string[]=[];
    loans: string[]=[];
    
    add(book: any) {
        this.books.push(book);
    }
    
 }

 class Book implements IUser,loan{
    title:string[]=[];
    author:string[]=[];
    ISBN:string[]=[];
    userID:string[]=[];

    add(book:string){
        this.title.push(book);
        this.author.push(book);
        this.ISBN.push(book);
    }

    remove(book: string) {
        const index = this.title.indexOf(book);
        const index2 = this.author.indexOf(book);
        const index3 = this.ISBN.indexOf(book);
        if (index > -1) {
            this.title.splice(index, 1);
        }
        if(index2 > -1){
            this.author.splice(index2,1);
        }
        if(index3){
            this.ISBN.splice(index3,1);
        }
    }

    // search(book:string){
    //     this.Book.filter(book => book.title.includes(query) || book.author.includes(query) || 
    //     book.ISBN === query)
        
    // }

    loan(){
        const book = this.ISBN.find(b => b.ISBN === ISBN);
        if(book){
            this.loans.push({ ISBN, userID, date: new Date() });
            this.sendEmail(userID, `Has solicitado el libro ${book.title}`);
        }
    }

 }
