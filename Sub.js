// function Person(saying) {
//   this.saying = saying
// }
//
// Person.prototype.talk = function() {
//   console.log("I say:", this.saying)
// }
//
// function New(constructor){
//   // the new command does four things
//   // 1) creates an Object
//   var obj = {}
//   // 2) sets the prototype of the Object
//   Object.setPrototypeOf(obj, constructor.prototype);
//   // 3) Execute constructor with this
//   constructor.apply(obj, ['semicolons'])
//   // 4) Returns the object
//   return obj
//   //var argsArray = Array.from(arguments) new way to convert to an array
//   //var argsArray = Array.prototype.slice.apply(arguments)
//   //console.log(argsArray.slice(1))
// }
//
// var crockford = New(Person, 'semicolons')
//
// var guy = new Person("hi hi hi hi hi")
//
// crockford.talk()
// guy.talk()
