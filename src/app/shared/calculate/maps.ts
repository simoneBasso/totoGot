import { Types } from '../enum/types'
var CHAR = Types.Characters;
var QUESTION = Types.Question;


var charMap = new Map();

charMap.set(CHAR.ARYA_STARK, "ARYA STARK");
charMap.set(CHAR.BERIC_DONDARRION, "BERIC DONDARRION");
charMap.set(CHAR.BRAN_STRAK, "BRAN STARK");
charMap.set(CHAR.BRIENNE_DI_TARTH, "BRIENNE DI TARTH");
charMap.set(CHAR.BRONN, "BRONN");
charMap.set(CHAR.CERSEI_LANNISTER, "CERSEI LANNISTER");
charMap.set(CHAR.DAARIO, "DAARIO");
charMap.set(CHAR.DAENERYS_TARGARYEN, "DAENERYS TARGARYEN");
charMap.set(CHAR.DAVOS_SEAWORTH, "DAVOS SEAWORTH");
charMap.set(CHAR.DROGONO, "DROGONO");
charMap.set(CHAR.EURON_GREYJOY, "EURON GREYJOY");
charMap.set(CHAR.GENDRY, "GENDRY");
charMap.set(CHAR.GHOST, "GHOST");
charMap.set(CHAR.GILLY, "GILLY");
charMap.set(CHAR.IL_MASTINO, "IL MASTINO");
charMap.set(CHAR.LA_MONTAGNA, "LA MONTAGNA");
charMap.set(CHAR.JAIME_LANNISTER, "JAIME LANNISTER");
charMap.set(CHAR.JAQUEN_H_GHAR, "JAQUEN H GHAR");
charMap.set(CHAR.JON_SNOW, "JON SNOW");
charMap.set(CHAR.JORAH_MORMONT, "JORAH MORMONT");
charMap.set(CHAR.LORD_VARYS, "LORD VARYS");
charMap.set(CHAR.MELISANDRE, "MELISANDRE");
charMap.set(CHAR.MISSANDEI, "MISSANDEI");
charMap.set(CHAR.NYMERIA, "NYMERIA");
charMap.set(CHAR.PODRICK_PAYNE, "PODRICK PAYNE");
charMap.set(CHAR.QUIBURN, "QUIBURN");
charMap.set(CHAR.RHAEGAL, "RHAEGAL");
charMap.set(CHAR.SAMWELL_TARLEY, "SAMWELL TARLEY");
charMap.set(CHAR.SAM_LITTLE, "SAM LITTLE");
charMap.set(CHAR.SANSA_STARK, "SANSA STARK");
charMap.set(CHAR.THEON_GREYJOY, "THEON GREYJOY");
charMap.set(CHAR.TORMUND, "TORMUND");
charMap.set(CHAR.TYRION_LANNISTER, "TYRION LANNISTER");
charMap.set(CHAR.VERME_GRIGIO, "VERME GRIGIO");
charMap.set(CHAR.VISERION, "VISERION");
charMap.set(CHAR.YARA_GREYJOY, "YARA GREYJOY");

charMap.set(CHAR.UNDEFINED, "Non definito");
charMap.set(CHAR.NOT_CLEAR, "Non chiaro");

var questionsMap = new Map();
questionsMap.set(QUESTION.CerseiPregnant, "Cersei è incinta?");
questionsMap.set(QUESTION.DarnerysPregnant, "Daenerys  è incinta?");
questionsMap.set(QUESTION.KillNightKing, "Chi ucciderà il Re della Notte?");
questionsMap.set(QUESTION.KingOfThrone, "Chi salirà sul trono di spade alla fine?");


export class GotMaps
{
    charMap: Map<Types.Characters,string>
    questionsMap:Map<Types.Question,string>

    constructor(){
        this.charMap = charMap;
        this.questionsMap = questionsMap;
    }
    
}