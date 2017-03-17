# SelectOInput
### Angular Select with Input text functionality

----------

## How to run?
* A valid internet connection is required (as angular is fetched from a CDN).
* Clone the repo.
* `run bower install angular-animate --save` to have angular-animatation.
* run `python -m SimpleHTTPServer` run run a python server as Chrome throws CORS Error. 

###### The implementation is done  on top of`List<Team - > List < Team Members>>` data

## Steps

#### Primary View

![Parent View](/data/imgs/one.png?raw=true "")

#### Modal View

![Typing](/data/imgs/one-2.png?raw=true "")

#### Typing

![Typing](/data/imgs/typing.png?raw=true "")

#### To Select Options

![Typing](/data/imgs/options.png?raw=true "")


#### After Selecting Team and Team Member

![Typing](/data/imgs/last.png?raw=true "")

## Description
* The Data is coming from [data](https://github.com/shivateja-madipalli/SelectOInput/blob/master/data/teamMembers.json) and the the content is loaded into the angular app with ngResource.
* One can either select or type the team or team member name.
* The Search is case insensitive.
* Unless a team is selected, team member element will not be enabled.

## Todo
* Quick Type Suggestions can be implemented.
* Making the application responsive.
* Giving an option to add new teams/team members.

-------------

* _Shivateja(Shiv) Madipalli_
  * _https://shivatejam.com_
