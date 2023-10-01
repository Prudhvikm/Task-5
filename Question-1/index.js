// QUESTION NO.1 JSON iterate over all for loops (for, for in, for of, forEach)

// For Loop condition

let nameofstudent=[{"name":"Prudhvi", "Course":"FSD" , "Location":"Banglore"},

                 {"name":"Krishna", "Course":"Data Science", "Location":"Chennai"},

                 {"name":"Sai", "Course":"FSD", "Location":"Hyderabad"}]

                 for(let i=0;i< nameofstudent.length;i++)
{
    console.log( nameofstudent[i].name)
    console.log( nameofstudent[i].Course)
    console.log( nameofstudent[i].Location)
}

//For in Loop condition
{
let Details=[{"Graduation":"MBA", "department":"Marketing & production","year":"2015" },

            {"Graduation":"BE", "department":"Mechanical","year":"2013" }]
 
            for (let x in Details)
     {
   // console.log(x)
     }
    
     console.log(Details[0].Graduation,Details[0].department,Details[0].year)
    console.log(Details[1].Graduation,Details[1].department,Details[1].year)
}


//For of Loop condition   
 
let Model=[{"Brand":"BMW","Model":"500di", "price":"85L/Exshowroom"},
          
        {"Brand":"Mercedes","Model":"E400D", "price":"78L/Exshowroom"},
         
        {"Brand":"Audi","Model":"A6", "price":"68L/Exshowroom"},
         
        {"Brand":"Volvo","Model":"S90", "price":"70L/Exshowroom"}]

        for ( const Automobile of Model)
    {
        console.log(Automobile )
    }
   
//for for each condition
let studentDetails=[{"Name":"Prudhvi","Gender":"Male","location": "HYderabad"},
                    
                    {"Name":"Siri","Gender":"FeMale","location": "Bangalore"},
                   
                    {"Name":"Sai","Gender":"Male","location": "USA"}]

                    studentDetails.forEach(i=> 
    
                        console.log(i));