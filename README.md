# SQL TRACKER

## [Video Demo Link](https://drive.google.com/file/d/10FK7MfvZVrEt6kLhOWAxb2RU0AwCcBbc/view?usp=sharing)

## Overview

Following are the major highlights of the application
1. A Textarea For an user to enter its query, when an user enter his query into the text area and clicks on run query 
a (tablular view/analatical view) screen is generated underneath, showcasing the result of the query
![image](https://user-images.githubusercontent.com/73072690/174439784-61e47293-9748-442f-b01a-70c5cab486e9.png)

![image](https://user-images.githubusercontent.com/73072690/174439816-f6d078d5-cb00-41a1-98bc-ed54d171fe28.png)


2. Under the Textarea there's a dropdown section where an user can toggle between some already stored query, 
Three different tables have been used in the running of these queries,containing the rainfall data of three different 
countries namely INDIA,USA,Germany

![image](https://user-images.githubusercontent.com/73072690/174439855-51b9b1f5-21ba-4aaa-bf07-c0845bb0e369.png)

3. Just above the section where the output screen is generated there is a box containing three different icons, the icons are 
responsible for toggling among the
Tabular view, analatical view of the ran query, and 

![image](https://user-images.githubusercontent.com/73072690/174439922-768baf78-622e-46ac-a39e-42a7d72e915e.png)

4. The third icon is responsible for the printing of a books table on the basis of the query the user enters in the input field which is fetching data from an 
external openbooks api and printing it in a tabluar fashion till the point an user scrolls
so that an user can get all the required recommendation it needs
![image](https://user-images.githubusercontent.com/73072690/174439941-0af68b10-3276-4bd0-826f-ae418b6bb15d.png)
![image](https://user-images.githubusercontent.com/73072690/174439952-1f0bdc11-1e38-4296-8420-a106ce02b030.png)



5.The analatical view for each query is a comparison among all the attributes for all the rows, so there are buttons showcasing the attributes which can be chosen to print whatever the data the user needs so that a verified conclusion for each query can be generated
![image](https://user-images.githubusercontent.com/73072690/174439970-406d7062-e8cf-4b2c-8b9e-d7ac23804c3a.png)

![image](https://user-images.githubusercontent.com/73072690/174439977-3cd8480e-9817-4572-941b-ec577e4e9a09.png)


6. The create query section is builtin for the non coder users that. For each type of query there's a button present, which on 
being clicked would produce an input form
which will ask for the required fields to genetate a query (different fields for each query) and would print the query itself in the console, 
which can later on be connected to a backend and can be sent to a database for its use

![image](https://user-images.githubusercontent.com/73072690/174440007-c642c4ff-eb87-461e-93e8-c2669ac9b3c5.png)
![image](https://user-images.githubusercontent.com/73072690/174440020-5525fbe5-3510-424f-bcf5-11a7548237b0.png)
![image](https://user-images.githubusercontent.com/73072690/174440030-b16c157f-8504-4c4b-b409-ae6a8238d49e.png)
![image](https://user-images.githubusercontent.com/73072690/174440034-1e8c42b2-502d-4b15-80d0-e371e6ea9511.png)
![image](https://user-images.githubusercontent.com/73072690/174440041-4bc01121-4774-47dc-a958-60e3f72e2ada.png)


7. The get results section is responsible for providing the user with all the arithmetic data it requires, the 
functionality is similar as above, all the required fields are asked for by a form 
and the usable query is generated in the console

![image](https://user-images.githubusercontent.com/73072690/174440083-4c405774-b8e0-433a-8458-c589c37f41d1.png)
![image](https://user-images.githubusercontent.com/73072690/174440102-d4ee755f-c74e-48c7-822b-8d34ae2af12c.png)


## Framework
[React.js](https://reactjs.org/)

## Dependencies
1. @material-ui, antd (For styling Purposes)
2. axios (For fectching data out of openbook.api
3. chart.js,react-chartjs-2 (For producing graphs)

## Page Load Time

![image](https://user-images.githubusercontent.com/73072690/174440426-abf1319f-2548-4627-bdd4-06e7b1a7fee4.png)

[Platform](https://www.browserstack.com/speedlab/home)

## Optimisation
1. For the optimised loading of components lazy loading technique of code splitting has been used
2. Infinite scrolling has been used for the large amount of data fetching from openbook api
3. stylesheets have been used for css whereever required


