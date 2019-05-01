
import { Types } from './shared/enum/types';
import { ResponseCharacter, ResponsePregnantQuestion, ResponseQuestion } from './shared/models/response_characters.model';
import { User } from './shared/models/user.model';
import _ from 'underscore';
import { GotMaps } from './shared/calculate/maps';

//function

export function getListChar(){
    const res = [];
    const map = new GotMaps().charMap;
    const keys = Object.keys(Types.Characters).filter(k => typeof Types.Characters[k as any] === "number");
    var t =  keys.map(k => Types.Characters[k as any]);
    _.values(t).forEach(char => {
        if(char < 36)
        res.push({
            name:map.get(char),
            value:char
        })
    });
    return res;
}


export function getAnswers():User{
    return allAnswer[allAnswer.length - 1];
}

export function getNumberOfAnswers():number{
    return allAnswer.length;
}

export function getAnswersByPuntata(puntata:number):User{
    return allAnswer[puntata - 1];
}


export function getAll(): User[] {
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




const answer01 = {
    name: "01",
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
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, true, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, true, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, true, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, true, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, true, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
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
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.DAARIO),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.DAARIO),
    ],
    returnCharacters:[],
    responseCharactersBonus:[
        createCharResponse(Types.Characters.KARSI, undefined, undefined, undefined),
        createCharResponse(Types.Characters.EDDISON_TOLLET, true, undefined,undefined),
        createCharResponse(Types.Characters.LYANNA_MORMONT, true, undefined,undefined),
        createCharResponse(Types.Characters.ELLARIA_SAND, undefined, undefined, undefined),
        createCharResponse(Types.Characters.MEERA_REED, undefined, undefined, undefined),
        createCharResponse(Types.Characters.RE_DELLA_NOTTE, true, undefined, undefined),
        createCharResponse(Types.Characters.HARRY_STRICKLAND, true, undefined, undefined),
        createCharResponse(Types.Characters.FRITTELLA, undefined, undefined,undefined),
        createCharResponse(Types.Characters.ROBIN_ARRYN, undefined, undefined, undefined),
        createCharResponse(Types.Characters.ILYN_PAYNE, undefined, undefined, undefined)

    ]
};
const answer02 = {
    name: "02",
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
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, true, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, true, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, true, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, true, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, true, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
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
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.DAARIO),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.DAARIO),
    ],
    returnCharacters:[],
    responseCharactersBonus:[
        createCharResponse(Types.Characters.KARSI, undefined, undefined, undefined),
        createCharResponse(Types.Characters.EDDISON_TOLLET, true, undefined,undefined),
        createCharResponse(Types.Characters.LYANNA_MORMONT, true, undefined,undefined),
        createCharResponse(Types.Characters.ELLARIA_SAND, undefined, undefined, undefined),
        createCharResponse(Types.Characters.MEERA_REED, undefined, undefined, undefined),
        createCharResponse(Types.Characters.RE_DELLA_NOTTE, true, undefined, undefined),
        createCharResponse(Types.Characters.HARRY_STRICKLAND, true, undefined, undefined),
        createCharResponse(Types.Characters.FRITTELLA, undefined, undefined,undefined),
        createCharResponse(Types.Characters.ROBIN_ARRYN, undefined, undefined, undefined),
        createCharResponse(Types.Characters.ILYN_PAYNE, undefined, undefined, undefined)

    ]
}

const answer03 = {
    name: "03",
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
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, Types.Characters.RE_DELLA_NOTTE),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, Types.Characters.SUICIDIO),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, true, undefined, undefined),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, true, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, true, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, true, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.EURON_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, true, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, Types.Characters.SE_RE_DELLA_NOTTE),
        createCharResponse(Types.Characters.RHAEGAL, true, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, false),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.ARYA_STARK),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.DAARIO),
    ],
    returnCharacters:[],
    responseCharactersBonus:[
        createCharResponse(Types.Characters.KARSI, undefined, undefined, undefined),
        createCharResponse(Types.Characters.EDDISON_TOLLET, false, true,Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.LYANNA_MORMONT, false, true,Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.ELLARIA_SAND, undefined, undefined, undefined),
        createCharResponse(Types.Characters.MEERA_REED, undefined, undefined, undefined),
        createCharResponse(Types.Characters.RE_DELLA_NOTTE, true, undefined, undefined),
        createCharResponse(Types.Characters.HARRY_STRICKLAND, true, undefined, undefined),
        createCharResponse(Types.Characters.FRITTELLA, undefined, undefined,undefined),
        createCharResponse(Types.Characters.ROBIN_ARRYN, undefined, undefined, undefined),
        createCharResponse(Types.Characters.ILYN_PAYNE, undefined, undefined, undefined)

    ]
}

const allAnswer = [answer01,answer02,answer03]

//userResponse

