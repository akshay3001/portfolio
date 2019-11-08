export interface PersonalInfo {
    name: string;
    education: string;
    address: string;
    email: string;
}

export interface SocialMedia {
    twitter: string;
    linkedin: string;
    googleScholar: string;
    publons: string;
    facebook: string;
}

export interface AboutMe {
    title: string;
    description: string;
}

export interface Tabs {
    first: string;
    second: string;
    third: string;
    fourth: string;
}

export interface Research {
    title: string;
    imgLink: string;
    description: string;
}

export interface Link {
    name: string;
    url: string;
}

export interface Publication {
    title: string;
    link: Link;
    imgLink: string;
}

export interface Conference {
    title: string;
    imgLink: string;
}

export interface Project {
    title: string;
    description: string;
}

export interface UserInfo {
    personalInfo: PersonalInfo;
    socialMedia: SocialMedia;
    resumeLink: string;
    aboutMe: AboutMe;
    tabs: Tabs;
    research: Research[];
    publications: Publication[];
    conference: Conference[];
    projects: Project[];
}