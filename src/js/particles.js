$(function () {
    function r() {
        e.window.on("resize", function () {
            e.ww = window.innerWidth;
            e.hh = $(document).height();
            t.canvas.width = e.ww;
            t.canvas.height = e.hh;
            i()
        });
        t.canvas.width = e.ww;
        t.canvas.height = e.hh
    }
    function i() {
        t.ctx.fillStyle = "rgb(255,255,255)"; //rgba(0,0,0,1)
        t.ctx.fillRect(0, 0, e.ww, e.hh)
    }
    function s() {
        this.x = Math.random() * e.ww;
        this.y = Math.random() * e.hh;
        this.vx = -1 + Math.random() * 2;
        this.vy = -1 + Math.random() * 2;
        this.radius = Math.random() * 2;
        this.draw = function () {
            t.ctx.fillStyle = "rgba(0,0,0,0.5)";
            t.ctx.beginPath();
            t.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            t.ctx.fill()
        }
    }
    function o() {
        for (var e = 0; e < n.nb; e++) {
            n.array.push(new s)
        }
    }
    function u() {
        i();
        for (var e = 0; e < n.array.length; e++) {
            n.array[e].draw()
        }
        a()
    }
    function a() {
        for (var t = 0; t < n.array.length; t++) {
            p = n.array[t];
            p.x += p.vx;
            p.y += p.vy;
            if (p.x + p.radius > e.ww) p.x = p.radius;
            else if (p.x - p.radius < 0) p.x = e.ww - p.radius;
            if (p.y + p.radius > e.hh) p.y = p.radius;
            else if (p.y - p.radius < 0) p.y = e.hh - p.radius;
            for (var r = t + 1; r < n.array.length; r++) {
                p2 = n.array[r];
                f(p, p2);
                l(p, p2)
            }
        }
    }
    function f(e, n) {
        var r, i = e.x - n.x;
        dy = e.y - n.y;
        r = Math.sqrt(i * i + dy * dy);
        var s, o = e.x - t.mouse_pos.x;
        dy_mouse = e.y - t.mouse_pos.y;
        s = Math.sqrt(o * o + dy_mouse * dy_mouse);
        if (r <= t.min_dist_particles && s <= t.min_dist_mouse && t.status == "mousemove") {
            t.ctx.beginPath();
            t.ctx.strokeStyle = "rgba(0,0,0," + t.opacity_line + ")";
            t.ctx.moveTo(e.x, e.y);
            t.ctx.lineTo(t.mouse_pos.x, t.mouse_pos.y);
            t.ctx.stroke();
            t.ctx.closePath()
        }
    }
    function l(e, n) {
        var r, i = e.x - n.x;
        dy = e.y - n.y;
        r = Math.sqrt(i * i + dy * dy);
        if (r <= t.min_dist_particles) {
            t.ctx.beginPath();
            t.ctx.strokeStyle = "rgba(0,0,0," + (1 - r / t.min_dist_particles) + ")";
            t.ctx.moveTo(e.x, e.y);
            t.ctx.lineTo(n.x, n.y);
            t.ctx.stroke();
            t.ctx.closePath()
        }
    }
    function c() {
        r();
        i();
        o();
        u();
        h()
    }
    function h() {
        u();
        requestAnimFrame(h)
    }
    window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (e) {
            window.setTimeout(e, 1e3 / 60)
        }
    }();
    var e = {
        window: $(window),
        ww: window.innerWidth,
        hh: window.innerHeight
    };
    var t = {
        canvas: document.getElementById("anim"),
        mouse_pos: {
            x: 0,
            y: 0
        },
        opacity_line: .4,
        min_dist_particles: 120,
        min_dist_mouse: 150,
        status: "mouseleave"
    };
    var n = {
        nb: 100,
        array: []
    };
    t.ctx = t.canvas.getContext("2d");
    if (e.ww > 1100) c();
    e.window.on("mousemove mouseleave", function (e) {
        if (e.type == "mousemove") {
            t.status = "mousemove";
            t.mouse_pos.x = e.pageX;
            t.mouse_pos.y = e.pageY
        } else {
            t.status = "mouseleave";
            t.mouse_pos.x = 0;
            t.mouse_pos.y = 0
        }
    })
})