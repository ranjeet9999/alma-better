class child extends parent{
    constructor(namev,age,Role,contact){
        super(namev,age);
        this.Role=  techanalyst;
        this.contact=4567890;
    }
}

function getDetails() {
    console.log(`this is my ${namev} and my age is ${age} role is ${Role} contact ${contact} `)
    
}