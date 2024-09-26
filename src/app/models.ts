export interface Thumbnail {
  trending: {
    small: string;
    large: string;
  };
  regular: {
    small: string;
    medium: string;
    large: string;
  };
}

export interface MediaElement {
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export interface AppState {
  media: MediaElement[];
  trending: MediaElement[];
  tvShows: MediaElement[];
  bookmarked: MediaElement[];
  loading: boolean;
  error: string;
}
