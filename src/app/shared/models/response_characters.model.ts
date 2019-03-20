
import { Types } from '../enum/types'
export class ResponseCharacter
{
    name:Types.Characters;
    alive?:boolean;
    becameNight?:boolean;
    killedBy?: Types.Characters;
    
}

export class ResponsePregnantQuestion
{
    type:Types.Question;
    response?:boolean;  
}

export class ResponseQuestion
{
    type:Types.Question;
    response:Types.Characters;
    
}