const basso = 
    {
        name: "Basso",
        responseCharacters: [
            createCharResponse(Types.Characters.JON_SNOW, false, undefined, undefined),
            createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
            createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
            createCharResponse(Types.Characters.BRAN_STRAK, false, undefined,  Types.Characters.RE_DELLA_NOTTE),
            createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined,  Types.Characters.ARYA_STARK),
            createCharResponse(Types.Characters.JAIME_LANNISTER, true, undefined, undefined),
            createCharResponse(Types.Characters.TYRION_LANNISTER, false, undefined,  Types.Characters.DROGON),
            createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, undefined, Types.Characters.PARTO),
            createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
            createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined,  Types.Characters.EURON_GREYJOY),
            createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
            createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
            createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
            createCharResponse(Types.Characters.LA_MONTAGNA, false, true,  Types.Characters.IL_MASTINO),
            createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
            createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
            createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
            createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
            createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined,  Types.Characters.ESERCITO_LANNISTER),
            createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
            createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
            createCharResponse(Types.Characters.PODRICK_PAYNE, false, undefined,  Types.Characters.ESTRANEI),
            createCharResponse(Types.Characters.TORMUND, true, undefined, undefined),
            createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined,  Types.Characters.ESTRANEI),
            createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
            createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
            createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined,  Types.Characters.RE_DELLA_NOTTE),
            createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined,  Types.Characters.YARA_GREYJOY),
            createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
            createCharResponse(Types.Characters.QUIBURN, false, undefined,  Types.Characters.LA_MONTAGNA),
            createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
            createCharResponse(Types.Characters.DROGON, false, undefined, undefined),
            createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
            createCharResponse(Types.Characters.RHAEGAL, true, undefined, undefined),
            createCharResponse(Types.Characters.GHOST, false, undefined,  Types.Characters.ESTRANEI),
            createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
        ],
        responsePregnantQuestion: [
            createPregnantResponse(Types.Question.DarnerysPregnant, true),
            createPregnantResponse(Types.Question.CerseiPregnant, false)
        ],
        responseQuestion: [
            createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JON_SNOW),
            createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.FIGLIO_DI_JON_AND_DAENERYS),

        ],
        responseCharactersBonus:[
            createCharResponse(Types.Characters.ROBIN_ARRYN, true, undefined, undefined),
            createCharResponse(Types.Characters.LYANNA_MORMONT, true, undefined,undefined)
        ],
        returnCharacters:[ Types.Characters.LORD_BAELISH,  Types.Characters.KHAL_DROGO]
}

const pilla = 
    {
        name: "Pilla",
        responseCharacters: [
            createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
            createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
            createCharResponse(Types.Characters.ARYA_STARK, false, undefined, Types.Characters.LA_MONTAGNA),
            createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
            createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.JAIME_LANNISTER),
            createCharResponse(Types.Characters.JAIME_LANNISTER, true, undefined, undefined),
            createCharResponse(Types.Characters.TYRION_LANNISTER, false, undefined, undefined),
            createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, undefined, undefined),
            createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, undefined),
            createCharResponse(Types.Characters.THEON_GREYJOY, true, undefined, undefined),
            createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
            createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
            createCharResponse(Types.Characters.IL_MASTINO, false, undefined, undefined),
            createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, undefined),
            createCharResponse(Types.Characters.SAMWELL_TARLY, false, undefined, undefined),
            createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
            createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
            createCharResponse(Types.Characters.LORD_VARYS, true, undefined, undefined),
            createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
            createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
            createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
            createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
            createCharResponse(Types.Characters.TORMUND, false, true, Types.Characters.RE_DELLA_NOTTE),
            createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
            createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
            createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
            createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
            createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, undefined),
            createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
            createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
            createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
            createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
            createCharResponse(Types.Characters.VISERION, false, undefined, Types.Characters.DROGON),
            createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
            createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
            createCharResponse(Types.Characters.NYMERIA, false, undefined, undefined)
        ],
        responsePregnantQuestion: [
            createPregnantResponse(Types.Question.DarnerysPregnant, true),
            createPregnantResponse(Types.Question.CerseiPregnant, false)
        ],
        responseQuestion: [
            createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JAIME_LANNISTER),
            createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.SANSA_STARK),

        ],
        returnCharacters:[],
        responseCharactersBonus:[]
}

const gin = 
    {
        name: "Gin",
        responseCharacters: [
            createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
            createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
            createCharResponse(Types.Characters.ARYA_STARK, false, undefined, undefined),
            createCharResponse(Types.Characters.BRAN_STRAK, false, undefined, undefined),
            createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.JAIME_LANNISTER),
            createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, undefined),
            createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
            createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, undefined, undefined),
            createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
            createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, Types.Characters.EURON_GREYJOY),
            createCharResponse(Types.Characters.MELISANDRE, true, undefined, undefined),
            createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
            createCharResponse(Types.Characters.IL_MASTINO, false, undefined, undefined),
            createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, undefined),
            createCharResponse(Types.Characters.SAMWELL_TARLY, false, undefined, undefined),
            createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
            createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
            createCharResponse(Types.Characters.LORD_VARYS, true, undefined, undefined),
            createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, undefined),
            createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
            createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
            createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
            createCharResponse(Types.Characters.TORMUND, true, undefined, undefined),
            createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
            createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
            createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
            createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
            createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, undefined),
            createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
            createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
            createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
            createCharResponse(Types.Characters.DROGON, false, undefined, undefined),
            createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
            createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
            createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
            createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
        ],
        responsePregnantQuestion: [
            createPregnantResponse(Types.Question.DarnerysPregnant, true),
            createPregnantResponse(Types.Question.CerseiPregnant, false)
        ],
        responseQuestion: [
            createQuestionResponse(Types.Question.KillNightKing, Types.Characters.BRAN_STRAK),
            createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.JON_SNOW),

        ],
        returnCharacters:[],
        responseCharactersBonus:[]
}

