export const baseUrl = 'https://ijtgix58jg.execute-api.ap-south-1.amazonaws.com/v1/';

export interface BuildingObject {
    building_id: any;
    basic_amenities: [];
    near_by: any;
    building_amenities: any;
    location_map: any;
    available: any;
    description: any;
    short_name: any;
    photos_link: any;
    name: string;
    room_type: any;
    price: any;
    location: string;
    deposit: any;
    video_link: string;
}

export interface Testimonial {
    name: string;
    testimonial: string;
    building_name: string;
    profession: string;
    company: string;
}

export interface Preferences {
    type: string;
    location: string;
    budget: string;
}

export interface Building {
    building_id: string;
    basic_amenities: [];
    furnishing_amenities: [];
}

export interface Contact {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    date: Date;
    time: string;
    query: string;
}

export interface PostObject {
    preferences: Preferences;
    building: Building;
    contact_details: Contact;
}
