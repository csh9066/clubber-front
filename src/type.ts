export interface Club {
    id: number;
    name: string;
    description: string;
    thumbnailImage: Image;
    // members: ClubMember[];
}

export interface ClubMember {
    id: number
    isHost: boolean
    status: 'PENDING' | 'ACTIVE'
    image: Image;
}

export interface Image {
    name: string
    path: string
}