const bucca = 
    {
        name: "Bucca",
        responseCharacters: [
            createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
            createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
            createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
            createCharResponse(Types.Characters.BRAN_STRAK, false, undefined, Types.Characters.RE_DELLA_NOTTE),
            createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.JAIME_LANNISTER),
            createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, undefined),
            createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
            createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, undefined, undefined),
            createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
            createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, Types.Characters.EURON_GREYJOY),
            createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
            createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
            createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
            createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.MASTINO_AND_ARYA),
            createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
            createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
            createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
            createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
            createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, Types.Characters.ESTRANEI),
            createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
            createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
            createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
            createCharResponse(Types.Characters.TORMUND, true, undefined, undefined),
            createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
            createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
            createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
            createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, Types.Characters.ESTRANEI),
            createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, Types.Characters.YARA_GREYJOY),
            createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
            createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
            createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
            createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
            createCharResponse(Types.Characters.VISERION, false, undefined, Types.Characters.DAENERYS_TARGARYEN),
            createCharResponse(Types.Characters.RHAEGAL, true, undefined, undefined),
            createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
            createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
        ],
        responsePregnantQuestion: [
            createPregnantResponse(Types.Question.DarnerysPregnant, true),
            createPregnantResponse(Types.Question.CerseiPregnant, false)
        ],
        responseQuestion: [
            createQuestionResponse(Types.Question.KillNightKing, Types.Characters.BRAN_STRAK),
            createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.DISTRUTTO),

        ],
        returnCharacters:[Types.Characters.STANNIS_BARATHEON,Types.Characters.LORD_BAELISH],
        responseCharactersBonus:[]
}

const capo = 
    {
        name: "Capo",
        responseCharacters: [
            createCharResponse(Types.Characters.JON_SNOW, false, undefined, undefined),
            createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
            createCharResponse(Types.Characters.ARYA_STARK, false, undefined, undefined),
            createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
            createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.JAIME_LANNISTER),
            createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, undefined),
            createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
            createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, undefined, undefined),
            createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, undefined),
            createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, undefined),
            createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
            createCharResponse(Types.Characters.JORAH_MORMONT, false, true, undefined),
            createCharResponse(Types.Characters.IL_MASTINO, false, undefined, undefined),
            createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, undefined),
            createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
            createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
            createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
            createCharResponse(Types.Characters.LORD_VARYS, false, undefined, Types.Characters.TYRION_LANNISTER),
            createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, Types.Characters.LA_MONTAGNA),
            createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, Types.Characters.ESTRANEI),
            createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
            createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
            createCharResponse(Types.Characters.TORMUND, false, true, Types.Characters.ESTRANEI),
            createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
            createCharResponse(Types.Characters.GENDRY, false, undefined, undefined),
            createCharResponse(Types.Characters.MISSANDEI, false, undefined, undefined),
            createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
            createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, Types.Characters.THEON_GREYJOY),
            createCharResponse(Types.Characters.JAQUEN_H_GHAR, false, undefined, Types.Characters.ARYA_STARK),
            createCharResponse(Types.Characters.QUIBURN, false, undefined, Types.Characters.TYRION_LANNISTER),
            createCharResponse(Types.Characters.DAARIO, false, undefined, Types.Characters.JORAH_MORMONT),
            createCharResponse(Types.Characters.DROGON, false, undefined, undefined),
            createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
            createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
            createCharResponse(Types.Characters.GHOST, false, undefined, Types.Characters.ESTRANEI),
            createCharResponse(Types.Characters.NYMERIA, false, undefined, undefined)
        ],
        responsePregnantQuestion: [
            createPregnantResponse(Types.Question.DarnerysPregnant, true),
            createPregnantResponse(Types.Question.CerseiPregnant, false)
        ],
        responseQuestion: [
            createQuestionResponse(Types.Question.KillNightKing, Types.Characters.BRAN_STRAK),
            createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.SANSA_AND_TYRION),

        ],
        returnCharacters:[],
        responseCharactersBonus:[]
}

const robbi = 
    {
        name: "Robbi",
        responseCharacters: [
            createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
            createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
            createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
            createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
            createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.ARYA_STARK),
            createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, Types.Characters.ARYA_STARK),
            createCharResponse(Types.Characters.TYRION_LANNISTER, false, undefined, Types.Characters.JON_SNOW),
            createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
            createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
            createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, Types.Characters.EURON_GREYJOY),
            createCharResponse(Types.Characters.MELISANDRE, false, undefined, Types.Characters.ESTRANEI),
            createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, Types.Characters.ESERCITO_LANNISTER),
            createCharResponse(Types.Characters.IL_MASTINO, false, true, Types.Characters.ESTRANEI),
            createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.ARYA_STARK),
            createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
            createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
            createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
            createCharResponse(Types.Characters.LORD_VARYS, true, undefined, undefined),
            createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, Types.Characters.ESERCITO_LANNISTER),
            createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
            createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
            createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
            createCharResponse(Types.Characters.TORMUND, true, true, undefined),
            createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, Types.Characters.RE_DELLA_NOTTE),
            createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
            createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
            createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, Types.Characters.ESTRANEI),
            createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, Types.Characters.YARA_GREYJOY),
            createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
            createCharResponse(Types.Characters.QUIBURN, false, undefined, Types.Characters.ARYA_STARK),
            createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
            createCharResponse(Types.Characters.DROGON, false, undefined, undefined),
            createCharResponse(Types.Characters.VISERION, false, undefined, Types.Characters.DROGON),
            createCharResponse(Types.Characters.RHAEGAL, false, true, Types.Characters.RE_DELLA_NOTTE),
            createCharResponse(Types.Characters.GHOST, false, true, Types.Characters.ESTRANEI),
            createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
        ],
        responsePregnantQuestion: [
            createPregnantResponse(Types.Question.DarnerysPregnant, true),
            createPregnantResponse(Types.Question.CerseiPregnant, true)
        ],
        responseQuestion: [
            createQuestionResponse(Types.Question.KillNightKing, Types.Characters.NOBODY),
            createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.NOBODY),

        ],
        returnCharacters:[],
        responseCharactersBonus:[]
}

