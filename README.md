
# Bowling Challenge #

## The Task ##

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Optional Extras ###

- [ ] Create a nice interactive animated interface with jQuery.

- [ ] Set up [Travis CI](https://travis-ci.org) to run your tests.

- [ ] Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

## User Stories ##

```

- [ ]   As a ten-pin bowler,
        I want to enter my scores into a scoreboard
        so I can track my game progress.

- [ ]   As a ten-pin bowler,
        I want my current score to be calculated and displayed
        so I can see how I am doing.

- [ ]   As a ten-pin bowler,
        I want to see when my strike bonus is active
        so I can see the bonus is added to my next score.

- [ ]   As a ten-pin bowler,
        I want to see when my spare bonus is active
        so I can see the bonus is added to my next score.

- [ ]   As a ten-pin bowler,
        I want to see my final score
        so I can see if I have been victorious.

```

## Bowling — how it works ##

### Strikes ###

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares ###

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame ###

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game ###

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game ###

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
