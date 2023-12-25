type Schedule = {
    startDate: string;
    endDate: string;
    classDays: string[];
    classTime: string;
}

type PostData = {
    name: string;
    description: string;
    price: string;
    duration: string;
    level: string;
    topics: string[];
    schedule: Schedule;
}

export type { Schedule, PostData }