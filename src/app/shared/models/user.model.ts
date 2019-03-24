import { ResponseCharacter,
    ResponseQuestion,
    ResponsePregnantQuestion } from './response_characters.model';
import { Types } from '../enum/types';


export class User
{
    name:string;
    responseCharacters:ResponseCharacter[];
    responsePregnantQuestion:ResponsePregnantQuestion[];
    responseQuestion:ResponseQuestion[];
    returnCharacters:Types.Characters[];
    
}