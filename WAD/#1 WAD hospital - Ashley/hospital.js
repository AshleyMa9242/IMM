const hospital = {
    name: "Oakville Hospital",
    patients:[
        {
            id: "001",
            fullName: "John Smith",
            dateOfBirth: "Sep12 2000",
            symptoms: ["Fatigue", "Chills", "Headache"]
        },
        {
            id: "002",
            fullName: "Emily Smith",
            dateOfBirth: "Oct01 1990",
            symptoms: ["Fever", "Insomnia", "Dizziness"]
        },
        {
            id: "003",
            fullName: "Chloe Jones",
            dateOfBirth: "April20 1988",
            symptoms: ["Nausea", "pain", "Diarrhea"]
        }        
    ]
}

function showPatients(hospitalData){
    let result = "";
    result = result + "<h1>" + hospitalData.name + "</h1>"

    for(let i=0; i<hospitalData.patients.length; i++){
        let patient = hospitalData.patients[i]
        let name = patient.fullName;
        let dateOfBirth = patient.dateOfBirth;

    result = result + "<h2>" + name + ", " + dateOfBirth + "</h2>"
    result = result + "<ul>"
    
        for(let p=0; p<patient.symptoms.length; p++){
            let symptom = patient.symptoms[p]
        
        result = result + "<li>" + symptom + "</li>"
        }
        result = result + "</ul>"
    }
    return result
}

console.log(showPatients(hospital))

function getPatient(patientArray){
    let randomPatients = random(patientArray)
    return randomPatients.id
} 

console.log(getPatient(hospital.patients))