
import { PortableTextBlock } from "sanity";
// resourceContent Types

export interface PopularBook {
    book_title: string;
    book_author: string;
    book_image: any
    book_url: string;
}

interface Resources {
    _id: string;
    title: string;
    popular_books: PopularBook[];
}

export interface Course {
    course_title: string;
    introduction: string;
    resources: Resources[];
}
//   what is being used 
export interface Resource {
    _id: string;
    name: string;
    slug: string
    courses: {
        course_title: string;
        introduction: string;
        resourceSlug: string
    }[];
}

// Blogs
export interface Post {
    _id: string;
    title: string;
    publishedAt: string;
    body: PortableTextBlock[];
    author: string;
    slug: string;
    description: string;
    mainImage: any;
    categories: [{title: string}];
  }
