// const me = {
//     talk() {
//         return 'Talking'
//     }
// }
// ;
// const you = {
//     talk() {
//         return 'Talking'
//     }
// }
//duplication , there is a bug all places have to fix ,  
class Person {
    talk() {
        return 'Talking'
    }
};
const me = new Person()
const you = new Person();
me.talk()
you.talk()
 
class SuperHumen  extends Person {
    fly(){
        return 'fly'
    }
}
const zahra = new SuperHumen()  