
import { Types } from './shared/enum/types';
import { ResponseCharacter, ResponsePregnantQuestion, ResponseQuestion } from './shared/models/response_characters.model';
import { User } from './shared/models/user.model';
import _ from 'underscore';
import { GotMaps } from './shared/calculate/maps';

export function getListChar(){
    const res = [];
    const map = new GotMaps().charMap;
    const keys = Object.keys(Types.Characters).filter(k => typeof Types.Characters[k as any] === "number");
    var t =  keys.map(k => Types.Characters[k as any]);
    _.values(t).forEach(char => {
        if(char != 34)
        res.push({
            name:map.get(char),
            value:char
        })
    });
    return res;
}


export function getAnswers():User{
    return {
        name: "Answer",
        responseCharacters: [
            createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
            createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
            createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
            createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
            createCharResponse(Types.Characters.CERSEI_LANNISTER, true, undefined, undefined),
            createCharResponse(Types.Characters.JAIME_LANNISTER, true, undefined, undefined),
            createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
            createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
            createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
            createCharResponse(Types.Characters.THEON_GREYJOY, true, undefined, undefined),
            createCharResponse(Types.Characters.MELISANDRE, true, undefined, undefined),
            createCharResponse(Types.Characters.JORAH_MORMONT, true, undefined, undefined),
            createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
            createCharResponse(Types.Characters.LA_MONTAGNA, true, undefined, undefined),
            createCharResponse(Types.Characters.SAMWELL_TARLEY, true, undefined, undefined),
            createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
            createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
            createCharResponse(Types.Characters.LORD_VARYS, true, undefined, undefined),
            createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
            createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
            createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
            createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
            createCharResponse(Types.Characters.TORNMUND, true, undefined, undefined),
            createCharResponse(Types.Characters.VERME_GRIGIO, true, undefined, undefined),
            createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
            createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
            createCharResponse(Types.Characters.BERIC_DONDARRION, true, undefined, undefined),
            createCharResponse(Types.Characters.EURON_GREYJOY, true, undefined, undefined),
            createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
            createCharResponse(Types.Characters.QUIBURN, true, undefined, undefined),
            createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
            createCharResponse(Types.Characters.DROGONO, true, undefined, undefined),
            createCharResponse(Types.Characters.VISERION, true, undefined, undefined),
            createCharResponse(Types.Characters.RHAEGAL, true, undefined, undefined),
            createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
            createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
        ],
        responsePregnantQuestion: [
            createPregnantResponse(Types.Question.DarnerysPregnant, true),
            createPregnantResponse(Types.Question.CerseiPregnant, false)
        ],
        responseQuestion: [
            createQuestionResponse(Types.Question.KillNightKing, Types.Characters.DAARIO),
            createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.DAARIO),
        ]
    }
}


export function getAll(): User[] {
    const users = [];
    users.push(bassoRes);
    users.push(terryRes);
    users.push(pippoRes);

    return users;

}

function createCharResponse(char: Types.Characters, isAlive?: boolean, became?: boolean, killedBy?: Types.Characters): ResponseCharacter {
    return {
        name: char,
        alive: isAlive,
        becameNight: became,
        killedBy: killedBy
    }
}

function createQuestionResponse(type: Types.Question, response?: Types.Characters): ResponseQuestion {
    return {
        type: type,
        response: response
    }
}

function createPregnantResponse(type: Types.Question, response?: boolean): ResponsePregnantQuestion {
    return {
        type: type,
        response: response
    }
}

//userResponse

const bassoRes = 
    {
        name: "Basso",
        responseCharacters: [
            createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
            createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
            createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
            createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
            createCharResponse(Types.Characters.CERSEI_LANNISTER, true, undefined, undefined),
            createCharResponse(Types.Characters.JAIME_LANNISTER, true, undefined, undefined),
            createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
            createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
            createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
            createCharResponse(Types.Characters.THEON_GREYJOY, true, undefined, undefined),
            createCharResponse(Types.Characters.MELISANDRE, true, undefined, undefined),
            createCharResponse(Types.Characters.JORAH_MORMONT, true, undefined, undefined),
            createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
            createCharResponse(Types.Characters.LA_MONTAGNA, true, undefined, undefined),
            createCharResponse(Types.Characters.SAMWELL_TARLEY, true, undefined, undefined),
            createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
            createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
            createCharResponse(Types.Characters.LORD_VARYS, true, undefined, undefined),
            createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
            createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
            createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
            createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
            createCharResponse(Types.Characters.TORNMUND, true, undefined, undefined),
            createCharResponse(Types.Characters.VERME_GRIGIO, true, undefined, undefined),
            createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
            createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
            createCharResponse(Types.Characters.BERIC_DONDARRION, true, undefined, undefined),
            createCharResponse(Types.Characters.EURON_GREYJOY, true, undefined, undefined),
            createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
            createCharResponse(Types.Characters.QUIBURN, true, undefined, undefined),
            createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
            createCharResponse(Types.Characters.DROGONO, true, undefined, undefined),
            createCharResponse(Types.Characters.VISERION, true, undefined, undefined),
            createCharResponse(Types.Characters.RHAEGAL, true, undefined, undefined),
            createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
            createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
        ],
        responsePregnantQuestion: [
            createPregnantResponse(Types.Question.DarnerysPregnant, true),
            createPregnantResponse(Types.Question.CerseiPregnant, false)
        ],
        responseQuestion: [
            createQuestionResponse(Types.Question.KillNightKing, Types.Characters.DAARIO),
            createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.DAARIO),

        ]
}

