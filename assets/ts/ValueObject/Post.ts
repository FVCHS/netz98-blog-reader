class Post {
    private _id: number;
    private _title: string;
    private _link: string;
    private _author: string;
    private _categories: string[];
    private _pubDate: Date;
    private _description: string;
    private _content: string;

    constructor(
        id: number,
        title: string,
        link: string,
        author: string,
        pubDate: Date,
        categories: string[],
        description: string,
        content: string
    ) {
        this._id = id;
        this._title = title;
        this._link = link;
        this._author = author;
        this._pubDate = pubDate;
        this._categories = categories;
        this._description = description;
        this._content = content;
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get link(): string {
        return this._link;
    }

    get author(): string {
        return this._author;
    }

    get pubDate(): Date {
        return this._pubDate;
    }

    get categories(): string[] {
        return this._categories;
    }

    get description(): string {
        return this._description;
    }

    get content(): string {
        return this._content;
    }
}

export default Post;