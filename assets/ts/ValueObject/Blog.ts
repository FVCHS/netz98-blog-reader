import Post from "./Post";

class Blog {
    private _title: string;
    private _descripton: string;
    private _lastBuildDate: Date; // TODO
    private _posts: Post[];

    constructor(title: string, descripton: string, lastBuildDate: Date, posts: Post[]) {
        this._title = title;
        this._descripton = descripton;
        this._lastBuildDate = lastBuildDate;
        this._posts = posts;
    }

    get title(): string {
        return this._title;
    }

    get descripton(): string {
        return this._descripton;
    }

    get lastBuildDate(): Date {
        return this._lastBuildDate;
    }

    get posts(): Post[] {
        return this._posts;
    }
}

export default Blog;