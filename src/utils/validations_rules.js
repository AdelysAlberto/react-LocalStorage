const Validations = {
    name : { required: true, type: "string", message: 'Please enter Name!, Max 50 chars', max: 50},
    firstname : { required: true, message: 'Please enter Name!, Max 200 chars', max: 200},
    lastname : { required: true, message: 'Please enter last name!, Max 200 chars', max: 200},
    email : {  type: 'email', message: 'The input is not valid E-mail!'},
    email_required : {  required: true, message: 'Please input email, Max 50 chars', max: 100},
    description : { required: true, message: 'Please enter Description!, Max 1.000 chars', max: 1000},
    phone_50 : { required: true, message: 'Please enter phone number !, Max 50 chars', max: 50},
    phone_100 : {  required: true, message: 'Please enter phone number !, Max 100 chars', max: 100},
    specialties: { required: true, message: 'Please enter Specialties!, Max 500 chars', max: 500},
    direction: { required: true, message: 'Please enter Direction!, Max 200 chars', max: 200},
    schedule: { required: true, message: 'Please input schedule!' },
    required: { required: true, message: 'Please input data'},
};

export default Validations;
