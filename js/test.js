var MyModules = (function Manager() {

    var modules = {};

    function define(name, deps, impl) {

        for (var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
        }

        modules[name] = impl.apply(impl, deps);
    }

    function get(name) { return modules[name]; }

    return {
        defineAPI: define,
        getAPI: get
    }
})();

MyModules.defineAPI("bar", [], function() {

    function hello(who) { return "Let me introduce: " + who; }

    return { helloAPI: hello }
});

MyModules.defineAPI("foo", ["bar"], function(bar) {

    var hungry = "hippo";

    function awesome() {
        console.log(bar.helloAPI(hungry).toUpperCase());
    }

    return { awesomeAPI: awesome }
})

var bar = MyModules.getAPI("bar");
var foo = MyModules.getAPI("foo");

console.log(bar.helloAPI("hippo")); // Let me introduce: hippo
foo.awesomeAPI(); // LET ME INTRODUCE: HIPPO
