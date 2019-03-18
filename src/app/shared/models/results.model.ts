import { ResponseCharacter, ResponsePregnantQuestion, ResponseQuestion } from './response_characters.model';

export class ResultsCharacter
{
    isAlive?:boolean;
    isDead?:boolean;
    isBecameNight?:boolean;
    isKilledBy?: boolean
    points:number
    
}

export class ResultsQuestion
{
    isCorrect?:boolean;
    points:number 
}


export class ResultCharactherResponse{
    questionName:string;
    userResponse: ResponseCharacter;
    results: ResultsCharacter;
}

export class ResultPregnantQuestionResponse{
    questionName:string;
    userResponse: ResponsePregnantQuestion;
    results: ResultsQuestion;
}

export class ResultQuestionResponse{
    questionName:string;
    userResponse: ResponseQuestion;
    results: ResultsQuestion;
}

export class ResultCalculatedResponse{
    name:string;
    resultsCharactersQuestions:ResultCharactherResponse[];
    resultsPregantQuestions:ResultPregnantQuestionResponse[];
    resultsQuestions:ResultQuestionResponse[];
    totalPoints:number;
}
