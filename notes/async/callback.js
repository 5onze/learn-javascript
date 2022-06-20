'use strict';

// JavaScript is synchronous. (동기적인)
// Execute the code block in order after hoisting.
// hoisting: var, function declaration
// 호이스팅 : var 변수와 함수 선언들이 자동적으로 제일 위로 올라가는 것.
console.log('1');
setTimeout(() => console.log('2'), 1000); // 1초 뒤에 실행
console.log('3');


// Synchronous callback 동기적으로 콜백
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello')); // 함수의 선언은 호이스팅 된다 (제일 위로)


// Asynchronous callback 비동기적으로 콜백
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


// Callback 지옥 예제
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') || //a 이거나 b
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    }, 
    error => {
        console.log(error);
    }
);