const terry = 
    {
        name: "Terry",
        responseCharacters: [
            createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
            createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
            createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
            createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
            createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.ARYA_STARK),
            createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, Types.Characters.ESTRANEI),
            createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
            createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
            createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, undefined),
            createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, undefined),
            createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
            createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
            createCharResponse(Types.Characters.IL_MASTINO, false, undefined, undefined),
            createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.ARYA_STARK),
            createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
            createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
            createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
            createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
            createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, undefined),
            createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
            createCharResponse(Types.Characters.BRONN, false, undefined, undefined),
            createCharResponse(Types.Characters.PODRICK_PAYNE, false, undefined, undefined),
            createCharResponse(Types.Characters.TORMUND, false, undefined, Types.Characters.ESTRANEI),
            createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
            createCharResponse(Types.Characters.GENDRY, false, undefined, undefined),
            createCharResponse(Types.Characters.MISSANDEI, false, undefined, undefined),
            createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, Types.Characters.ESTRANEI),
            createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, undefined),
            createCharResponse(Types.Characters.JAQUEN_H_GHAR, false, undefined, undefined),
            createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
            createCharResponse(Types.Characters.DAARIO, false, undefined, undefined),
            createCharResponse(Types.Characters.DROGON, false, undefined, undefined),
            createCharResponse(Types.Characters.VISERION, false, undefined, Types.Characters.DAENERYS_TARGARYEN),
            createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
            createCharResponse(Types.Characters.GHOST, false, undefined, undefined),
            createCharResponse(Types.Characters.NYMERIA, false, undefined, undefined)
            
        ],
        responsePregnantQuestion: [
            createPregnantResponse(Types.Question.DarnerysPregnant, false),
            createPregnantResponse(Types.Question.CerseiPregnant, false)
        ],
        responseQuestion: [
            createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JON_SNOW),
            createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.JON_SNOW),

        ],
        returnCharacters:[
            Types.Characters.LORD_BAELISH,
            Types.Characters.BENJEN_STARK
        ],
        responseCharactersBonus:[
            createCharResponse(Types.Characters.KARSI, false, undefined, undefined),
            createCharResponse(Types.Characters.EDDISON_TOLLET, false, undefined,Types.Characters.ESTRANEI)
        ]
}

const clodo = {
    name: "Clodo",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, false, undefined, Types.Characters.RE_DELLA_NOTTE),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.TYRION_LANNISTER),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, Types.Characters.DAVOS_SEAWORTH),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.IL_MASTINO),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, true, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, false, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, Types.Characters.RE_DELLA_NOTTE),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, false, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, true, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, Types.Characters.VISERION),
        createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.NOBODY),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.RE_DELLA_NOTTE),
    ],
    returnCharacters:[],
    responseCharactersBonus:[
        createCharResponse(Types.Characters.LYANNA_MORMONT, true, undefined, undefined)
    ]
}

const dino =  {
    name: "Dino",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, false, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, true, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, false, true, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, undefined),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, true, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, false, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, true, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, false, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, false)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JON_SNOW),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.NOBODY),
    ],
    returnCharacters:[],
    responseCharactersBonus:[]
}

const lollo = {
    name: "Lollo",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, false, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, false, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.JON_SNOW),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined,  Types.Characters.CERSEI_LANNISTER),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined,  Types.Characters.EURON_GREYJOY),
        createCharResponse(Types.Characters.THEON_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, true,  Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.IL_MASTINO, false, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, true,  Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, false, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, true, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined,  Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined,  Types.Characters.MELISANDRE),
        createCharResponse(Types.Characters.BRONN, false, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, undefined,  Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, true,  Types.Characters.THEON_GREYJOY),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, false, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, false, undefined,  Types.Characters.VISERION),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, true, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, false, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.BRAN_STRAK),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.DISTRUTTO),
    ],
    returnCharacters:[Types.Characters.KHAL_DROGO],
    responseCharactersBonus:[]
}

const ludo = {
    name: "Ludo",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, false, undefined, Types.Characters.RE_DELLA_NOTTE),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, false, undefined, Types.Characters.RE_DELLA_NOTTE),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.TYRION_LANNISTER),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, Types.Characters.CERSEI_LANNISTER),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, Types.Characters.DAVOS_SEAWORTH),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, true, Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, true, Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, false, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, true, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, Types.Characters.THEON_GREYJOY),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.DAARIO, false, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, false, undefined, Types.Characters.VISERION),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, true, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, false)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.BRAN_STRAK),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.DISTRUTTO),
    ],
    returnCharacters:[Types.Characters.KHAL_DROGO],
    responseCharactersBonus:[
        createCharResponse(Types.Characters.ELLARIA_SAND, false, undefined, Types.Characters.LA_MONTAGNA),
        createCharResponse(Types.Characters.RE_DELLA_NOTTE, false, undefined, Types.Characters.BRAN_STRAK)
    ]
}


const marco = {
    name: "Marco",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.SANSA_STARK),
        createCharResponse(Types.Characters.JAIME_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, undefined),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, false, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, false, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JON_SNOW),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.SANSA_STARK),
    ],
    returnCharacters:[],
    responseCharactersBonus:[]
}

const lucia = {
    name: "Lucia",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, false, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, false, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, false, true, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.JAIME_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, true, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.IL_MASTINO),
        createCharResponse(Types.Characters.SAMWELL_TARLY, false, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, false, true, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, false, true, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, false, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, true, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, true, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, false, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, false, true, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, true, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.RHAEGAL),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.JON_SNOW),
    ],
    returnCharacters:[Types.Characters.KHAL_DROGO],
    responseCharactersBonus:[]
}

