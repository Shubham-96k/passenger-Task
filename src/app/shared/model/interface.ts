
type chck = number | null;
type child = Ichildren[] | null;

export interface Ipassenger {
        id: number,
        fullname: string,
        checkedIn: boolean,
        checkInDate: chck,
        children: child,
}

export interface Ichildren{
     name: string, 
    age: number 
}