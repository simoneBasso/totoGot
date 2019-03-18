import { ResponseCharacter,
    ResponseQuestion,
    ResponsePregnantQuestion } from './response_characters.model';


export class User
{
    name:string;
    responseCharacters:ResponseCharacter[];
    responsePregnantQuestion:ResponsePregnantQuestion[];
    responseQuestion:ResponseQuestion[];
    
}