const martina = {
    name: "Marti",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.JAIME_LANNISTER),
        createCharResponse(Types.Characters.JAIME_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.IL_MASTINO),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, false, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, false, true, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, false, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, true, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, true, undefined),
        createCharResponse(Types.Characters.DAARIO, false, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JAIME_LANNISTER),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.TYRION_LANNISTER),
    ],
    returnCharacters:[Types.Characters.KHAL_DROGO],
    responseCharactersBonus:[]
}

const marche = {
    name: "Marche",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, false, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, false, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.IL_MASTINO),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, false, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, false, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, false, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, false, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, false, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, false, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JON_SNOW),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.NOBODY),
    ],
    returnCharacters:[],
    responseCharactersBonus:[
        createCharResponse(Types.Characters.MEERA_REED, false, undefined, undefined),
        createCharResponse(Types.Characters.LYANNA_MORMONT, true, undefined,undefined)
    ]
}
const mela = {
    name: "Mela",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, false, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, false, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.SANSA_STARK),
        createCharResponse(Types.Characters.JAIME_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined,  Types.Characters.DAVOS_SEAWORTH),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined,  Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, false, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, false, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, false, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, true, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.BRAN_STRAK),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.NOBODY),
    ],
    returnCharacters:[ Types.Characters.RICKON],
    responseCharactersBonus:[]
}
const simo = {
    name: "Simo",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, false, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined,  Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.TYRION_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined,  Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.IL_MASTINO, false, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined,  Types.Characters.IL_MASTINO),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined,  Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.TORMUND, false, undefined,  Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, false, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined,  Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined,  Types.Characters.THEON_GREYJOY),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, false, undefined,  Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, false, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, Types.Characters.SE_RE_DELLA_NOTTE),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, false, undefined,  Types.Characters.ESTRANEI)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, false)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JON_SNOW),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.NOBODY),
    ],
    returnCharacters:[ Types.Characters.KHAL_DROGO,  Types.Characters.RAGNI_GHIACCIO],
    responseCharactersBonus:[
        createCharResponse(Types.Characters.HARRY_STRICKLAND, false, undefined, undefined),
        createCharResponse(Types.Characters.FRITTELLA, true, undefined,undefined)
    ]
}
const julius = {
    name: "Julius",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, false, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.JAIME_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, true, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, true, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, undefined),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, true, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, true, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, true, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, false, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, true, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, false)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JAIME_LANNISTER),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.JON_SNOW),
    ],
    returnCharacters:[ Types.Characters.VISERION],
    responseCharactersBonus:[]
}
const selmi = {
    name: "Selmi",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined,  Types.Characters.JAIME_LANNISTER),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined,  Types.Characters.CERSEI_LANNISTER),
        createCharResponse(Types.Characters.TYRION_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, false, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, undefined),
        createCharResponse(Types.Characters.SAMWELL_TARLY, false, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, true, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, false, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.BRIENNE_DI_TARTH),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.JON_SNOW),
    ],
    returnCharacters:[],
    responseCharactersBonus:[]
}
const nicolo = {
    name: "Nicolo",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, false, true, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, false, undefined,  Types.Characters.CERSEI_LANNISTER),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined,  Types.Characters.JAIME_LANNISTER),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined,  Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, true, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, true, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, true, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, false, undefined,  Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, undefined),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, true, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, true, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, true, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined,  Types.Characters.THEON_GREYJOY),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, false, true, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined,  Types.Characters.RHAEGAL),
        createCharResponse(Types.Characters.RHAEGAL, false, true, undefined),
        createCharResponse(Types.Characters.GHOST, false, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, false)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.BRAN_STRAK),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.TYRION_LANNISTER),
    ],
    returnCharacters:[ Types.Characters.CATELYN_TULLY],
    responseCharactersBonus:[]
}
const cape = {
    name: "Cape",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, false, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, false, undefined,  Types.Characters.RE_DELLA_NOTTE),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined,  Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.JAIME_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, true, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, undefined),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, false, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined,  Types.Characters.RE_DELLA_NOTTE),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, false, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, false, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, true, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, true, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, true, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, undefined,  Types.Characters.VISERION),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, false),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JAIME_LANNISTER),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.SANSA_STARK),
    ],
    returnCharacters:[],
    responseCharactersBonus:[
        createCharResponse(Types.Characters.HARRY_STRICKLAND, false, undefined, undefined),
        createCharResponse(Types.Characters.LYANNA_MORMONT, true, undefined,undefined)
    ]
}
const sangio = {
    name: "Sangio",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, false, undefined, Types.Characters.CERSEI_LANNISTER),
        createCharResponse(Types.Characters.SANSA_STARK, false, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.JAIME_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, false, undefined, Types.Characters.CERSEI_LANNISTER),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, false, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.IL_MASTINO),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, true, Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, Types.Characters.THEON_GREYJOY),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, false, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, false, undefined, Types.Characters.VISERION),
        createCharResponse(Types.Characters.VISERION, false, undefined, Types.Characters.DROGON),
        createCharResponse(Types.Characters.RHAEGAL, true, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JON_SNOW),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.DAENERYS_TARGARYEN),
    ],
    returnCharacters:[],
    responseCharactersBonus:[]
}
const piero = {
    name: "Piero",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, Types.Characters.LA_MONTAGNA),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, undefined, Types.Characters.PARTO),
        createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, Types.Characters.EURON_GREYJOY),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, false, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.BRIENNE_DI_TARTH),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, true, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, false, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, Types.Characters.YARA_GREYJOY),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, false, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, false)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JON_SNOW),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.JON_SNOW),
    ],
    returnCharacters:[Types.Characters.CATELYN_TULLY,Types.Characters.BENJEN_STARK],
    responseCharactersBonus:[]
}
const martello = {
    name: "Liuc",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, false, undefined, Types.Characters.CERSEI_LANNISTER),
        createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, true, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, false, undefined, Types.Characters.LA_MONTAGNA),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.IL_MASTINO),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, true, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, Types.Characters.CERSEI_LANNISTER),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, true, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, true, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, true, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, false, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, true, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, true, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, false, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, true, undefined),
        createCharResponse(Types.Characters.NYMERIA, false, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, false)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.BRAN_STRAK),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.NOBODY),
    ],
    returnCharacters:[],
    responseCharactersBonus:[]
}
const jack = {
    name: "Jack",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, false, true, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, undefined),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, false, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, true, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, false, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, Types.Characters.THEON_GREYJOY),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, false, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, false, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, false, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JON_SNOW),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.DAENERYS_TARGARYEN),
    ],
    returnCharacters:[],
    responseCharactersBonus:[]
}
const francesca = {
    name: "Francesca",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, false, true, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.JAIME_LANNISTER),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, Types.Characters.SANSA_STARK),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, false, true, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, undefined),
        createCharResponse(Types.Characters.SAMWELL_TARLY, false, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, true, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, false, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, true, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, false, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, Types.Characters.THEON_GREYJOY),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, Types.Characters.LA_MONTAGNA),
        createCharResponse(Types.Characters.DAARIO, false, true, undefined),
        createCharResponse(Types.Characters.DROGON, false, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, false, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, false),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.DAENERYS_TARGARYEN),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.DAENERYS_TARGARYEN),
    ],
    returnCharacters:[],
    responseCharactersBonus:[]
}
const berto = {
    name: "Berto",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, true, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, false, undefined, Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, false, true, Types.Characters.RE_DELLA_NOTTE),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.JAIME_LANNISTER),
        createCharResponse(Types.Characters.JAIME_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, true, Types.Characters.JON_SNOW),
        createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, Types.Characters.EURON_GREYJOY),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, false, undefined, Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, true, Types.Characters.IL_MASTINO),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, true, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, true, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, Types.Characters.THEON_GREYJOY),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, false, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, false, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, false)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.TYRION_LANNISTER),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.NOBODY),
    ],
    returnCharacters:[],
    responseCharactersBonus:[
        createCharResponse(Types.Characters.LYANNA_MORMONT, true, undefined,undefined),
        createCharResponse(Types.Characters.MEERA_REED, true, undefined, undefined)
    ]
}
const bore = {
    name: "Bore",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, false, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.RHAEGAL),
        createCharResponse(Types.Characters.JAIME_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, undefined, Types.Characters.CERSEI_LANNISTER),
        createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, Types.Characters.EURON_GREYJOY),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, true, Types.Characters.EURON_GREYJOY),
        createCharResponse(Types.Characters.MELISANDRE, true, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, Types.Characters.ESERCITO_LANNISTER),
        createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, Types.Characters.CERSEI_LANNISTER),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, true, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, true, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, false, true, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, Types.Characters.IL_MASTINO),
        createCharResponse(Types.Characters.EURON_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, true, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, false, true, undefined),
        createCharResponse(Types.Characters.DROGON, false, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, true, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, false)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.BRAN_STRAK),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.JON_SNOW),
    ],
    returnCharacters:[],
    responseCharactersBonus:[]
}
const feids = {
    name: "Feids",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, false, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.JAIME_LANNISTER),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, Types.Characters.BRONN),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, Types.Characters.JON_SNOW),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, true, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, false, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.IL_MASTINO),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, true, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, false, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, true, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, true, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, true, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, Types.Characters.THEON_GREYJOY),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, false, undefined, Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.QUIBURN, false, true, undefined),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, Types.Characters.VISERION),
        createCharResponse(Types.Characters.GHOST, false, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JON_SNOW),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.BRAN_STRAK),
    ],
    returnCharacters:[Types.Characters.STANNIS_BARATHEON,Types.Characters.LORD_BAELISH],
    responseCharactersBonus:[
        createCharResponse(Types.Characters.EDDISON_TOLLET, true, undefined, undefined),
        createCharResponse(Types.Characters.MEERA_REED, true, undefined, undefined)
    ]
};

