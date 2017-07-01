import { ImgGroupUrl } from './image';

export class CommentUrl{
    constructor(public url: string){};
}

export class LandUrl {
    constructor(public url: string){}
}

export class Farm {
    constructor(
        public id: number, 
        public name: string, 
        public owner: string, 
        public price?: string,
        public subject?: string,
        public addr?: string,
        public homeUrl?: string,
        public notice?: string,
        public content?: string,
        public comments?: CommentUrl[],
        public lands?: LandUrl[],
        public img_group_urls?: ImgGroupUrl[],
    ){};
}