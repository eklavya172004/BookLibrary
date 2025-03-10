interface Book{
    id:number;
    title:string;
    author:string;
    genre:string;
    rating:number;
    total_copies:number;
    available_copies:number;
    description:string;
    cover:string;
    color:string;
    video_url:string;
    summary:string;
    isLoanBooked?:boolean;
}