export const baseUrl = 'https://ijtgix58jg.execute-api.ap-south-1.amazonaws.com/v1/';
export const mapsUrl = 'http://www.google.com/maps/place/';

// tslint:disable-next-line: max-line-length
export const homeSvg = '<svg height="496pt" viewBox="-56 0 496 496" width="496pt" xmlns="http://www.w3.org/2000/svg"><path d="m192 496c-7.496094 0-14.679688-3.558594-19.207031-9.535156l-133.761719-176.3125c-25.175781-33.191406-39.03125-74.398438-39.03125-116.046875v-2.105469c0-105.863281 86.136719-192 192-192s192 86.136719 192 192v2.105469c0 41.648437-13.855469 82.855469-39.03125 116.046875l-133.761719 176.3125c-4.527343 5.976562-11.710937 9.535156-19.207031 9.535156zm0 0" fill="#f0bc5e"/><path d="m192 48c-79.398438 0-144 64.601562-144 144s64.601562 144 144 144 144-64.601562 144-144-64.601562-144-144-144zm0 272c-70.574219 0-128-57.425781-128-128s57.425781-128 128-128 128 57.425781 128 128-57.425781 128-128 128zm0 0"/><path d="m192 94.167969-116.648438 83.320312 9.296876 13.023438 27.351562-19.535157v101.023438h160v-101.023438l27.351562 19.535157 9.296876-13.023438zm16 161.832031h-32v-48h32zm48 0h-32v-64h-64v64h-32v-96.457031l64-45.710938 64 45.710938zm0 0"/><path d="m184 384h16v16h-16zm0 0"/><path d="m216 384h16v16h-16zm0 0"/><path d="m152 384h16v16h-16zm0 0"/></svg>';

// tslint:disable-next-line: max-line-length
export const marker = '<svg height="464pt" viewBox="-96 0 464 464" width="464pt" xmlns="http://www.w3.org/2000/svg"><path d="m272 428c0-19.882812-60.890625-36-136-36s-136 16.117188-136 36 60.890625 36 136 36 136-16.117188 136-36zm0 0" fill="#adabac"/><path d="m120 160h32v256c0 8.835938-7.164062 16-16 16s-16-7.164062-16-16zm0 0" fill="#494342"/><path d="m232 96c0 53.019531-42.980469 96-96 96s-96-42.980469-96-96 42.980469-96 96-96 96 42.980469 96 96zm0 0" fill="#ad2943"/><path d="m200 96c0 35.347656-28.652344 64-64 64s-64-28.652344-64-64 28.652344-64 64-64 64 28.652344 64 64zm0 0" fill="#ee3446"/></svg>';

export const textLocalApi = 'N8tjPwSq1jg-VuiV54IImcF9U5KPKcIyuy2wUhSc0V';
export const defaultNum = '916366936633,8054520423';
export const senderId = 'TXTLCL';
export const textLocalUrl = 'https://api.textlocal.in/send/?';

export interface BuildingObject {
    furnishing_amenities: any;
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
    reqCallback: string;
    query: string;
}

export interface PostObject {
    preferences: Preferences;
    building: Building;
    contact_details: Contact;
}
