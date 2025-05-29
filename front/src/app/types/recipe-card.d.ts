export type RecipeCard = {
    id: number;
    name: string;
    photoUrl: string;
    recipeUrl: string;
    note: number;
    noticeNumber: number;
    difficulty: DifficultyLevel;
    duration: string;
    cost: string;
}

export const DIFFICULTY_LEVEL = {
    VERY_EASY: "Très Facile",
    EASY: "Facile",
    MEDIUM: "Moyenne",
    HARD: "Difficile"
} as const;

export type DifficultyLevel = (typeof DIFFICULTY_LEVEL)[keyof typeof DIFFICULTY_LEVEL];
