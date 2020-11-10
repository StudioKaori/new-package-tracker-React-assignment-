# Yellow Corporation Package Tracker

## SDA react assignment

Package Tracker is a simple package tracker.  
You can search and track your packages status under.

## Installation

Build foloder is "/build".  
Route page is "/src/App.jsx"

## User manual

Please access to the following link.
Firebase : '[https://sda-package-tracker.web.app](https://sda-package-tracker.web.app)'

1. Search your packages by your name  
   Please input your name ("Jhon Doe" in this case) in the entry page to search and track your packages.

2. Sort by Last update, ETA or Sender  
   You can sort the tracking results by Last update, ETA or Sender from the top right drop down list.

3. Select languages
   This site supports English, Swedish and Japanese.
   Please select your preferable language from the top right language selecter.

## Dependencies

- i18n
  For multi-languages support

- Recoil  
  For shared statement. (To share preferable language setting)

## Class diagram and activity diagram

'[Class diagram and activity diagram](https://drive.google.com/file/d/1ZPZFC3kEt-FhB211yppsOoWCfLqH85lW/view?usp=sharing)'

## Business requirement & data(json) analytic

'[Business requirement & data(json) analytic](https://docs.google.com/spreadsheets/d/1QzxyQG3TT45rRh7XErl9EbiCbTLRGJDu5l8evuvpJEU/edit?usp=sharing)'

## Bug/issues

No bug/issues reported.

## Last Update

[2020.11.10] Depley firebase

## About unnecessary files

To avoid to access mockaroo too many times, I used local fake Json file for the test.  
"/src/components/FakeDBTrackingResults.jsx"  
"/src/PackageTrackingData.json"  
 The files above are for the test. You don't need to check the files. I just leave it for possible change for the future.

## License

[MIT](https://choosealicense.com/licenses/mit/)
