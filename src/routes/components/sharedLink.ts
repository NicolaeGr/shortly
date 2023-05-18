 export default interface ShortenedLink {
    ok: boolean;
    result: {
      [key: string]: string;
    };
    [key: string]: any;
  }