function letDemo() {
    let message = "Let demo";
    console.log(message);

    let greeter = "hey hi";

    function newFunction() {
        let greeter = "hello";
    }

    newFunction()

    console.log(greeter);
}

function varDemo() {
    var message = "Var demo";
    console.log(message);

    var greeter = "hey hi";

    function newFunction() {
        var greeter = "hello";
    }

    newFunction()

    console.log(greeter);
}

function constDemo() {
    const message = "Const demo";
    console.log(message);

    const greeter = "hey hi";

    function newFunction() {
        // greeter = "hello"; can't assign
    }

    newFunction()

    console.log(greeter);
}


letDemo()
varDemo()
constDemo()
