export type TGitHubLink = string | null | {backend : string, frontend : string}
export type TypeProject = {
    title : string,
    technologys : string[],
    previewLink : string,
    gitHubLink : TGitHubLink,
    advantages : string[] | null,
    disAdvantages : string[] | null,
    ImageSrc : string,
    isCommerarce : boolean
}