export interface Volunteer {
    id: number;
    name: string;
    bio: string;
    status: string;
    tags: string[];
    email?: string;
    phone?: string;
    location?: string;
    joined?: string;
}
