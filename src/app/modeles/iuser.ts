export interface Iuser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    additionalPhoneNumber?: string;
    address:{
        city: string;
        street: string;
        postCode: string;
    }
}