const terryRes = 
    {
        name: "Terry",
        responseCharacters: [
            createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
            createCharResponse(Types.Characters.SANSA_STARK, false, undefined, undefined),
            createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
            createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
            createCharResponse(Types.Characters.CERSEI_LANNISTER, true, undefined, undefined),
            createCharResponse(Types.Characters.JAIME_LANNISTER, true, undefined, undefined),
            createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
            createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
            createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
            createCharResponse(Types.Characters.THEON_GREYJOY, true, undefined, undefined),
            createCharResponse(Types.Characters.MELISANDRE, false, true, undefined),
            createCharResponse(Types.Characters.JORAH_MORMONT, true, undefined, undefined),
            createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
            createCharResponse(Types.Characters.LA_MONTAGNA, true, undefined, undefined),
            createCharResponse(Types.Characters.SAMWELL_TARLEY, true, undefined, undefined),
            createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
            createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
            createCharResponse(Types.Characters.LORD_VARYS, true, undefined, undefined),
            createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, Types.Characters.CERSEI_LANNISTER),
            createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, true, undefined),
            createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
            createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
            createCharResponse(Types.Characters.TORNMUND, true, undefined, undefined),
            createCharResponse(Types.Characters.VERME_GRIGIO, true, undefined, undefined),
            createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
            createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
            createCharResponse(Types.Characters.BERIC_DONDARRION, true, undefined, undefined),
            createCharResponse(Types.Characters.EURON_GREYJOY, true, undefined, undefined),
            createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
            createCharResponse(Types.Characters.QUIBURN, true, undefined, undefined),
            createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
            createCharResponse(Types.Characters.DROGONO, true, undefined, undefined),
            createCharResponse(Types.Characters.VISERION, true, undefined, undefined),
            createCharResponse(Types.Characters.RHAEGAL, true, undefined, undefined),
            createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
            createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
        ],
        responsePregnantQuestion: [
            createPregnantResponse(Types.Question.DarnerysPregnant, true),
            createPregnantResponse(Types.Question.CerseiPregnant, false)
        ],
        responseQuestion: [
            createQuestionResponse(Types.Question.KillNightKing, Types.Characters.DAARIO),
            createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.DAARIO),

        ]
}

const pippoRes = 
    {
        name: "Pippo",
        responseCharacters: [
            createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
            createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
            createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
            createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
            createCharResponse(Types.Characters.CERSEI_LANNISTER, true, undefined, undefined),
            createCharResponse(Types.Characters.JAIME_LANNISTER, true, undefined, undefined),
            createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
            createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
            createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
            createCharResponse(Types.Characters.THEON_GREYJOY, true, undefined, undefined),
            createCharResponse(Types.Characters.MELISANDRE, true, undefined, undefined),
            createCharResponse(Types.Characters.JORAH_MORMONT, true, undefined, undefined),
            createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
            createCharResponse(Types.Characters.LA_MONTAGNA, true, undefined, undefined),
            createCharResponse(Types.Characters.SAMWELL_TARLEY, true, undefined, undefined),
            createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
            createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
            createCharResponse(Types.Characters.LORD_VARYS, true, undefined, undefined),
            createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
            createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
            createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
            createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
            createCharResponse(Types.Characters.TORNMUND, true, undefined, undefined),
            createCharResponse(Types.Characters.VERME_GRIGIO, true, undefined, undefined),
            createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
            createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
            createCharResponse(Types.Characters.BERIC_DONDARRION, true, undefined, undefined),
            createCharResponse(Types.Characters.EURON_GREYJOY, true, undefined, undefined),
            createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
            createCharResponse(Types.Characters.QUIBURN, true, undefined, undefined),
            createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
            createCharResponse(Types.Characters.DROGONO, true, undefined, undefined),
            createCharResponse(Types.Characters.VISERION, true, undefined, undefined),
            createCharResponse(Types.Characters.RHAEGAL, true, undefined, undefined),
            createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
            createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
        ],
        responsePregnantQuestion: [
            createPregnantResponse(Types.Question.DarnerysPregnant, false),
            createPregnantResponse(Types.Question.CerseiPregnant, true)
        ],
        responseQuestion: [
            createQuestionResponse(Types.Question.KillNightKing, Types.Characters.DAENERYS_TARGARYEN),
            createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.DAVOS_SEAWORTH),

        ]
}