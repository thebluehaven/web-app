export const baseUrl = 'https://ijtgix58jg.execute-api.ap-south-1.amazonaws.com/v1/';

export interface BuildingObject {
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
