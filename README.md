# SelectOInput
### Angular Select with Input text functionality

----------

## How to run?
* A valid internet connection is required (as angular is fetched from a CDN).
* Clone the repo.
* run `bower install angular-animate --save` in CommandPrompt where the folder is located to install angular-animatation.
* run `python -m SimpleHTTPServer` in CommandPrompt where the folder is located to run python server as Chrome throws CORS Error for accessing the the files located in local directory, with this we are accessing the file from a local web server.
* open ````http://127.0.0.1:8000/dialog_impl.html```` in Chrome.

###### The implementation is done  on top of`List<Team - > List < Team Members>>` data structure it can be viewed [here](https://github.com/shivateja-madipalli/SelectOInput/blob/master/data/teamMembers.json)

## Steps

#### Primary View of the application

![Parent View](/data/imgs/one.png?raw=true "")

#### On Clicking ``"Click Me! Dont :D"`` you would see a modal popup.

![Typing](/data/imgs/one-2.png?raw=true "")

#### Type or Select the values

![Typing](/data/imgs/typing.png?raw=true "")

#### Select Option view

![Typing](/data/imgs/options.png?raw=true "")

#### After Selecting/Typing Team and Team Member

![Typing](/data/imgs/last.png?raw=true "")

## Description
* The Data is coming from [data](https://github.com/shivateja-madipalli/SelectOInput/blob/master/data/teamMembers.json) and it is loaded into the angular app with ngResource.
* Either select or type the team or team member name.
* The Search (By typing) is case insensitive.
* By default team member element will be disabled and unless a team is selected, it will not be enabled.

## Todo
* Quick Type Suggestions can be implemented.
* Making the application responsive.
* Giving an option to add new teams/team members.

-------------

* _Shivateja(Shiv) Madipalli_
  * _https://shivatejam.com_