const dodo = {
    name: "Dodo",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, false, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, false, true, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.SANSA_STARK),
        createCharResponse(Types.Characters.JAIME_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, undefined, Types.Characters.RE_DELLA_NOTTE),
        createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, true, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, true, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.IL_MASTINO),
        createCharResponse(Types.Characters.SAMWELL_TARLY, false, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.BRONN, false, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, undefined, Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, Types.Characters.JAIME_LANNISTER),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, false, false, Types.Characters.VISERION),
        createCharResponse(Types.Characters.VISERION, false, undefined, Types.Characters.DROGON),
        createCharResponse(Types.Characters.RHAEGAL, true, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, true, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, false),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JORAH_MORMONT),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.TYRION_LANNISTER),
    ],
    returnCharacters:[],
    responseCharactersBonus:[]
}
const rusty = {
    name: "Rusty",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, false, true, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.TYRION_LANNISTER),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, Types.Characters.CERSEI_LANNISTER),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, Types.Characters.LA_MONTAGNA),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, Types.Characters.CERSEI_LANNISTER),
        createCharResponse(Types.Characters.MELISANDRE, false, true, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, Types.Characters.LA_MONTAGNA),
        createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, true, Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, false, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, Types.Characters.LA_MONTAGNA),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, true, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, false, undefined, Types.Characters.JAIME_LANNISTER),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, true, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, true, undefined),
        createCharResponse(Types.Characters.GENDRY, false, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, false, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, true, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, true, undefined),
        createCharResponse(Types.Characters.NYMERIA, false, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, false)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JON_SNOW),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.SANSA_STARK),
    ],
    returnCharacters:[],
    responseCharactersBonus:[]
}
const leoG = {
    name: "GasLeo",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, false, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, Types.Characters.RE_DELLA_NOTTE),
        createCharResponse(Types.Characters.TYRION_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, true, Types.Characters.RE_DELLA_NOTTE),
        createCharResponse(Types.Characters.IL_MASTINO, false, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, true, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, false, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, false, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, true, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, true, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, true, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, false, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, false, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, false)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.ARYA_STARK),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.FIGLIO_DI_JON_AND_DAENERYS),
    ],
    returnCharacters:[],
    responseCharactersBonus:[
        createCharResponse(Types.Characters.ILYN_PAYNE, false, undefined, Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.ELLARIA_SAND, false, undefined, undefined)
    ]
}
const leoB = {
    name: "Leo B.",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, false, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, Types.Characters.EURON_GREYJOY),
        createCharResponse(Types.Characters.THEON_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, false, undefined, Types.Characters.LA_MONTAGNA),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.IL_MASTINO),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, true, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, false, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, Types.Characters.THEON_GREYJOY),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, false, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, false, undefined, Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, Types.Characters.DROGON),
        createCharResponse(Types.Characters.RHAEGAL, true, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, undefined, Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, false),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JON_SNOW),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.DAENERYS_TARGARYEN),
    ],
    returnCharacters:[],
    responseCharactersBonus:[]
}
const ross = {
    name: "Ross",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, false, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.JAIME_LANNISTER),
        createCharResponse(Types.Characters.JAIME_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, false, undefined, Types.Characters.CERSEI_LANNISTER),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, Types.Characters.EURON_GREYJOY),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.IL_MASTINO),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, true, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, Types.Characters.ARYA_STARK),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, Types.Characters.JAIME_LANNISTER),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, true, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, true, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.ARYA_STARK),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.JON_SNOW),
    ],
    returnCharacters:[],
    responseCharactersBonus:[]
}
const dani = {
    name: "Dani",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, false, true, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, false, true, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, false, true, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.JAIME_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, false, true, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, true, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, false, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.IL_MASTINO),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, false, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, true, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, false, true, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, true, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, false, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, true, undefined),
        createCharResponse(Types.Characters.NYMERIA, false, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.BRAN_STRAK),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.DAENERYS_TARGARYEN),
    ],
    returnCharacters:[],
    responseCharactersBonus:[]
}
const mazzio = {
    name: "Mazzio",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, false, true, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, false, true, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, false, true, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, false, undefined, Types.Characters.RE_DELLA_NOTTE),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, Types.Characters.CERSEI_LANNISTER),
        createCharResponse(Types.Characters.TYRION_LANNISTER, false, undefined, Types.Characters.CERSEI_LANNISTER),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, true, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, true, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, false, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.JAIME_LANNISTER),
        createCharResponse(Types.Characters.SAMWELL_TARLY, false, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, false, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, false, true, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, false, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, false, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, true, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, false, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, false, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, false, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, false, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, false, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.NOBODY),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.NOBODY),
    ],
    returnCharacters:[],
    responseCharactersBonus:[]
}
const isa = {
    name: "Isa",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, false, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, Types.Characters.IL_MASTINO),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, false, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, false, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, false, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, false, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, false)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JON_SNOW),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.NOBODY),
    ],
    returnCharacters:[],
    responseCharactersBonus:[
        createCharResponse(Types.Characters.LYANNA_MORMONT, true, undefined,undefined),
        createCharResponse(Types.Characters.MEERA_REED, true, undefined, undefined)

    ]
};
const chiara = {
    name: "Chiara",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, false, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, false, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, false, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, true, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, Types.Characters.TYRION_LANNISTER),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, undefined, Types.Characters.PARTO),
        createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, Types.Characters.DAVOS_SEAWORTH),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, false, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, undefined),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, true, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, true, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, false, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, Types.Characters.THEON_GREYJOY),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, false, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, false, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, false)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JON_SNOW),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.FIGLIO_DI_JON_AND_DAENERYS),
    ],
    returnCharacters:[],
    responseCharactersBonus:[]
}
const pasqua = {
    name: "Pasqua",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, false, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, false, undefined, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, true, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, false, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, undefined, undefined),
        createCharResponse(Types.Characters.SAMWELL_TARLY, false, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, false, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, false, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, true, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, true, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, true, undefined, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, false, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, undefined, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, undefined),
        createCharResponse(Types.Characters.GENDRY, false, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, false, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, false, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, false, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, false, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, false),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.TORMUND),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.DAENERYS_TARGARYEN),
    ],
    returnCharacters:[Types.Characters.BRYNDEN_TULLY,Types.Characters.OLENNA_TYRELL],
    responseCharactersBonus:[
        createCharResponse(Types.Characters.LYANNA_MORMONT, false, undefined,undefined)
    ]
};
const pie = {
    name: "Pedrone",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, false, true, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, false, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, false, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, false, true, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, true, undefined),
        createCharResponse(Types.Characters.TYRION_LANNISTER, false, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, false, true, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.THEON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, false, true, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, false, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, false, true, undefined),
        createCharResponse(Types.Characters.SAMWELL_TARLY, false, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, false, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, false, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, false, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, false, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, false, true, undefined),
        createCharResponse(Types.Characters.PODRICK_PAYNE, false, true, undefined),
        createCharResponse(Types.Characters.TORMUND, false, true, undefined),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, true, undefined),
        createCharResponse(Types.Characters.GENDRY, false, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, false, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, false, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, undefined),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, undefined),
        createCharResponse(Types.Characters.DAARIO, false, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, true, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, true, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.NOBODY),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.RE_DELLA_NOTTE),
    ],
    returnCharacters:[],
    responseCharactersBonus:[ ]
};
const ila = {
    name: "Ila",
    responseCharacters: [
        createCharResponse(Types.Characters.JON_SNOW, true, undefined, undefined),
        createCharResponse(Types.Characters.SANSA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.ARYA_STARK, true, undefined, undefined),
        createCharResponse(Types.Characters.BRAN_STRAK, false, true, undefined),
        createCharResponse(Types.Characters.CERSEI_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.JAIME_LANNISTER, false, undefined, Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.TYRION_LANNISTER, true, undefined, undefined),
        createCharResponse(Types.Characters.DAENERYS_TARGARYEN, true, undefined, undefined),
        createCharResponse(Types.Characters.YARA_GREYJOY, false, undefined, Types.Characters.EURON_GREYJOY),
        createCharResponse(Types.Characters.THEON_GREYJOY, true, undefined, undefined),
        createCharResponse(Types.Characters.MELISANDRE, true, undefined, undefined),
        createCharResponse(Types.Characters.JORAH_MORMONT, false, undefined, undefined),
        createCharResponse(Types.Characters.IL_MASTINO, true, undefined, undefined),
        createCharResponse(Types.Characters.LA_MONTAGNA, true, undefined, undefined),
        createCharResponse(Types.Characters.SAMWELL_TARLY, true, undefined, undefined),
        createCharResponse(Types.Characters.GILLY, true, undefined, undefined),
        createCharResponse(Types.Characters.SAM_LITTLE, true, undefined, undefined),
        createCharResponse(Types.Characters.LORD_VARYS, true, undefined, undefined),
        createCharResponse(Types.Characters.BRIENNE_DI_TARTH, false, undefined, undefined),
        createCharResponse(Types.Characters.DAVOS_SEAWORTH, true, undefined, undefined),
        createCharResponse(Types.Characters.BRONN, false, undefined, Types.Characters.LA_MONTAGNA),
        createCharResponse(Types.Characters.PODRICK_PAYNE, true, undefined, undefined),
        createCharResponse(Types.Characters.TORMUND, false, false, Types.Characters.ESTRANEI),
        createCharResponse(Types.Characters.VERME_GRIGIO, false, undefined, Types.Characters.ESERCITO_LANNISTER),
        createCharResponse(Types.Characters.GENDRY, true, undefined, undefined),
        createCharResponse(Types.Characters.MISSANDEI, true, undefined, undefined),
        createCharResponse(Types.Characters.BERIC_DONDARRION, true, undefined, undefined),
        createCharResponse(Types.Characters.EURON_GREYJOY, false, undefined, Types.Characters.THEON_GREYJOY),
        createCharResponse(Types.Characters.JAQUEN_H_GHAR, true, undefined, undefined),
        createCharResponse(Types.Characters.QUIBURN, false, undefined, Types.Characters.JON_SNOW),
        createCharResponse(Types.Characters.DAARIO, true, undefined, undefined),
        createCharResponse(Types.Characters.DROGON, true, undefined, undefined),
        createCharResponse(Types.Characters.VISERION, false, undefined, undefined),
        createCharResponse(Types.Characters.RHAEGAL, true, undefined, undefined),
        createCharResponse(Types.Characters.GHOST, true, undefined, undefined),
        createCharResponse(Types.Characters.NYMERIA, true, undefined, undefined)
    ],
    responsePregnantQuestion: [
        createPregnantResponse(Types.Question.DarnerysPregnant, true),
        createPregnantResponse(Types.Question.CerseiPregnant, true)
    ],
    responseQuestion: [
        createQuestionResponse(Types.Question.KillNightKing, Types.Characters.JON_SNOW),
        createQuestionResponse(Types.Question.KingOfThrone, Types.Characters.SANSA_STARK),
    ],
    returnCharacters:[Types.Characters.KHAL_DROGO],
    responseCharactersBonus:[ ]
}

const users = [];
 /*    users.push(bassoRes);
    users.push(terryRes);
    users.push(pippoRes); */
    users.push(basso);
    users.push(pilla);
    users.push(gin);
    users.push(bucca);
    users.push(capo);
    users.push(robbi);
    users.push(terry);
    users.push(clodo);
    users.push(dino);
    users.push(lollo);
    users.push(ludo);
    users.push(marco);
    users.push(lucia);
    users.push(martina);
    users.push(marche);
    users.push(mela);
    users.push(simo);
    users.push(julius);
    users.push(selmi);
    users.push(nicolo);
    users.push(cape);
    users.push(sangio);
    users.push(piero);
    users.push(martello);
    users.push(jack);
    users.push(francesca);
    users.push(berto);
    users.push(bore);
    users.push(feids);
    users.push(dodo);
    users.push(rusty);
    users.push(leoB);
    users.push(leoG);
    users.push(ross);
    users.push(dani);
    users.push(isa);
    users.push(mazzio);
    users.push(chiara);
    users.push(pasqua);
    users.push(pie);
    users.push(ila);
    