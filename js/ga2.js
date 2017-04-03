window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();

      function initBalls() {
        balls = [];

        var blue = '#3A5BCD';
        var red = '#EF2B36';
        var yellow = '#FFC636';
        var green = '#02A817';

        balls.push(new Ball(9.142486,20.792216,0.000000, 0, blue));
        balls.push(new Ball(11.137885,30.342907,0.000000, 0, blue));
        balls.push(new Ball(9.142486,20.792216,0.000000, 0, blue));
        balls.push(new Ball(11.137885,30.342907,0.000000, 0, blue));
        balls.push(new Ball(11.137885,30.342907,0.000000, 0, blue));
        balls.push(new Ball(12.407684,40.074938,0.000000, 0, blue));
        balls.push(new Ball(12.407684,40.074938,0.000000, 0, blue));
        balls.push(new Ball(13.873441,50.202626,0.000000, 0, blue));
        balls.push(new Ball(13.873441,50.202626,0.000000, 0, blue));
        balls.push(new Ball(15.143241,59.692868,0.000000, 0, green));
        balls.push(new Ball(15.143241,59.692868,0.000000, 0, green));
        balls.push(new Ball(16.41304,69.908479,0.000000, 0, green));
        balls.push(new Ball(16.41304,69.908479,0.000000, 0, green));
        balls.push(new Ball(18.567628,79.208337,0.000000, 0, green));
        balls.push(new Ball(18.567628,79.208337,0.000000, 0, green));
        balls.push(new Ball(19.103596,89.204433,0.000000, 0, green));
        balls.push(new Ball(19.103596,89.204433,0.000000, 0, green));
        balls.push(new Ball(22.362494,81.281308,0.000000, 0, green));
        balls.push(new Ball(22.362494,81.281308,0.000000, 0, green));
        balls.push(new Ball(26.217001,72.369946,0.000000, 0, green));
        balls.push(new Ball(26.217001,72.369946,0.000000, 0, green));
        balls.push(new Ball(29.687564,63.567202,0.000000, 0, green));
        balls.push(new Ball(29.687564,63.567202,0.000000, 0, green));
        balls.push(new Ball(33.190827,54.466247,0.000000, 0, green));
        balls.push(new Ball(33.190827,54.466247,0.000000, 0, green));
        balls.push(new Ball(37.175408,45.084983,0.000000, 0, green));
        balls.push(new Ball(37.175408,45.084983,0.000000, 0, blue));
        balls.push(new Ball(40.653188,36.238292,0.000000, 0, blue));
        balls.push(new Ball(40.653188,36.238292,0.000000, 0, blue));
        balls.push(new Ball(44.302618,26.857029,0.000000, 0, blue));
        balls.push(new Ball(44.302618,26.857029,0.000000, 0, blue));
        balls.push(new Ball(48.030059,17.834992,0.000000, 0, blue));
        balls.push(new Ball(73.533165,16.957583,0.000000, 0, blue));
        balls.push(new Ball(82.695159,17.975259,0.000000, 0, blue));
        balls.push(new Ball(82.695159,17.975259,0.000000, 0, blue));
        balls.push(new Ball(92.759449,17.880184,0.000000, 0, blue));
        balls.push(new Ball(92.759449,17.880184,0.000000, 0, blue));
        balls.push(new Ball(102.291625,17.648893,0.000000, 0, blue));
        balls.push(new Ball(102.291625,17.648893,0.000000, 0, blue));
        balls.push(new Ball(112.332802,17.51012,0.000000, 0, blue));
        balls.push(new Ball(70.519246,25.494466,0.000000, 0, blue));
        balls.push(new Ball(69.038518,34.977353,0.000000, 0, blue));
        balls.push(new Ball(69.038518,34.977353,0.000000, 0, blue));
        balls.push(new Ball(67.055201,44.389946,0.000000, 0, green));
        balls.push(new Ball(67.055201,44.389946,0.000000, 0, green));
        balls.push(new Ball(71.436532,46.814643,0.000000, 0, green));
        balls.push(new Ball(71.436532,46.814643,0.000000, 0, green));
        balls.push(new Ball(81.519092,46.641414,0.000000, 0, green));
        balls.push(new Ball(81.519092,46.641414,0.000000, 0, green));
        balls.push(new Ball(91.14848,46.855331,0.000000, 0, green));
        balls.push(new Ball(91.14848,46.855331,0.000000, 0, green));
        balls.push(new Ball(100.884862,46.427495,0.000000, 0, green));
        balls.push(new Ball(66.112072,54.556391,0.000000, 0, green));
        balls.push(new Ball(64.614167,64.182716,0.000000, 0, green));
        balls.push(new Ball(64.614167,64.182716,0.000000, 0, green));
        balls.push(new Ball(63.116263,74.022959,0.000000, 0, green));
        balls.push(new Ball(63.116263,74.022959,0.000000, 0, green));
        balls.push(new Ball(61.832344,83.649284,0.000000, 0, green));
        balls.push(new Ball(152.237065,16.068871,0.000000, 0, green));
        balls.push(new Ball(142.527476,15.882208,0.000000, 0, green));
        balls.push(new Ball(142.527476,15.882208,0.000000, 0, green));
        balls.push(new Ball(132.444441,16.628861,0.000000, 0, green));
        balls.push(new Ball(132.444441,16.628861,0.000000, 0, green));
        balls.push(new Ball(126.954553,16.422417,0.000000, 0, green));
        balls.push(new Ball(126.954553,16.422417,0.000000, 0, green));
        balls.push(new Ball(125.047003,22.078603,0.000000, 0, green));
        balls.push(new Ball(125.047003,22.078603,0.000000, 0, green));
        balls.push(new Ball(123.591027,31.918386,0.000000, 0, green));
        balls.push(new Ball(123.591027,31.918386,0.000000, 0, green));
        balls.push(new Ball(121.908214,41.594775,0.000000, 0, blue));
        balls.push(new Ball(121.908214,41.594775,0.000000, 0, blue));
        balls.push(new Ball(120.030897,51.275507,0.000000, 0, blue));
        balls.push(new Ball(120.030897,51.275507,0.000000, 0, blue));
        balls.push(new Ball(118.898104,61.147399,0.000000, 0, blue));
        balls.push(new Ball(118.898104,61.147399,0.000000, 0, red));
        balls.push(new Ball(117.439511,70.988801,0.000000, 0, red));
        balls.push(new Ball(117.439511,70.988801,0.000000, 0, red));
        balls.push(new Ball(115.758281,80.652798,0.000000, 0, red));
        balls.push(new Ball(115.758281,80.652798,0.000000, 0, red));
        balls.push(new Ball(115.633736,90.757749,0.000000, 0, red));
        balls.push(new Ball(115.633736,90.757749,0.000000, 0, blue));
        balls.push(new Ball(125.462465,89.755796,0.000000, 0, blue));
        balls.push(new Ball(125.462465,89.755796,0.000000, 0, blue));
        balls.push(new Ball(135.646839,89.238659,0.000000, 0, blue));
        balls.push(new Ball(135.646839,89.238659,0.000000, 0, blue));
        balls.push(new Ball(145.37166,88.687541,0.000000, 0, blue));
        balls.push(new Ball(127.087177,54.021247,0.000000, 0, blue));
        balls.push(new Ball(136.3921,53.362053,0.000000, 0, blue));
        balls.push(new Ball(136.3921,53.362053,0.000000, 0, blue));
        balls.push(new Ball(145.477222,52.92259,0.000000, 0, green));
        balls.push(new Ball(161.30649,87.388238,0.000000, 0, green));
        balls.push(new Ball(162.644811,78.240552,0.000000, 0, green));
        balls.push(new Ball(162.644811,78.240552,0.000000, 0, green));
        balls.push(new Ball(164.090751,69.097168,0.000000, 0, green));
        balls.push(new Ball(164.090751,69.097168,0.000000, 0, green));
        balls.push(new Ball(166.11096,60.072052,0.000000, 0, green));
        balls.push(new Ball(166.11096,60.072052,0.000000, 0, green));
        balls.push(new Ball(168.581674,51.062818,0.000000, 0, green));
        balls.push(new Ball(168.581674,51.062818,0.000000, 0, green));
        balls.push(new Ball(169.777981,41.415827,0.000000, 0, green));
        balls.push(new Ball(169.777981,41.415827,0.000000, 0, green));
        balls.push(new Ball(171.570745,32.244728,0.000000, 0, green));
        balls.push(new Ball(171.570745,32.244728,0.000000, 0, green));
        balls.push(new Ball(173.553027,23.480641,0.000000, 0, green));
        balls.push(new Ball(173.553027,23.480641,0.000000, 0, blue));
        balls.push(new Ball(175.403087,21.163029,0.000000, 0, blue));
        balls.push(new Ball(175.403087,21.163029,0.000000, 0, blue));
        balls.push(new Ball(176.957783,26.661752,0.000000, 0, blue));
        balls.push(new Ball(176.957783,26.661752,0.000000, 0, blue));
        balls.push(new Ball(178.021512,35.711263,0.000000, 0, blue));
        balls.push(new Ball(178.021512,35.711263,0.000000, 0, blue));
        balls.push(new Ball(179.179055,45.296894,0.000000, 0, blue));
        balls.push(new Ball(179.179055,45.296894,0.000000, 0, blue));
        balls.push(new Ball(180.989775,55.646922,0.000000, 0, red));
        balls.push(new Ball(180.989775,55.646922,0.000000, 0, red));
        balls.push(new Ball(184.627594,52.334789,0.000000, 0, red));
        balls.push(new Ball(184.627594,52.334789,0.000000, 0, red));
        balls.push(new Ball(187.241997,43.663208,0.000000, 0, red));
        balls.push(new Ball(187.241997,43.663208,0.000000, 0, red));
        balls.push(new Ball(190.247752,34.342673,0.000000, 0, red));
        balls.push(new Ball(190.247752,34.342673,0.000000, 0, red));
        balls.push(new Ball(193.041143,24.786004,0.000000, 0, red));
        balls.push(new Ball(193.041143,24.786004,0.000000, 0, red));
        balls.push(new Ball(194.713541,21.255545,0.000000, 0, red));
        balls.push(new Ball(194.713541,21.255545,0.000000, 0, red));
        balls.push(new Ball(195.264579,26.223846,0.000000, 0, blue));
        balls.push(new Ball(195.264579,26.223846,0.000000, 0, blue));
        balls.push(new Ball(195.535311,36.002205,0.000000, 0, blue));
        balls.push(new Ball(195.535311,36.002205,0.000000, 0, blue));
        balls.push(new Ball(195.883454,45.513165,0.000000, 0, blue));
        balls.push(new Ball(195.883454,45.513165,0.000000, 0, blue));
        balls.push(new Ball(196.659523,55.535578,0.000000, 0, blue));
        balls.push(new Ball(196.659523,55.535578,0.000000, 0, blue));
        balls.push(new Ball(196.873272,65.473511,0.000000, 0, blue));
        balls.push(new Ball(196.873272,65.473511,0.000000, 0, blue));
        balls.push(new Ball(197.595956,75.095636,0.000000, 0, blue));
        balls.push(new Ball(197.595956,75.095636,0.000000, 0, blue));
        balls.push(new Ball(197.864103,85.35465,0.000000, 0, blue));


        return balls;
      }
      function getMousePos(canvas, evt) {
        // get canvas position
        var obj = canvas;
        var top = 0;
        var left = 0;
        while(obj.tagName != 'BODY') {
          top += obj.offsetTop;
          left += obj.offsetLeft;
          obj = obj.offsetParent;
        }

        // return relative mouse position
        var mouseX = evt.clientX - left + window.pageXOffset;
        var mouseY = evt.clientY - top + window.pageYOffset;
        return {
          x: mouseX,
          y: mouseY
        };
      }
      function updateBalls(canvas, balls, timeDiff, mousePos) {
        var context = canvas.getContext('2d');
        var collisionDamper = 0.3;
        var floorFriction = 0.0005 * timeDiff;
        var mouseForceMultiplier = 1 * timeDiff;
        var restoreForce = 0.002 * timeDiff;

        for(var n = 0; n < balls.length; n++) {
          var ball = balls[n];
          // set ball position based on velocity
          ball.y += ball.vy;
          ball.x += ball.vx;

          // restore forces
          if(ball.x > ball.origX) {
            ball.vx -= restoreForce;
          }
          else {
            ball.vx += restoreForce;
          }
          if(ball.y > ball.origY) {
            ball.vy -= restoreForce;
          }
          else {
            ball.vy += restoreForce;
          }

          // mouse forces
          var mouseX = mousePos.x;
          var mouseY = mousePos.y;

          var distX = ball.x - mouseX;
          var distY = ball.y - mouseY;

          var radius = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));

          var totalDist = Math.abs(distX) + Math.abs(distY);

          var forceX = (Math.abs(distX) / totalDist) * (1 / radius) * mouseForceMultiplier;
          var forceY = (Math.abs(distY) / totalDist) * (1 / radius) * mouseForceMultiplier;

          if(distX > 0) {// mouse is left of ball
            ball.vx += forceX;
          }
          else {
            ball.vx -= forceX;
          }
          if(distY > 0) {// mouse is on top of ball
            ball.vy += forceY;
          }
          else {
            ball.vy -= forceY;
          }

          // floor friction
          if(ball.vx > 0) {
            ball.vx -= floorFriction;
          }
          else if(ball.vx < 0) {
            ball.vx += floorFriction;
          }
          if(ball.vy > 0) {
            ball.vy -= floorFriction;
          }
          else if(ball.vy < 0) {
            ball.vy += floorFriction;
          }

          // floor condition
          if(ball.y > (canvas.height - ball.radius)) {
            ball.y = canvas.height - ball.radius - 2;
            ball.vy *= -1;
            ball.vy *= (1 - collisionDamper);
          }

          // ceiling condition
          if(ball.y < (ball.radius)) {
            ball.y = ball.radius + 2;
            ball.vy *= -1;
            ball.vy *= (1 - collisionDamper);
          }

          // right wall condition
          if(ball.x > (canvas.width - ball.radius)) {
            ball.x = canvas.width - ball.radius - 2;
            ball.vx *= -1;
            ball.vx *= (1 - collisionDamper);
          }

          // left wall condition
          if(ball.x < (ball.radius)) {
            ball.x = ball.radius + 2;
            ball.vx *= -1;
            ball.vx *= (1 - collisionDamper);
          }
        }
      }
      function Ball(x, y, vx, vy, color) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.origX = x;
        this.origY = y;
        this.radius = 5;
      }
      function animate(canvas, balls, lastTime, mousePos) {
        var context = canvas.getContext('2d');

        // update
        var date = new Date();
        var time = date.getTime();
        var timeDiff = time - lastTime;
        updateBalls(canvas, balls, timeDiff, mousePos);
        lastTime = time;

        // clear
        context.clearRect(0, 0, canvas.width, canvas.height);

        // render
        for(var n = 0; n < balls.length; n++) {
          var ball = balls[n];
          context.beginPath();
          context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI, false);
          context.fillStyle = ball.color;
          context.fill();
        }

        // request new frame
        requestAnimFrame(function() {
          animate(canvas, balls, lastTime, mousePos);
        });
      }
      var canvas = document.getElementById('myCanvas');
      var balls = initBalls();
      var date = new Date();
      var time = date.getTime();
      /*
       * set mouse position really far away
       * so the mouse forces are nearly obsolete
       */
      var mousePos = {
        x: 9999,
        y: 9999
      };

      canvas.addEventListener('mousemove', function(evt) {
        var pos = getMousePos(canvas, evt);
        mousePos.x = pos.x;
        mousePos.y = pos.y;
      });

      canvas.addEventListener('mouseout', function(evt) {
        mousePos.x = 9999;
        mousePos.y = 9999;
      });
      animate(canvas, balls, time, mousePos);