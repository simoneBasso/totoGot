import { ResponseCharacter, ResponsePregnantQuestion, ResponseQuestion } from '../models/response_characters.model';
import { Types } from '../enum/types'
import { ResultsCharacter,ResultsQuestion } from '../models/results.model';
import { IfStmt } from '@angular/compiler';




export function calculateCharacter(
    userResponse: ResponseCharacter,
    correctResponse: ResponseCharacter): ResultsCharacter {

    var results: ResultsCharacter = {
        isAlive : undefined,
        isDead : undefined,
        isBecameNight : undefined,
        isKilledBy : undefined,
        points : 0
    };

    if(!correctResponse){
        console.log("NON ESISTE");
        console.log(userResponse);
        console.log(Types.Characters)
    }

    if (correctResponse.alive === undefined || userResponse.alive === undefined)
        return results;

    //ALIVE
    switch (isSame(userResponse.alive, correctResponse.alive)) {
        case Types.ResponseValues.CORRECT:
         results.points++;
         results.isAlive = true;
         results.isDead = false;
            break;
        case Types.ResponseValues.INCORRECT:
        results.isDead = true;
        results.isAlive = false;
            break;
        default:
    }


    if(userResponse.becameNight){
        if(correctResponse.becameNight === userResponse.becameNight){
            results.points++;
            results.isBecameNight = true;
        }
        else{
            results.points--;
        results.isBecameNight = false;
        }
    }


    if(userResponse.killedBy === undefined ) return results;
    
    
    switch (isSame(userResponse.killedBy, correctResponse.killedBy)) {
        case Types.ResponseValues.CORRECT:
         results.points += 4;
         results.isKilledBy = true;
            break;
        case Types.ResponseValues.INCORRECT:
        results.points--;
        results.isKilledBy = false;
            break;
        default:
    }

return results;
}

export function calculatePregnantQuestion(
    userResponse: ResponsePregnantQuestion,
    correctResponse: ResponsePregnantQuestion) : ResultsQuestion {

    var results: ResultsQuestion = {
        isCorrect : undefined,
        points:0
    };

    if (correctResponse.response === undefined)
        return results;

    if(isSame(userResponse.response,correctResponse.response) == Types.ResponseValues.CORRECT){
        results.isCorrect = true;
        results.points = 1;
    }
    else {
        results.isCorrect = false;
    }

    return results;

}

export function calculateQuestion(
    userResponse: ResponseQuestion,
    correctResponse: ResponseQuestion
    ) : ResultsQuestion {

    const winPoints = correctResponse.type == Types.Question.KillNightKing ?  7:8;

    var results: ResultsQuestion = {
        isCorrect : undefined,
        points:0
    };

    

    if (correctResponse.response === Types.Characters.UNDEFINED)
        return results;

    else if(userResponse.type == Types.Question.KingOfThrone){
        console.log(userResponse);
            if(userResponse.response == Types.Characters.DISTRUTTO_BY_DRAGO)
            return {
                isCorrect : true,
                points:12
            };
            if(userResponse.response == Types.Characters.DISTRUTTO)
            return {
                isCorrect : true,
                points:10
            };
            if(userResponse.response == Types.Characters.NOBODY)
            return {
                isCorrect : true,
                points:8
            };
            if(userResponse.response == Types.Characters.NESSUNO_TUTTILIBERI)
            return {
                isCorrect : true,
                points:2
            };
            if(userResponse.response == Types.Characters.BRAN_STRAK)
            return {
                isCorrect : true,
                points:8
            };
        };


    if(isSame(userResponse.response,correctResponse.response) == Types.ResponseValues.CORRECT){
        results.isCorrect = true;
        results.points = winPoints;
    }
    else {
        results.isCorrect = false;
    }

    return results;

}








function isSame(user, correct): Types.ResponseValues {
    if (user === undefined || user === null)
        return Types.ResponseValues.NOTRESPONSE

    return (user === correct) ? Types.ResponseValues.CORRECT : Types.ResponseValues.INCORRECT;

}