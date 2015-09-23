# y-combinator-companies
A React webapp for displaying Y Combinator companies

## When you need to change the data...
  - Make the change in the numbers file
  - Convert Numbers to a CSV file
  - Convert CSV file to JSON via http://www.csvjson.com/csv2json
  - Copy the JSON data to data.json

## To run...
  - Start psql
  - Go to client/js and run jsx --watch src/ build/

## Problems to fix...
  - Clicking on website links doesn't work
  - First column in the Year checkboxes are janky
  - Company logos won't default to the YC one when missing
  - Loading images is slow
  - Reactive change is slow, think about not using a database at all

## Features...
  - Implement funding slider
  - Implement exit value slider