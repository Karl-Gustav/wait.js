
n(global) {
    global.wait = function(time) {
        var queue = []
        function wait(time) {
            return {
                done: function(cb) {
                    queue.push({cb: cb, time:time});
                    return {
                        wait: wait,
                        go: next
                    };
                }
            }
        }

        function next() {
            if (!queue.length) return;
            var item = queue.shift()
            setTimeout(function() {
                item.cb();
                next();
            }, item.time);
        }

        return wait(time);
    }

} (window))

