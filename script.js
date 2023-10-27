document.addEventListener("DOMContentLoaded", function() {
    const leftPaddle = document.getElementById("leftPaddle");
    const rightPaddle = document.getElementById("rightPaddle");
    const ball = document.getElementById("ball");

    let ballSpeedX = 5;
    let ballSpeedY = 5;

    function update() {
        // Move ball
        ball.style.left = (ball.offsetLeft + ballSpeedX) + "px";
        ball.style.top = (ball.offsetTop + ballSpeedY) + "px";

        // Ball collisions with walls
        if (ball.offsetTop <= 0 || ball.offsetTop + ball.offsetHeight >= 400) {
            ballSpeedY = -ballSpeedY;
        }

        // Ball collisions with paddles
        if (
            (ball.offsetLeft <= leftPaddle.offsetLeft + leftPaddle.offsetWidth) &&
            (ball.offsetTop + ball.offsetHeight >= leftPaddle.offsetTop) &&
            (ball.offsetTop <= leftPaddle.offsetTop + leftPaddle.offsetHeight)
        ) {
            ballSpeedX = -ballSpeedX;
        }

        if (
            (ball.offsetLeft + ball.offsetWidth >= rightPaddle.offsetLeft) &&
            (ball.offsetTop + ball.offsetHeight >= rightPaddle.offsetTop) &&
            (ball.offsetTop <= rightPaddle.offsetTop + rightPaddle.offsetHeight)
        ) {
            ballSpeedX = -ballSpeedX;
        }

        // Check for scoring
        if (ball.offsetLeft <= 0 || ball.offsetLeft + ball.offsetWidth >= 600) {
            // Respawn the ball
            ball.style.left = "290px";
            ball.style.top = "190px";
            ballSpeedX = -ballSpeedX;
        }
    }

    function gameLoop() {
        update();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
});
