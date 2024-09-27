/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
// Director class implementation
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
// Teacher class implementation
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// createEmployee function
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
// Test cases
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee('$500')); // Director
var teacher = new Teacher();
console.log(teacher.workFromHome()); // Affiche : Cannot work from home
console.log(teacher.getCoffeeBreak()); // Affiche : Cannot have a break
console.log(teacher.workTeacherTasks()); // Affiche : Getting to work

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFjRSxnQ0FBZ0M7QUFDaEM7SUFBQTtJQVlBLENBQUM7SUFYQywrQkFBWSxHQUFaO1FBQ0UsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNFLE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQztJQUVELG9DQUFpQixHQUFqQjtRQUNFLE9BQU8sMkJBQTJCLENBQUM7SUFDckMsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDO0FBRUQsK0JBQStCO0FBQy9CO0lBQUE7SUFZQSxDQUFDO0lBWEMsOEJBQVksR0FBWjtRQUNFLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFDRSxPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUVELDBCQUEwQjtBQUMxQixTQUFTLGNBQWMsQ0FBQyxNQUF1QjtJQUM3QyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDL0MsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQ3hCLENBQUM7QUFDSCxDQUFDO0FBRUQsYUFBYTtBQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBRSxVQUFVO0FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO0FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO0FBRWhELElBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFPLGtDQUFrQztBQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUssZ0NBQWdDO0FBQzNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFHLDRCQUE0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEaXJlY3RvckludGVyZmFjZSBkZWZpbml0aW9uXHJcbmludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XHJcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xyXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xyXG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xyXG4gIH1cclxuICBcclxuICAvLyBUZWFjaGVySW50ZXJmYWNlIGRlZmluaXRpb25cclxuICBpbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XHJcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xyXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xyXG4gICAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIERpcmVjdG9yIGNsYXNzIGltcGxlbWVudGF0aW9uXHJcbiAgY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XHJcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIFwiV29ya2luZyBmcm9tIGhvbWVcIjtcclxuICAgIH1cclxuICBcclxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBcIkdldHRpbmcgYSBjb2ZmZWUgYnJlYWtcIjtcclxuICAgIH1cclxuICBcclxuICAgIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBcIkdldHRpbmcgdG8gZGlyZWN0b3IgdGFza3NcIjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gVGVhY2hlciBjbGFzcyBpbXBsZW1lbnRhdGlvblxyXG4gIGNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcclxuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gXCJDYW5ub3Qgd29yayBmcm9tIGhvbWVcIjtcclxuICAgIH1cclxuICBcclxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBcIkNhbm5vdCBoYXZlIGEgYnJlYWtcIjtcclxuICAgIH1cclxuICBcclxuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIFwiR2V0dGluZyB0byB3b3JrXCI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIGNyZWF0ZUVtcGxveWVlIGZ1bmN0aW9uXHJcbiAgZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBEaXJlY3RvciB8IFRlYWNoZXIge1xyXG4gICAgaWYgKHR5cGVvZiBzYWxhcnkgPT09ICdudW1iZXInICYmIHNhbGFyeSA8IDUwMCkge1xyXG4gICAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgRGlyZWN0b3IoKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gVGVzdCBjYXNlc1xyXG4gIGNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDIwMCkpOyAgLy8gVGVhY2hlclxyXG4gIGNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDEwMDApKTsgLy8gRGlyZWN0b3JcclxuICBjb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgnJDUwMCcpKTsgLy8gRGlyZWN0b3JcclxuXHJcbiAgY29uc3QgdGVhY2hlciA9IG5ldyBUZWFjaGVyKCk7XHJcbmNvbnNvbGUubG9nKHRlYWNoZXIud29ya0Zyb21Ib21lKCkpOyAgICAgICAvLyBBZmZpY2hlIDogQ2Fubm90IHdvcmsgZnJvbSBob21lXHJcbmNvbnNvbGUubG9nKHRlYWNoZXIuZ2V0Q29mZmVlQnJlYWsoKSk7ICAgICAvLyBBZmZpY2hlIDogQ2Fubm90IGhhdmUgYSBicmVha1xyXG5jb25zb2xlLmxvZyh0ZWFjaGVyLndvcmtUZWFjaGVyVGFza3MoKSk7ICAgLy8gQWZmaWNoZSA6IEdldHRpbmcgdG8gd29ya1xyXG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==