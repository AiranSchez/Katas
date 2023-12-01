### This kata is part of the [Karumi's Maxibon kata](https://github.com/Karumi/MaxibonKataJava)
## Getting started

Karumi developers love ice cream. And one of our favorites ice cream is named Maxibon:

Summer is comming and our small team sometime needs Maxibons to work better. But in the Karumi HQs finding a Maxibon is not always easy. We start every week with 10 Maxibons but once there are just 2 Maxibons or less we need to buy more.

Karumi developers can consume zero or a positive number of maxibons. The Karumi team is composed by five engineers and everytime some of these engineers go to the kitchen they grab some maxibons as follows:

* If the developer is Pedro, he grabs three maxibons.
* If the developer is Fran, he grabs one maxibon.
* If the developer is Davide, he does not grab any maxibon.
* If the developer is Sergio, he grabs two maxibons.
* If the developer is Jorge, he grabs one maxibon.

When a Karumi engineer goes to the kitchen, they can go in group if needed, and there are just 2 maxibons or less left he has to send a message through the Slack API saying ``"Hi guys, I'm <NAME OF THE DEVELOPER>. We need more maxibons!"``. And the number of maxibons available will be automatically incremented by 10 :). If the number of maxibons left is lower than the number of maxibons the developer tries to get he will get just the number of maxibons available.

## Extra tasks:

* Change the initial number of maxibons to be configurable.
* Add the verbose modifier to the properties to review if the generation is working fine.
* Change your production code to check if your tests fail or not.
* Configure the number of generations used per property.
