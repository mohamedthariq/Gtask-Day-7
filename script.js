//json api

let xhr = new XMLHttpRequest();

//xhr.open("GET","https://restcountries.com/v3.1/all");

xhr.open("GET","https://restcountries.com/v2/all");

xhr.onload=function() {
	
    if(xhr.status>=200 && xhr.status<300){
    	let data = JSON.parse(this.response);

//display the name of the contries in the Asia region

        let filterData = data.filter((elem) => {
            return elem.region == "Asia"
         }).map((elem1) => {
            return elem1.name;
         })
         console.log(filterData);

//output for above code..

// (50) ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei Darussalam', 'Cambodia', 'China', 'Georgia', 'Hong Kong', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', "Lao People's Democratic Republic", 'Lebanon', 'Macao', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', "Korea (Democratic People's Republic of)", 'Oman', 'Pakistan', 'Palestine, State of', 'Philippines', 'Qatar', 'Saudi Arabia', 'Singapore', 'Korea (Republic of)', 'Sri Lanka', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen']


//display the population contries which has less than 2lakhs

        let populationData = data.filter((elem) => {
            return elem.population < 200000;
        }).map((elem1) => {
            return elem1.name;
        })
        console.log(populationData);

//output for above code..

// (62) ['Åland Islands', 'American Samoa', 'Andorra', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Aruba', 'Bermuda', 'Bonaire, Sint Eustatius and Saba', 'Bouvet Island', 'British Indian Ocean Territory', 'United States Minor Outlying Islands', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Cayman Islands', 'Christmas Island', 'Cocos (Keeling) Islands', 'Cook Islands', 'Curaçao', 'Dominica', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'French Southern Territories', 'Gibraltar', 'Greenland', 'Grenada', 'Guam', 'Guernsey', 'Heard Island and McDonald Islands', 'Vatican City', 'Isle of Man', 'Jersey', 'Kiribati', 'Liechtenstein', 'Marshall Islands', 'Micronesia (Federated States of)', 'Monaco', 'Montserrat', 'Nauru', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Palau', 'Pitcairn', 'Saint Barthélemy', 'Saint Helena, Ascension and Tristan da Cunha', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin (French part)', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Seychelles', 'Sint Maarten (Dutch part)', 'South Georgia and the South Sandwich Islands', 'Svalbard and Jan Mayen', 'Tokelau', 'Tonga', 'Turks and Caicos Islands', 'Tuvalu', 'Wallis and Futuna']

//display the Total population of the contries

        let totalpopulation = data.filter((elem) => {
            return elem.population;
        }).map((elem1) => {
            return elem1.population;
        }).reduce((total, current) => {
            return total + current;
        })
        console.log(totalpopulation);

// output for above code..
// 7759438109

         let currencyData = data.filter((elem) => {
            return elem.currencies.USD['name'];
         })
         console.log(currencyData);


//dtail of country name capital and flag detail using foreach

        let collData = "";
          let collectionData = data.forEach((elem) => {
            console.log(`Country name is '${elem.name['common']}' and its capital '${elem.capital}' it's flag is '${elem.flags['svg']}' `);
         })
         console.log(collectionData);

         
//output for forEach data

// Country name is 'Barbados' and its capital 'Bridgetown' it's flag is 'https://flagcdn.com/bb.svg' 
// script.js:74 Country name is 'British Indian Ocean Territory' and its capital 'Diego Garcia' it's flag is 'https://flagcdn.com/io.svg' 
// script.js:74 Country name is 'Republic of the Congo' and its capital 'Brazzaville' it's flag is 'https://flagcdn.com/cg.svg' 
// script.js:74 Country name is 'Brazil' and its capital 'Brasília' it's flag is 'https://flagcdn.com/br.svg' 
// script.js:74 Country name is 'Luxembourg' and its capital 'Luxembourg' it's flag is 'https://flagcdn.com/lu.svg' 
// script.js:74 Country name is 'United States Virgin Islands' and its capital 'Charlotte Amalie' it's flag is 'https://flagcdn.com/vi.svg' 
    }

}

xhr.send();


//output

//output for this..

// (50) ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei Darussalam', 'Cambodia', 'China', 'Georgia', 'Hong Kong', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', "Lao People's Democratic Republic", 'Lebanon', 'Macao', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', "Korea (Democratic People's Republic of)", 'Oman', 'Pakistan', 'Palestine, State of', 'Philippines', 'Qatar', 'Saudi Arabia', 'Singapore', 'Korea (Republic of)', 'Sri Lanka', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen']

//output for forEach data

// Country name is 'Barbados' and its capital 'Bridgetown' it's flag is 'https://flagcdn.com/bb.svg' 
// script.js:74 Country name is 'British Indian Ocean Territory' and its capital 'Diego Garcia' it's flag is 'https://flagcdn.com/io.svg' 
// script.js:74 Country name is 'Republic of the Congo' and its capital 'Brazzaville' it's flag is 'https://flagcdn.com/cg.svg' 
// script.js:74 Country name is 'Brazil' and its capital 'Brasília' it's flag is 'https://flagcdn.com/br.svg' 
// script.js:74 Country name is 'Luxembourg' and its capital 'Luxembourg' it's flag is 'https://flagcdn.com/lu.svg' 
// script.js:74 Country name is 'United States Virgin Islands' and its capital 'Charlotte Amalie' it's flag is 'https://flagcdn.com/vi.svg' 


