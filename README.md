# progress-bar-test
This is a progress bar test which I had to do, there are a few glitches, but hopefully it will be sufficient...

Issues with this exercise:

* Animations are a little clunky... If the progress bar hits 0% or 100% exactly, the animation jumps straight to the progress value, rather than animating a smooth transition. This requires further investigation.
* Multiple presses of the buttons in quick succession causes a glitch in the bubbling of function calls, and requires the code to "catch up" before the button is pressed again. Possibly to do with animation? I could possibly sacrifice animation for a fast and fast-response version of this test.
* Creating tests for this process would be quite a significant load and would take up a considerable amount of time... I don't believe I had that amount of time on my hands. Also bearing in mind that it is 12am here and that I've never encountered RActive.js until I came across this test, I wouldn't begin to imagine how I would write tests for an RActive app that I have created using a design pattern... Especially considering I knew nothing about RActive a few hours ago, where would one begin... ? I would have needed more time to do this. Hopefully the resulting code would be enough to get me across the line.
