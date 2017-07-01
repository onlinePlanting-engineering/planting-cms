export class ImgGroupUrl {
    constructor(public url: string){}
}

export class Img {
    constructor(public id: number, public img: string, public is_cover: boolean, 
    public group_id?: number, public is_delete?: boolean, public create_date?: string, public update_date?: string){}
}

export class ImgGroup {
    constructor(public id: number, public desc: string, public timestamp: string, public imgs: Img[]){}
}