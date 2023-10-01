import {Column, Entity} from "typeorm"

@Entity()
export class Unit {
    @Column()
    id: number

    @Column()
    value: any // todo: or is it always a number?

    @Column()
    name: string
}
