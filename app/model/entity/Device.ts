import {Column, Entity} from "typeorm"

@Entity()
export class Device {
    @Column()
    id: number

    @Column()
    name: string
}
