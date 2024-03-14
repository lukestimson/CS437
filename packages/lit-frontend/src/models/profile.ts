// src/models/profile.ts
export interface Profile {
    userid: string;
    name: string;
    bio?: string;
    favoriteDestination?: {
        name: string;
        imageUrl: string;
    };
}
