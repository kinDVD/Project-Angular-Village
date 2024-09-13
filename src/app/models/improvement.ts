export interface Improvements{
    type: string;
    level: number;
    cost: Resources[];

}
export interface Resources{
    lumber: number;
    grain: number;
    water: number;
    sheep: number;
    people: number
}
