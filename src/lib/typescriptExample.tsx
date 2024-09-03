

/**
 * Represents a link to external resources related to the project.
 */
type ProjectLink = {
    url: string;
    type: 'github' | 'live' | 'documentation' | 'presentation';
    label: string;
};

/**
 * Represents a milestone or significant event in the project's timeline.
 */
type ProjectMilestone = {
    date: Date;
    title: string;
    description: string;
};

type ProjectImage = {
    url: string;
    altText: string;
    caption?: string;
};

type ProjectTestimonial = {
    author: string;
    role: string;
    content: string;
    rating?: 1 | 2 | 3 | 4 | 5;
};

interface PortfolioProject {
    id: string;
    title: string;
    description: string;
    startDate: Date;
    endDate?: Date;
    isOngoing: boolean;
    links: ProjectLink[];
    milestones: ProjectMilestone[];
    images: ProjectImage[];
    testimonials: ProjectTestimonial[];
    teamSize?: number;
    role: string;
    keyAchievements: string[];
    challenges: string[];
    lessonsLearned: string[];
}

interface Portfolio {
    owner: {
        name: string;
        title: string;
        bio: string;
        contactInfo: {
            email: string;
            linkedin?: string;
            github?: string;
            website?: string;
        };
    };
    projects: PortfolioProject[];
    lastUpdated: Date;
}

export type { Portfolio, PortfolioProject, ProjectLink, ProjectMilestone, ProjectImage, ProjectTestimonial };